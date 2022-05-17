import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { FaPaperPlane } from "react-icons/fa";
import axios from 'axios';
import ScrollToBottom from 'react-scroll-to-bottom';

const Chatroom = ({ props, socket, room }) => {
    const [username, setUsername] = useState("Leander");
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    //join the correct Room
    
    //sending a message and storing the data, getting the date etc
    const sndMssg = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            };
            // list all the data from the message to display on the chatroom
            await socket.emit("sndMssg", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("")
        }
    };

    const joinRoom = () => {
        if (room !== null) {
            socket.emit("joinRoom", room);
        }
    }
    
    useEffect(() => {
        socket.on("receiveMessage", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <Col md={12} className="ChatCon" onMouseOver={joinRoom}>
            <Col md={12} className="Header"> <h2 className='text-center'>Staff Updates</h2></Col>
            <Col md={12} className="Wbody">
                <p className='fromThem' id='Defaultmssg'>Welcome to chatRoom {room}</p>
                {messageList.map((messageContent) =>
                    <p className={username === messageContent.author ? "fromMe" : "fromThem"}>{messageContent.message}</p>
                )}
            </Col>
            <Col md={{ span: 11 }} className="messageType">
                <input
                    type={"text"}
                    className="text"
                    value={currentMessage}
                    placeholder="type message"
                    onChange={(event) => { setCurrentMessage(event.target.value); }}
                    onKeyPress={(event) => { event.key === "Enter" && sndMssg() }}
                />
                <div className='send' onClick={sndMssg}><FaPaperPlane color='#2663d4' size={24} /></div>
            </Col>
        </Col>
    );
};

export default Chatroom;