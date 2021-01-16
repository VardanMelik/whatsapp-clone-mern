const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Message = require('./dbMessages');
// app config
const app = express();
const port = process.env.port || 9000;

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

// DB congif
const dbURL = 'mongodb://localhost:27017/whatsapp';

// Setup default mongoose connection
mongoose.connect(dbURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(   () => console.log('DB connection succesful!'))
.catch( err => console.log('Could not contact with database'))




//Middleware

// API Routes
app.get('/', (req, res) => {
    //res.status(200).send('Server is running');
    res.json('Server is running');
})

app.post('/messages/new', (req, res) => {
    dbMessage = req.body;

    /*Message.create(dbMessage, (err, data) => {
        if (err) {
            res.json(500).send(err);
        } else 
        {
            res.status(201).send(data);
        }
    })*/
    Message.save()
            .then(  data => res.send(data))
            .catch( err => res.status(500).send({
                message: err.message || 'Some error during creation new message'
            }));
})



// Listening to server
app.listen(port, () => {
    console.log(`Server is running ${port}`);
})

