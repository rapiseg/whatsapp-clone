import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import './SidebarChat.css'
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("")

    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);
    useEffect(() =>{
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter a name for the chat room");
        if(roomName) {
            // do something
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    var url = 'https://avatars.dicebear.com/api/human/'+seed+'.svg'
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat"> 
            <Avatar src={url} />
            <div className='sidebarChat__info'>
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
            </div>
        </Link>
        
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>add new chat</h2>
        </div>
    );
}

export default SidebarChat

/*import React, {useEffect, useState} from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from './firebase';
import { Link } from "react-router-dom";
 
function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState('');
 
 
    useEffect(() => {    
        setSeed(Math.floor(Math.random() * 5000))
    }, []);
 
    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
 
        if(roomName) {
            // do some clever stuff database stuff...
            db.collection('rooms').add({
                name: roomName,
            });
        }
 
 
    };
 
 
    return !addNewChat ? (
        <Link to ={`/rooms/${id}`}>
            <div className = 'sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Last message...</p> 
                </div>
            </div>
        </Link>
      
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}
 
export default SidebarChat
    
*/
