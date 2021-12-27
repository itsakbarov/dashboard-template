import React, { useState } from 'react'
import ReactScrollableFeed from 'react-scrollable-feed'
import './Chat.css'
const Chat = () => {
    const [chatvalue,setChatvalue]=useState({text:''})
    const [chatmasseg,setChatmasseg]=useState([])
    const [chat,setChat]=useState(false)
    const [input,setinput]=useState(false)
    function send() {
        setChatmasseg([...chatmasseg,chatvalue])
        setChatvalue({text:''})
    }
    function show() {
        setChat(!chat)
        if(input===true){
            setinput(!input)
        }
    }
    function inputshow() {
        setinput(!input)
        if(chat===true){
            setChat(!chat)
        }
    }
    return (
        <div className='chat'>
            <div className='title'>
                <span>
                    <h1>Frank Vickery</h1>
                    <p>Active now</p>
                </span>
                <span>
                    <img onClick={inputshow} src='/icons8-search-30.png'/>
                    <img src='/icons8-settings-24.png'/>
                    <img onClick={show} src='/icons8-menu-vertical-24.png'/>
                </span>
            </div>
            <input className={ input ? 'show visile':'show'} type='text' placeholder='Search...'/>
            <div className={chat ? 'for_more active':'for_more'} >
                <ul onClick={show} >
                    <li>Action</li>
                    <li>Another Action</li>
                    <li>Someting else</li>
                </ul>
            </div>
            <div className='chat_item'>
            <ReactScrollableFeed>
                {
                    chatmasseg.map((item)=>{
                        return(
                        <ul>
                            <li><p>Ricky Clark</p> <h1>{item.text}</h1></li>
                            <li><p>Frank Vickery</p><h1>Hey! I am available </h1></li>
                        </ul>
                        )
                    })
                }
            </ReactScrollableFeed>
            </div>
            <div className='type'>
                <input type='text' onChange={(e)=>setChatvalue({ ...chatvalue, text: e.target.value})} value={chatvalue.text} placeholder='Enter Message...' />
                <button onClick={send} >Send <img src='/icons8-email-send-32.png'/></button>
            </div> 
        </div>
    )
}

export default Chat
