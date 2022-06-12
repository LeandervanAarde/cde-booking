import React from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaUserPlus } from "react-icons/fa";
//FaUserPlus

const Modal = (props) => {

    return (
        <>
        <Col md={12} className='backdrop' onClick={props.func}> </Col>
       <Col md={{span:6}} className="Modal">
           <Col md={12}>

            <Col md={2} className="logo" onClick={props.func}> </Col>
          <h2> Book appointment</h2>
           <hr></hr>
           <h6>{props.nm}</h6>
                <select>
                   {props.select}
                </select>
                <br></br>
                <h6>{props.cont} &nbsp;</h6>
                <input type={'text'} placeholder="Patient Cell"></input>
                <br></br>
                <h6>{props.mail}</h6>
                <input type={'text'} placeholder="Patient email"></input>

                <Col md={{span:3, offset:4}} className="mt-5" onClick={props.func}><Primarybtn ><FaUserPlus size ={25} className="me-3 text-center" /> Add Appointment </Primarybtn></Col>
           </Col>
       </Col>
       </>
    );
};

export default Modal;