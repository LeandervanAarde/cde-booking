import * as React from "react";
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaUserPlus } from "react-icons/fa";

const AppointmentModal = (props) => {
    return (
        ReactDOM.createPortal(
        <>
        <Col md={12} className='backdrop' onClick={props.func}> </Col>
       <Col md={{span:5}} className="Modal">
           <Col md={12}>

            <Col md={2} className="logo" onClick={props.func}> </Col>
          <h2> Book appointment</h2>
           <hr></hr>
           <h6>{props.nm}</h6>
                <select ref={props.ref} onChange={props.getDrop}>
                    <option selected disabled>Select Doctor</option>
                   {props.select}
                </select>
                <br></br>
                <h6 className='text'>{props.special}</h6>
                <input ref={props.specialisation} placeholder={"specialisation"}></input>
                <br/>
                <h6 className='timeLabel'>{props.startTime}</h6>
                <input ref={props.timeBegin} type={'time'}  className="time"></input>
                <h6 className='timeLabel' id="right">{props.endTime}</h6>
                <input type={'time'} ref={props.timeEnd} className="time" ></input>
                <br></br>
                <h6>{props.mail}</h6>
                <input ref={props.day} type={'text'}  placeholder="Day" id="day"></input>
                <input ref={props.month} type={'text'}  placeholder="Month" id="month"></input>
                <input ref={props.year} type={'number'}  placeholder="Day" id="year"></input>

                <Col md={{span:6, offset:3}} className="mt-5" onClick={props.function}><Primarybtn onClick={props.close} ><FaUserPlus size ={25} className="me-3 text-center" /> Add Appointment </Primarybtn></Col>
           </Col>
       </Col>
       </>
        , document.getElementById("root"))
    );
};

export default AppointmentModal;