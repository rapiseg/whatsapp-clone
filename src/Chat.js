import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile,MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import React, { useEffect, useState } from 'react';

import"./Chat.css";
import { useParams } from 'react-router-dom';
import db from './firebase';



function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("")
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("")
    
    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            });
        }
        

    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId])
 
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed >>>", input);
        setInput("");
    };
    var url = 'https://avatars.dicebear.com/api/human/'+seed+'.svg';
    return (
        
    
        <div className="chat">
            <div className="chat__header">
                <Avatar  src={url}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
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
                <p className={`chat__message ${true && 'chat__reciever'}`}>
                <span className="chat__name">Api</span>
                Hey Guys
                <span className="chat__timestamp">7:55pm</span>
                </p>
                <p className="chat__message">Hey Guyssssss</p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
