import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';

import React from 'react'
import '../Chat.css';
import SelectInput from '@material-ui/core/Select/SelectInput';

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Sony</span>
                    This is a message
                    <span className="chat_timestamp">
                        { new Date().toUTCString() }
                    </span>
                </p>

                <p className="chat_message chat_reviever">
                    <span className="chat_name">Sony</span>
                    This is a message
                    <span className="chat_timestamp">
                        { new Date().toUTCString() }
                    </span>
                </p>

                <p className="chat_message">
                    <span className="chat_name">Sony</span>
                    This is a message
                    <span className="chat_timestamp">
                        { new Date().toUTCString() }
                    </span>
                </p>            

                <p className="chat_message chat_reviever">
                    <span className="chat_name">Sony</span>
                    This is a message
                    <span className="chat_timestamp">
                        { new Date().toUTCString() }
                    </span>
                </p>

                <p className="chat_message">
                    <span className="chat_name">Sony</span>
                    This is a message
                    <span className="chat_timestamp">
                        { new Date().toUTCString() }
                    </span>
                </p>                
            </div>

            <div className="chat_footer">
                <EmojiEmotionsOutlinedIcon/>
                <form method="POST">
                    <input
                        placeholder="Type a message"
                        type="text"
                    />
                    <button
                    type="submit">
                        Send a message
                    </button>
                    <MicNoneOutlinedIcon/>
                </form>
            </div>

            
        </div>
    )
}

export default Chat
