import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { FaPaperPlane } from "react-icons/fa";
import axios from 'axios';
const Chatroom = (props) => {
    const [mssg, setMssg] = useState();


    // const interval = setInterval(() => {
    //     fetch(')
    //         .then((res) => {
    //             const pMessages = res.messages.map((message) => {
    //                 if (localStorage.getItem("userName") === message.auth) {
    //                     return (<p className='fromMe'>{message.message}<br></br> <span className='StaffName'>~{message.auth}</span></p>);
    //                 } else {
    //                     return (<p className='fromThem'>{message.message}<br></br> <span className='StaffName'>~{message.auth}</span></p>);
    //                 }
    //             });

    //             if (pMessages != mssg) {
    //                 setMssg(pMessages);
    //             }
    //         })

    // }, 1000)

    axios.get('https://leander.dc-web.co.za/API/API.php')
    .then((res) =>{
        console.log(res);
    })
    .catch((err) =>{
        console.log(err);
    })

    return (
        <Col md={12} className="ChatCon">
            <Col md={12} className="Header"> <h2 className='text-center'>{props.chatHead}</h2></Col>
            <Col md={12} className="Wbody">
                {mssg}
            </Col>
            <Col md={{ span: 11 }} className="messageType">
                <input type={"text"} className="text" />
                <div className='send'><FaPaperPlane color='#2663d4' size={24} /></div>
            </Col>
        </Col>
    );
};

export default Chatroom;