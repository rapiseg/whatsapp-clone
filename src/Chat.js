import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

import"./Chat.css";

function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])
    var url = 'https://avatars.dicebear.com/api/human/'+seed+'.svg';
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar  src={url}/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                <span className="chat__name">Api</span>
                Hey Guys
                <span className="chat__timestamp">7:55pm</span>
                </p>
                <p className="chat__message">Hey Guyssssss</p>
            </div>
            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat
