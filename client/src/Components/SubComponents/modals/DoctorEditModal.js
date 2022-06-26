import * as React from "react";
import { useEffect, useState, useRef } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { ConfirmationModal } from "./ConfirmationModal";

export const DoctorEditModal = (props) => {

    const firstName = props.name.split(" ").splice(0, 1);
    const lastName = props.name.split(" ").splice(1).join(" ");
    let consultFee = props.unique.split(": ").splice(1).join(" ").split("R").splice("").join("");
    const newVal = parseInt(consultFee);
    //Refs
    const name = useRef();
    const [nameErr, setNameErr] = useState(false);
    const surname = useRef();
    const [surnameError, setSurnameError] = useState(false);
    const Room = useRef();
    const [roomErr, setRoomErr] = useState(false);
    const consult = useRef();
    const [consultErr, setConsultErr] = useState(false);
    const email = useRef();
    const [emailErr, setEmailErr] = useState(false);
    const role = useRef();
    const [roleErr, setRoleErr] = useState(false);
    const number = useRef();
    const [numberErr, setNumberErr] = useState(false);
    const [updatedInformation, setUpdatedInformation] = useState();
    const mailcodex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    console.log(newVal)

    const editDoctor = () => {
        const tempArr = {
            docName: name.current.value,
            docSurn: surname.current.value,
            docRoom: Room.current.value,
            fee: consult.current.value,
            mail: email.current.value,
            special: role.current.value,
            num: number.current.value
        }

        if (tempArr.docName === "") {
            setNameErr(true);
        } else {
            setNameErr(false);
        }

        if (tempArr.docSurn === "") {
            setSurnameError(true);
        } else {
            setSurnameError(false);
        }

        if (tempArr.docRoom === "") {
            setRoomErr(true);
        } else {
            setRoomErr(false);
        }

        if (tempArr.fee === "") {
            setConsultErr(true);
        } else {
            setConsultErr(false);
        }

        if (tempArr.mail === "" && !tempArr.mail.match(mailcodex)) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
        }

        if (tempArr.special === "") {
            setRoleErr(true);
        } else {
            setRoleErr(false);
        }

        if (tempArr.num === "") {
            setNumberErr(true);
        } else {
            setNumberErr(false);
        }

    if(nameErr === false || surnameError === false || roomErr === false || consultErr === false || emailErr === false || consultErr === false|| roleErr === false|| numberErr === false){
        setUpdatedInformation(tempArr);
    }

    }

 const updateInfo = () =>{
    axios.post("http://localhost:8888/MedAPI/editDoctors.php", updatedInformation)
    .then(res =>{
        let data = res.data;
        console.log(data);
    })
    .catch(err =>{
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
                        <h2>Edit Doctor</h2>
                        <hr></hr>
                        <Col md={{ span: 4, offset: 4 }} className="patPhoto">
                            <img src={props.img} alt={props.name}/>
                        </Col>
                        {
                            !nameErr ?
                                <>
                                    <label for="name">First Name</label>
                                    <input ref={name} type={"text"} name="Name" defaultValue={firstName} className="Dname"></input>
                                </>
                                :
                                <>
                                    <label for="name" className="Err">*FIRST NAME</label>
                                    <input ref={name} type={"text"} onChange={editDoctor} name="Name" defaultValue={firstName} className="Dname inErr"></input>
                                </>
                        }

                        {
                            !surnameError ?
                                <>
                                    <label for="last" >Last name</label>
                                    <input ref={surname} type={"text"} name="last" defaultValue={lastName} className="Dname "></input>
                                </>
                                :
                                <>
                                    <label for="last" className="Err" >*LAST NAME</label>
                                    <input ref={surname} type={"text"} onChange={editDoctor} name="last" defaultValue={lastName} className="Dname inErr"></input>
                                </>
                        }
                        {
                            !roomErr ?
                                <>
                                    <label for="room">Room</label>
                                    <input ref={Room} type={"text"} name="last" defaultValue={props.room} className="Dname"></input>
                                </>
                                :
                                <>
                                    <label for="room " className="Err">*ROOM</label>
                                    <input ref={Room} type={"text"} onChange={editDoctor} name="last" defaultValue={props.room} className="Dname inErr"></input>
                                </>
                        }
                        {
                            !consultErr ?
                                <>

                                    <label for="fee">Consult Fee</label>
                                    <input ref={consult} type={"text"} name="fee" defaultValue={newVal} className="Dname"></input>
                                    <br />
                                </>
                                :
                                <>

                                    <label for="fee" className="Err">*CONSULT FEE</label>
                                    <input ref={consult} type={"text"} onChange={editDoctor} name="fee" defaultValue={newVal} className="Dname inErr"></input>
                                    <br />
                                </>
                        }

                        {
                            !emailErr
                                ?
                                <>
                                    <label for="mail">Email</label>
                                    <input ref={email} type={"text"} name="mail" defaultValue={props.mail} className="Dmail"></input>
                                    <br />
                                </>
                                :
                                <>
                                    <label for="mai " className="Err">*EMAIL</label>
                                    <input ref={email} type={"text"} onChange={editDoctor} name="mail" defaultValue={props.mail} className="Dmail inErr"></input>
                                    <br />
                                </>
                        }
                        {
                            !roleErr ?
                                <>

                                    <label for="speciality">Speciality</label>
                                    <input ref={role} type={"text"} name="speciality" defaultValue={props.role} className="special"></input>
                                </>
                                :
                                <>

                                    <label for="speciality" className="Err">*SPECIALITY</label>
                                    <input ref={role} type={"text"} onChange={editDoctor} name="speciality" defaultValue={props.role} className="special inErr"></input>
                                </>
                        }

                        {
                            !numberErr
                                ?
                                <>

                                    <label for="mail">Contact</label>
                                    <input ref={number} type={"text"} name="mail" defaultValue={props.number} className="special"></input>
                                </>
                                :
                                <>
                                    <label for="mail" className="Err">*CONTACT</label>
                                    <input ref={number} type={"text"} onChange={editDoctor} name="mail" defaultValue={props.number} className="special inErr"></input>
                                </>
                        }

                        <Col md={{ span: 4, offset: 1 }} id={props.id} onClick={props.closeButt} className="button mt-4"><Primarybtn > Cancel</Primarybtn></Col>
                        <Col md={{ span: 5, offset: 1 }} id={props.id} onClick={() => {editDoctor(); updateInfo()}} className="button mt-4"><Primarybtn id={"delete"} > Edit Doctor</Primarybtn></Col>


                    </Col>

                </Col>

            </>
            , document.getElementById("root"))

    );
};