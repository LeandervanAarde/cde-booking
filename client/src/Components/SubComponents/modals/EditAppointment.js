import * as React from "react";
import { useEffect, useState } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaEdit } from "react-icons/fa";


export const EditAppointment = (props) => {

    const [role, setRole] = useState();

    useEffect(() => {
        if (sessionStorage.getItem("UserRank") === "Head Receptionist") {
            setRole(true)
        } else {
            setRole(false)
        }
    }, []);

    const editPatient = () => {
        console.log(props.name)
    }

    const test = (e) =>{
        console.log(e.target.value)
    }

    return (
        ReactDOM.createPortal(
            <>
                <Col md={12} className='backdrop' onClick={props.func}> </Col>
                <Col md={{ span: 5 }} className="Modal ">
                    <Col md={12}>
                        <Col md={2} className="logo" onClick={props.func}> </Col>
                        <h4>Edit appointment for {props.Dr}</h4>
                        <hr></hr>
                        <Col md={12} className="con " id="patientModal">
                            <label for="Speciality">Speciality</label>
                            <input name="Speciality" value={props.special} onChange={test} className="speciality"></input>
                            <br/>
                            <label for="timeStart">Start time</label>
                            <input value={props.time} name="timeStart" type={'time'} className="time"></input>

                            <label for="timeEnd">End time</label>
                            <input value={props.timeEnd} name="timeEnd" type={'time'} className="time"></input>
                            <br/>
                            <label for="Date">Date</label>
                            <input value={props.day} type={'text'} name="Date" placeholder={"Day"} id="day"></input>
                            <input value={props.month} type={'text'}  placeholder="Month" id="month"></input>
                            <input value={props.year} type={'number'}  placeholder="Year" id="year"></input>
                            <br/>
                            <br/>
                        </Col>
                        {
                            role ?

                                <>
                                    <Col md={{ span: 4, offset: 1 }} id={props.id} onClick={props.func} className="button"><Primarybtn > Close</Primarybtn></Col>
                                    <Col md={{ span: 5, offset: 1 }} id={props.id} onClick={props.delete} className="button"><Primarybtn id={"delete"} > Edit Appointment</Primarybtn></Col>
                                </>
                                :
                                <Col md={{ span: 4, offset: 4 }} id={props.id}  onClick={props.func} className="button"><Primarybtn > Close</Primarybtn></Col>
                        }
                    </Col>
                </Col>
            </>
            , document.getElementById("root"))
    );
};

