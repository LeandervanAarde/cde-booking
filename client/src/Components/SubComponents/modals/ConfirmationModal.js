import * as React from "react";
import { useEffect, useState } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaUserCheck } from "react-icons/fa";

export const ConfirmationModal = (props) => {
    return (
        ReactDOM.createPortal(
            <>
                <Col md={12} className='backdrop' > </Col>
                <Col md={{ span: 6 }} className="Modal" id={"deleteModal"}>
                    <Col md={12}>
                        <FaUserCheck className="userDelete" size={150} />
                        <h2>{props.content}</h2>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} className="btnContainer" > {props.button} </Col>
                </Col>
            </>
            , document.getElementById("root"))
    );
};

