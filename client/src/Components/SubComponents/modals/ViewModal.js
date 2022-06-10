import * as React from "react";
import * as ReactDOM from "react-dom";
import { Col} from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';



const ViewModal = (props) => {
    return (
        ReactDOM.createPortal(
        <>
        <Col md={12} className='backdrop' onClick={props.func}> </Col>
       <Col md={{span:6}} className="Modal">
           <Col md={12}>
            <Col md={2} className="logo" onClick={props.func}> </Col>
          <h2>Patient Name Information</h2>
           <hr></hr>
            <Col md={12} className="con">
                <Col md={{span: 2, offset: 5}} className="patPhoto">
                    <img src={props.image}/>
                </Col>
                <Col md={{span: 12}} className="Name">
                     <h2>Person Name</h2>
                     <p><strong>Age</strong>{props.age}</p>
                     <p><strong>Birth Date</strong>{props.dateOfBirth}</p>
                     <p><strong>Condition</strong>{props.medCondition}</p>
                     <p><strong>Email</strong>{props.email}</p>
                     <p><strong>Last Appointment</strong>{props.prevAppoint} - {props.prevAppointmentDr}</p>
                </Col>
            </Col>
                <Col md={{span:4, offset:4}} className="mt-5" onClick={props.func} ><Primarybtn > Close</Primarybtn></Col>
           </Col>
       </Col>
       </>
       , document.getElementById("root"))
    );
};

export default ViewModal;