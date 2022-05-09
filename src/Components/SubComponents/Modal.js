import React from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from './PrimaryBtn';
import { FaUserPlus } from "react-icons/fa";
//FaUserPlus

const Modal = ({props, setModalOpen}) => {

 
    
    return (
        <>
        <Col md={12} className='backdrop' onClick={ () => {
                return setModalOpen(false);
            }}> </Col>
       <Col md={{span:6}} className="Modal">
           <Col md={12}>

            <Col md={2} className="logo" onClick={ () => {
                        return setModalOpen(false);
                    }}> </Col>
          <h2> Book appointment</h2>
           <hr></hr>
           <h6>Patient Name</h6>
                <input type={'text'} placeholder="patient Name"></input>
                <br></br>
                <h6>Patien nr. &nbsp; &nbsp; &nbsp;</h6>
                <input type={'text'} placeholder="Patient Cell"></input>
                <br></br>
                <h6>Patient Email</h6>
                <input type={'text'} placeholder="Patient email"></input>

                <Col md={{span:3, offset:4}} className="mt-5" onClick={ () => {
                        return setModalOpen(false);
                    }}><Primarybtn ><FaUserPlus size ={25} className="me-3 text-center" /> Add Appointment </Primarybtn></Col>
           </Col>
       </Col>
       </>
    );
};

export default Modal;