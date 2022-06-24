import * as React from "react";
import { useEffect, useState, useRef } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaEdit } from "react-icons/fa";
import ErrorModal from "./ErrorModal";



const ViewModal = (props) => {
    const [role, setRole] = useState();
    const [clicked, setClicked] = useState(false);
    const name = useRef();
    const surname = useRef();
    const gender = useRef();
    const number = useRef();
    const email = useRef();
    const medicalAidNumber = useRef();
    const [errorMod, setErrorMod] = useState(false);


    useEffect(() => {
        if (sessionStorage.getItem("UserRank") === "Head Receptionist") {
            setRole(true)
        } else {
            setRole(false)
        }
    }, []);

    const editPatient = () => {
        console.log(props.name)
        setClicked(true)
    }

    const cancelEdit = () => {
        setClicked(false)
    }

    const updatePatient = () =>{
    let name = name.current.value;
    let surname = surname.current.value;
    let gender = gender.current.value;
    let number =number.current.value;
    let email = email.current.value;
    let medicalAid = medicalAidNumber.current.value;

    if(name == "" || surname == "" ){
            setErrorMod(true); 
    }
        let newValues = {
            nm: name,
            surn: surname,
            gen: gender,
            nr: number,
            mail: email,
            medicaNr:medicalAid
        }
    }





    return (
        ReactDOM.createPortal(
            <>
                {clicked
                    ?
                    <>
                        <Col md={12} className='backdrop' onClick={props.func}> </Col>
                        <Col md={{ span: 5 }} className="Modal ">
                            <Col md={12}>
                                <Col md={2} className="logo" onClick={props.func}> </Col>
                                <h2>Patient Name Information</h2>
                                <hr></hr>
                                <Col md={12} className="con " id="patientModal">
                                    <Col md={2} className="edit" onClick={cancelEdit}> <p id="cancel"> <strong>X Cancel</strong></p> </Col>
                                    <Col md={{ span: 2, offset: 5 }} className="patPhoto">
                                        <img src={props.image} alt={props.name} />
                                    </Col>
                                    <Col md={{ span: 12 }} className="Name" id="view">
                                        <label for="name" className="nameL" >Name</label>
                                        <input ref={name} name="name" className="name" id="first" defaultValue={props.name}></input>

                                        <label for="surname" >Last name</label>
                                        <input ref={surname} name="surname" className="name" defaultValue={props.surname}></input>
                                        <br />
                                        <label for="gender" className="nameL" >Gender</label>
                                        <input ref={gender} name="gender" className="gen" defaultValue={props.gender}></input>

                                        <label for="cell">Cell number</label>
                                        <input ref={number} name="cell" id="cell" defaultValue={props.cellphone}></input>
                                        <br />

                                        <label for="email" className="nameL">Email</label>
                                        <input ref={email} name="email" id="email" defaultValue={props.email}></input>
                                        <br />

                                        <label for="medA" className="nameL">Medical Aid</label>
                                        <input ref={medicalAidNumber} name="medA" id="medA" defaultValue={props.medicalAid}></input>
                                    </Col>
                                </Col>
                                {
                                    role ?
                                        <>
                                            <Col md={{ span: 4, offset: 1 }} onClick={props.func} className="button"><Primarybtn > Close</Primarybtn></Col>
                                            <Col md={{ span: 5, offset: 1 }} onClick={updatePatient} className="button"><Primarybtn id={"delete"} > Delete Patients</Primarybtn></Col>
                                        </>
                                        :
                                        <Col md={{ span: 4, offset: 4 }} onClick={props.func} className="button"><Primarybtn > Close</Primarybtn></Col>
                                }
                            </Col>
                        </Col>

                    </>
                    :
                    <>
                        <Col md={12} className='backdrop' onClick={props.func}> </Col>
                        <Col md={{ span: 5 }} className="Modal ">
                            <Col md={12}>
                                <Col md={2} className="logo" onClick={props.func}> </Col>
                                <h2>Patient Name Information</h2>
                                <hr></hr>
                                <Col md={12} className="con " id="patientModal">
                                    <Col md={2} className="edit" onClick={editPatient}><FaEdit size={20} color={"black"} /> <p>Edit</p> </Col>
                                    <Col md={{ span: 2, offset: 5 }} className="patPhoto">
                                        <img src={props.image} alt={props.name} />
                                    </Col>
                                    <Col md={{ span: 12 }} className="Name">

                                        <h2 className="personName">{props.name} {props.surname}</h2>
                                        <p><strong>Age: </strong> <span>{props.age}</span></p>
                                        <p><strong>Gender: </strong> <span>{props.gender}</span></p>
                                        <p><strong>Birth Date: </strong><span>{props.dateOfBirth}</span></p>
                                        <p><strong>Condition: </strong> <span>{props.medCondition}</span></p>
                                        <p><strong>Email: </strong><span>{props.email}</span></p>
                                        <p><strong>Cellphone number: </strong>{props.cellphone}</p>
                                        <p><strong>Medical Aid number: </strong>{props.medicalAid}</p>
                                        <p><strong>Last Appointment: </strong><span>{props.prevAppoint} - <strong>{props.prevAppointmentDr}</strong></span></p>
                                    </Col>
                                </Col>
                                {
                                    role ?
                                        <>
                                            <Col md={{ span: 4, offset: 1 }} onClick={props.func} className="button"><Primarybtn > Close</Primarybtn></Col>
                                            <Col md={{ span: 5, offset: 1 }} onClick={props.delete} className="button"><Primarybtn id={"delete"} > Delete Patients</Primarybtn></Col>
                                        </>
                                        :
                                        <Col md={{ span: 4, offset: 4 }} onClick={props.func} className="button"><Primarybtn > Close</Primarybtn></Col>
                                }
                            </Col>
                        </Col>

                        {
                            errorMod && <ErrorModal/>
                        }

                    </>}
            </>
            , document.getElementById("root"))
    );
};

export default ViewModal;