import * as React from "react";
import {useEffect, useState} from 'react';
import * as ReactDOM from "react-dom";
import { Col} from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaUserTimes} from "react-icons/fa";

export const ConfirmationModal = (props) => {
    return (
        ReactDOM.createPortal(
            <>
            <Col md={12} className='backdrop'> </Col>
           <Col md={{span:6}} className="Modal">
                <Col md={12}>
                    <FaUserTimes/>
                    <h2>Patient has been Deleted</h2>
                </Col>
                <Col md={{span: 4, offset: 4}}> {props.button} </Col>
            </Col>
           </>
           , document.getElementById("root"))
    );
};

