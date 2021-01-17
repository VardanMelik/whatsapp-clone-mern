const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Message = require('./dbMessages');
const Pusher = require('pusher');

// app config
const app = express();
const port = process.env.port || 9000;

// Header
app.use( (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
})

// Express Middleware
//app.use(express.json())

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

// DB congif
//const dbURL = 'mongodb://localhost:27017/whatsapp';
const dbURL = 'mongodb+srv://whatsapp-mern-admin-access:DPtKwdwQPphSHiPK@cluster0.ponpo.mongodb.net/whatsappdb?retryWrites=true&w=majority'

// Setup default mongoose connection
mongoose.connect(dbURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(   () => console.log('DB connection succesful!'))
.catch( err => console.log('Could not contact with database'))


const db = mongoose.connection;
db.once('open', () => {
  
    const whatsappCollection = db.collection('whatsappschemas');
    const changeStream = whatsappCollection.watch();
   
    changeStream.on("change", change => {
        // process any change event
        console.log( new Date(), change);
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('message','inserted', {
                name: messageDetails.user,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log('Error triggering Pusger');
        }
      });
})

//Middleware

// API Routes
app.get('/', (req, res) => {
    //res.status(200).send('Server is running');
    res.json('Server is running');
})

// Pusher.com
const pusher = new Pusher({
    appId: "1139455",
    key: "d4c0ea32ab68d1425989",
    secret: "dc12623a92792709481f",
    cluster: "eu",
    useTLS: true
  });


app.post('/messages/sync', (req, res) => {
    Message.find()
            .then( data => res.send(data))
            .catch( err => err.message || 'Some error during find')
})

app.post('/messages/new', (req, res) => {
    dbMessage = req.body;

    //console.log(req.body);
    Message.create(dbMessage)
            .then(  data => res.send(data))
            .catch( err => res.status(500).send({
                message: err.message || 'Some error during creation new message'
            }));
})



// Listening to server
app.listen(port, () => {
    console.log(`Server is running ${port}`);
})

