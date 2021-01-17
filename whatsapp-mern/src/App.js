import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect( () => {
    axios.post('/messages/sync')
      .then( response => {
        console.log(response.data);
        setMessages(response.data);
      })
      .catch( err => console.log('Reading messages error: ' + err))
  }, []); 

  // Pusheing new inserts from DB
  useEffect( () => {
    const pusher = new Pusher('d4c0ea32ab68d1425989', {
      cluster: 'eu'
    });
    const channel = pusher.subscribe('message');
    channel.bind('inserted',(data) => {
      alert(JSON.stringify(data));
    });
  
  }, []);
  console.log('Before Message');
  console.log('Messages: ' + messages);
  
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat />
      </div>
    </div>
  );
}

export default App;
