import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { FaPaperPlane } from "react-icons/fa";
import axios from 'axios';

const Chatroom = (props) => {
    const [mssg, setMssg] = useState();
    const apiLink = 'https://leander.dc-web.co.za/API/API.php/';

    useEffect(() => {
        axios.get(apiLink)
            .then((response) => {
                let data = response;
                console.log(response);
             
            })
    }, [apiLink]);
   
    return (
        <Col md={12} className="ChatCon">
            <Col md={12} className="Header"> <h2 className='text-center'>{props.chatHead}</h2></Col>
            <Col md={12} className="Wbody">
                <p className='fromMe'>Hello</p>
            </Col>
            <Col md={{ span: 11 }} className="messageType">
                <input type={"text"} className="text" />
                <div className='send'><FaPaperPlane color='#2663d4' size={24} /></div>
            </Col>
        </Col>
    );
};

export default Chatroom;