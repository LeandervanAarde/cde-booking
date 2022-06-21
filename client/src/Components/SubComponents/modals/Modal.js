import * as React from "react";
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaUserPlus } from "react-icons/fa";
import { DeletModal } from "./DeletModal";
//FaUserPlus

const Modal = (props) => {

    return (
        ReactDOM.createPortal(
        <>
        <Col md={12} className='backdrop' onClick={props.func}> </Col>
       <Col md={{span:6}} className="Modal">
           <Col md={12}>

            <Col md={2} className="logo" onClick={props.func}> </Col>
          <h2> Book appointment</h2>
           <hr></hr>
           <h4>{props.doctor}</h4>
           <h6>{props.nm}</h6>
                <select onChange={props.getDetails}>
                   {props.select}
                </select>
                <br></br>
             
                <h6>{props.cont} &nbsp;</h6>
                <input type={'text'} placeholder="Patient Cell"></input>
                <br></br>
                <h6>{props.mail}</h6>
                <input type={'text'} placeholder="Patient email"></input>

                <Col md={{span:4, offset:4}} className="mt-5" onClick={props.func}><Primarybtn onClick={props.function} ><FaUserPlus size ={25} className="me-3 text-center" /> Add Appointment </Primarybtn></Col>
           </Col>
       </Col>
       </>
       , document.getElementById("root"))
    );
};

export default Modal;