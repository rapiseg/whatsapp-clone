import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import './SidebarChat.css'

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState("");
    useEffect(() =>{
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter a name for the chat");
        if(roomName) {
            // do something
        }
    };

    var url = 'https://avatars.dicebear.com/api/human/'+seed+'.svg'
    return !addNewChat ? (
        <div className="sidebarChat"> 
            <Avatar src={url}/>
            <div className='sidebarChat__info'>
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>add new chat</h2>
        </div>
    )
}

export default SidebarChat
