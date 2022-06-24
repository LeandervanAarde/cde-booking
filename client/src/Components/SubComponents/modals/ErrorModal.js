import * as React from "react";
import { useEffect, useState, useRef } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaEdit } from "react-icons/fa";

const ErrorModal = (props) => {
    return (
        ReactDOM.createPortal(
            <>
                        <Col md={12} className='backdrop' onClick={props.func}> </Col>
                        <Col md={{ span: 5 }} className="Modal ">
                           
                        </Col>

            </>
            , document.getElementById("root"))
    );
};

export default ErrorModal;