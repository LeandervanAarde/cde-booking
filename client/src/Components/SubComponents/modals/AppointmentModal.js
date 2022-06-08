import React from 'react';
import { Col, ProgressBar } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaUserPlus } from "react-icons/fa";

const AppointmentModal = (props) => {
    return (
        <>
        <Col md={12} className='backdrop' onClick={props.func}> </Col>
       <Col md={{span:6}} className="Modal">
           <Col md={12}>

            <Col md={2} className="logo" oonClick={props.func}> </Col>
          <h2> Book appointment</h2>
           <hr></hr>
           <h6>{props.nm}</h6>
                <select>
                   {props.select}
                </select>
                <br></br>
                <h6 className='timeLabel'>{props.startTime}</h6>
                <input type={'time'}  className="time"></input>
                <h6 className='timeLabel' id="right">{props.endTime}</h6>
                <input type={'time'} className="time" ></input>
                <br></br>
                <h6>{props.mail}</h6>
                <input type={'date'} data-date-format="DD MMMM YYYY" placeholder="Doctor email"></input>

                <Col md={{span:3, offset:4}} className="mt-5" onClick={props.func}><Primarybtn ><FaUserPlus size ={25} className="me-3 text-center" /> Add Appointment </Primarybtn></Col>
           </Col>
       </Col>
       </>
    );
};

export default AppointmentModal;