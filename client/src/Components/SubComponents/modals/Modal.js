import * as React from "react";
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaUserPlus } from "react-icons/fa";
import { DeletModal } from "./ConfirmationModal";
import { useState } from "react";
import axios from "axios"

//FaUserPlus

const Modal = (props) => {
    const [selected, setSelected] = useState();

    const bookNewAppointment = (e) =>{
        const patient = selected;

        let targ = props.id
        
        let appointmentInformation ={
            patientId: patient,
            appointId: targ
        };
        axios.post("http://localhost:8888/MedAPI/bookAppointment.php", appointmentInformation)
        .then(res =>{
            let data = res.data;
       
        })
        .catch(err =>{
            console.log(err); 
        })
    }

    return (
        ReactDOM.createPortal(
        <>
        <Col md={12} className='backdrop' onClick={props.func}> </Col>
       <Col md={{span:6}} className="Modal">
           <Col md={12}>

            <Col md={2} className="logo" onClick={props.func}> </Col>
          <h2> Book appointment </h2>
           <hr></hr>
           <h4>{props.doctor}</h4>
           <h6>{props.nm}</h6>
                <select ref={props.pName} onChange={(e) => {setSelected(e.target.value);}} >
                   {props.select}
                </select>
                <br></br>
             
                <h6>{props.cont} &nbsp;</h6>
                <input type={'text'} placeholder="Patient Cell"></input>
                <br></br>
                <h6>{props.mail}</h6>
                <input type={'text'} placeholder="Patient email"></input>

                <Col md={{span:4, offset:4}} className="mt-5 " ><Primarybtn function={bookNewAppointment} ><FaUserPlus size ={25} className="me-3 text-center" /> Add Appointment </Primarybtn></Col>
           </Col>
       </Col>
       </>
       , document.getElementById("root"))
    );
};

export default Modal;