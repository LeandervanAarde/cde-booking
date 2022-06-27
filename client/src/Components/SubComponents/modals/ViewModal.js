import * as React from "react";
import { useEffect, useState, useRef } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaEdit } from "react-icons/fa";
import ErrorModal from "./ErrorModal";
import { invalid } from "moment";
import axios from "axios";
import { FaUserCheck } from "react-icons/fa";



const ViewModal = (props) => {
    const [role, setRole] = useState();
    const [clicked, setClicked] = useState(false);
    const personName = useRef();
    const personSurname = useRef();
    const genD = useRef();
    const cellP = useRef();
    const mailAd = useRef();
    const medicalAidNumber = useRef();
    const [errorMod, setErrorMod] = useState(false);
    const [surnameErr, setSurnameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [genderErr, setGenderErr] = useState(false);
    const [numberErr, setNumberErr] = useState(false);
    const [medicalErr, setMedicalErr] = useState(false);
    const [succ, setSucc] = useState(false);


    useEffect(() => {
        if (sessionStorage.getItem("UserRank") === "Head Receptionist") {
            setRole(true)
        } else {
            setRole(false)
        }
    }, []);

    const editPatient = () => {
        setClicked(true)
    }

    const cancelEdit = () => {
        setClicked(false)
    }

    const updatePatient = () => {
        let name = personName.current.value.trim();
        let surname = personSurname.current.value.trim();
        let gender = genD.current.value.trim();
        let number = cellP.current.value.trim();
        let email = mailAd.current.value.trim();
        let medicalAid = medicalAidNumber.current.value.trim();
        let newValues = {
            id: props.id,
            nm: personName.current.value.trim(),
            surn: personSurname.current.value.trim(),
            gen: genD.current.value.trim(),
            nr: cellP.current.value.trim(),
            mail: mailAd.current.value.trim(),
            medicaNr: medicalAidNumber.current.value.trim()
        }

        const mailcodex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (name == "") {
            setErrorMod(true)
        } else {
            setErrorMod(false)
        }

        if (surname == "") {
            setSurnameErr(true)
        } else {
            setSurnameErr(false)
        }

        if (gender == "" || gender.length <= 2) {
            setGenderErr(true)
        } else {
            setGenderErr(false)
        }

        if (number == false || number.length <= 9) {
            setNumberErr(true)
        } else {
            setNumberErr(false)
        }

        if (email !== "") {
            setEmailErr(false);
        } else {
            setEmailErr(true)
            console.log("false")
        }

        if (email !== mailcodex) {
            setEmailErr(false)
        } else {
            setEmailErr(false)
        }


        if (medicalAid == "" || medicalAid.length < 6) {
            setMedicalErr(true);
        } else {
            setMedicalErr(false)
        }


    }

    const updatedInformation = () => {
        if (errorMod === false && surnameErr === false && genderErr === false && numberErr === false && emailErr === false && medicalErr === false) {
            console.log("all good to be pushed");
            let newValues = {
                id: props.id,
                image: props.image,
                nm: personName.current.value.trim(),
                surn: personSurname.current.value.trim(),
                gen: genD.current.value.trim(),
                nr: cellP.current.value.trim(),
                mail: mailAd.current.value.trim(),
                medicaNr: medicalAidNumber.current.value.trim()
            }


            //Do axios call here
            axios.post("http://localhost:8888/MedAPI/editPatient.php", newValues)
                .then(res => {
                    let data = res.data;
                    setSucc(true);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return (
        ReactDOM.createPortal(
            <>
                {clicked
                    ?
                    <>
                        <Col md={12} id={props.id} className='backdrop' onClick={props.func}> </Col>
                        <Col md={{ span: 5 }} className="Modal ">
                            {/* Fix eventually, this modal is included as modal within another modal. */}
                            {
                                succ ?
                                    <Col md={{ span: 8, offset: 1 }} className="succ">
                                        <FaUserCheck className="edited" size={70} />
                                        <h3 className="successinfo">Patient information updated!</h3>
                                        <Col md={{ span: 4, offset: 4 }} id="close"><Primarybtn function={() => { return setSucc(false); }} >Close</Primarybtn></Col>
                                    </Col>
                                    :
                                    <></>
                            }

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
                                        {!errorMod ?
                                            <>
                                                <label for="name" className="nameL" >Name</label>
                                                <input ref={personName} personName="name" className="name" id="first" defaultValue={props.name}></input>
                                            </>

                                            :
                                            <>
                                                <label for="name" className="nameL error1" ><strong>*NAME</strong></label>
                                                <input onChange={updatePatient} ref={personName} personName="name" className="name inErr" id="first" defaultValue={props.name}></input>
                                            </>
                                        }

                                        {!surnameErr ?
                                            <>
                                                <label for="surname" >Last name</label>
                                                <input ref={personSurname} name="surname" className="name" defaultValue={props.surname}></input>
                                            </>

                                            :
                                            <>
                                                <label for="surname" className="error2" >*LAST NAME</label>
                                                <input onChange={updatePatient} ref={personSurname} name="surname" className="name inErr" defaultValue={props.surname}></input>
                                            </>
                                        }
                                        <br />

                                        {!genderErr ?
                                            <>
                                                <label for="gender" className="nameL" >Gender</label>
                                                <input ref={genD} name="gender" className="gen" defaultValue={props.gender}></input>
                                            </>

                                            :
                                            <>
                                                <label for="gender" className="name error" >*GENDER</label>
                                                <input onChange={updatePatient} ref={genD} name="gender inErr" className="gen inErr" defaultValue={props.gender}></input>
                                            </>
                                        }

                                        {!numberErr ?


                                            <>
                                                <label for="cell">Cell number</label>
                                                <input ref={cellP} name="cell" id="cell" defaultValue={props.cellphone}></input>
                                            </>

                                            :
                                            <>
                                                <label for="cell" className="error2">*CELLPHONE</label>
                                                <input onChange={updatePatient} ref={cellP} name="cell" className="inErr" id="cell" defaultValue={props.cellphone}></input>
                                            </>
                                        }
                                        <br />

                                        {!emailErr ?
                                            <>
                                                <label for="email" className="nameL">Email</label>
                                                <input onChange={updatePatient} ref={mailAd} name="email" id="email" defaultValue={props.email}></input>
                                            </>

                                            :
                                            <>
                                                <label for="email" className="name error">*EMAIL</label>
                                                <input onChange={updatePatient} ref={mailAd} name="email" id="email" className="inErr" defaultValue={props.email}></input>
                                            </>
                                        }

                                        <br />

                                        {!medicalErr ?
                                            <>
                                                <label for="medA" className="nameL">Medical Aid</label>
                                                <input ref={medicalAidNumber} name="medA" id="medA" defaultValue={props.medicalAid}></input>
                                            </>

                                            :
                                            <>
                                                <label for="medA" className="nameL error1">*MEICAL AID</label>
                                                <input ref={medicalAidNumber} className="inErr" name="medA" id="medA" defaultValue={props.medicalAid}></input>
                                            </>
                                        }


                                    </Col>
                                </Col>
                                <Col md={{ span: 4, offset: 1 }} onClick={props.func} className="button"><Primarybtn > Close</Primarybtn></Col>
                                <Col md={{ span: 5, offset: 1 }} onClick={() => { updatePatient(); updatedInformation() }} className="button"><Primarybtn id={"delete"} >Update information</Primarybtn></Col>
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
                    </>}
            </>
            , document.getElementById("root"))
    );
};

export default ViewModal;