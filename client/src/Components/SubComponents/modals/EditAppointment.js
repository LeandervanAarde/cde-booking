import * as React from "react";
import { useEffect, useState, useRef } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { ConfirmationModal } from "./ConfirmationModal";



export const EditAppointment = (props) => {

    const [role, setRole] = useState();
    const speciality = useRef();
    const timeStart = useRef();
    const timeEnd = useRef();
    const dayV = useRef();
    const month = useRef();
    const year = useRef();
    const [close, setClose] = useState();




    useEffect(() => {
        if (sessionStorage.getItem("UserRank") === "Head Receptionist") {
            setRole(true)
        } else {
            setRole(false)
        }
    }, []);

    const changeAppointment = () => {
        let tempArr = {
            Speciality: speciality.current.value.trim(),
            timeStart: timeStart.current.value.trim(),
            timeEnd: timeEnd.current.value.trim(),
            date: dayV.current.value.trim() + " " + month.current.value.trim() + " " + year.current.value.trim(),
            id: props.id,
            doctor: props.Dr,
        };
        axios.post('http://localhost:8888/MedAPI/editAppointment.php', tempArr)
            .then(res => {
                let data = res.data;
                setClose(props.func);
  
            })
            .catch(err => {
                console.log(err);
            })
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
                            <input name="Speciality" defaultValue={props.special} ref={speciality} className="speciality"></input>
                            <br />
                            <label for="timeStart">Start time</label>
                            <input defaultValue={props.time} name="timeStart" ref={timeStart} type={'time'} className="time"></input>
                            <label for="timeEnd">End time</label>
                            <input defaultValue={props.timeEnd} name="timeEnd" ref={timeEnd} type={'time'} className="time"></input>
                            <br />
                            <label for="Date">Date</label>
                            <input defaultValue={props.day} o ref={dayV} type={'text'} name="Date" placeholder={"Day"} id="day"></input>
                            <input defaultValue={props.month} type={'text'} ref={month} placeholder="Month" id="month"></input>
                            <input defaultValue={props.year} type={'number'} ref={year} placeholder="Year" id="year"></input>
                            <br />
                            <br />
                        </Col>
                        {
                            role ?

                                <>
                                    <Col md={{ span: 4, offset: 1 }} id={props.id} onClick={props.func} className="button"><Primarybtn > Close</Primarybtn></Col>
                                    <Col md={{ span: 5, offset: 1 }} id={props.id} onClick={changeAppointment } className="button"><Primarybtn id={"delete"} > Edit Appointment</Primarybtn></Col>
                                </>
                                :
                                <Col md={{ span: 4, offset: 4 }} id={props.id} onClick={props.func} className={"button"}><Primarybtn > Close</Primarybtn></Col>
                        }
                    </Col>
      
                </Col>
                    
            </>
            , document.getElementById("root"))

    );
};

