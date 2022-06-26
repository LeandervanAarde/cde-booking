import * as React from "react";
import { useEffect, useState, useRef } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaUserLock } from "react-icons/fa";

const ErrorModal = (props) => {
    return (
        ReactDOM.createPortal(
            <>
                <Col md={12} className='backdrop' onClick={props.func}> </Col>
                <Col md={{ span: 5 }} className="Modal ">
                    <Col md={2} className="logo" onClick={props.func}> </Col>
                    <h2> Book appointment </h2>
                    <hr></hr>
                    <Col md={12}>
                        <FaUserLock className="userExist" size={150} />
                        <h2>{props.content}</h2>
                        <Col md={{span:4, offset: 4}} className={"closeModal mt-4"}>{props.button}</Col>
                    </Col>
                  
                </Col>

            </>
            , document.getElementById("root"))
    );
};

export default ErrorModal;