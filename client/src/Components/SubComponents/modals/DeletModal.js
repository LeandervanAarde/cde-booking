import * as React from "react";
import {useEffect, useState} from 'react';
import * as ReactDOM from "react-dom";
import { Col} from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaUserTimes} from "react-icons/fa";

export const DeletModal = (props) => {
    const [individual, setIndividual] = useState({
       id: "",
       name: ""
    });

    const confirmDeletion = (e) =>{
        
    }
    return (
        ReactDOM.createPortal(
            <>
            <Col md={12} className='backdrop' onClick={props.func}> </Col>
           <Col md={{span:6}} className="Modal">
                <Col md={12}>
                    <FaUserTimes/>
                    <h2>Patient has been Deleted</h2>
                </Col>
            </Col>
           </>
           , document.getElementById("root"))
    );
};

