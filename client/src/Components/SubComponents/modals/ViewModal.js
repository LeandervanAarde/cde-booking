import * as React from "react";
import {useEffect, useState} from 'react';
import * as ReactDOM from "react-dom";
import { Col} from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';



const ViewModal = (props) => {
    const [role, setRole] = useState();

    useEffect(() =>{
        if(sessionStorage.getItem("UserRank") === "Head Receptionist"){
            setRole(true)
        } else {
            setRole(false)
        }
    }, [])



    return (
        ReactDOM.createPortal(
        <>
        <Col md={12} className='backdrop' onClick={props.func}> </Col>
       <Col md={{span:5}} className="Modal ">
           <Col md={12}>
            <Col md={2} className="logo" onClick={props.func}> </Col>
          <h2>Patient Name Information</h2>
           <hr></hr>
            <Col md={12} className="con " id="patientModal">
                <Col md={{span: 2, offset: 5}} className="patPhoto">
                    <img src={props.image} alt={props.name}/>
                </Col>
                <Col md={{span: 12}} className="Name">
                     <h2>{props.name} {props.surname}</h2>
                     <p><strong>Age: </strong> <span>{props.age}</span></p>
                     <p><strong>Birth Date: </strong><span>{props.dateOfBirth}</span></p>
                     <p><strong>Condition: </strong> <span>{props.medCondition}</span></p>
                     <p><strong>Email: </strong><span>{props.email}</span></p>
                     <p><strong>Last Appointment: </strong><span>{props.prevAppoint} - <strong>{props.prevAppointmentDr}</strong></span></p>
                </Col>
            </Col>
                {
                    role ?
                    
                    <>
                        <Col md={{span:4, offset:1}}  onClick={props.func} className="button"><Primarybtn > Close</Primarybtn></Col>
                        <Col md={{span:5, offset:1}}  onClick={props.delete} className="button"><Primarybtn id={"delete"} > Delete Patients</Primarybtn></Col>
                    </>
                    : 
                    
                    <Col md={{span:4, offset:4}}  onClick={props.func} className="button"><Primarybtn > Close</Primarybtn></Col>
                }
           </Col>
       </Col>
       </>
       , document.getElementById("root"))
    );
};

export default ViewModal;