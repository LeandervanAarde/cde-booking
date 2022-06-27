import * as React from "react";
import { useEffect, useState, useRef } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaCommentsDollar, FaEdit, FaBookMedical } from "react-icons/fa";
import axios from "axios";
import Success from "./Success";

const ReceptionistEdit = (props) => {
    const firstName = props.name.split(" ").splice(0, 1);
    const lastName = props.name.split(" ").splice(1).join(" ");
    //Refs
    const name = useRef();
    const [nameErr, setNameErr] = useState(false);
    const surname = useRef();
    const [surnameError, setSurnameError] = useState(false);
    const Status = useRef();
    const [statusErr, setStatusErr] = useState(false);
    const email = useRef();
    const [emailErr, setEmailErr] = useState(false);
    const role = useRef();
    const [roleErr, setRoleErr] = useState(false);
    const number = useRef();
    const [numberErr, setNumberErr] = useState(false);
    const [updatedInformation, setUpdatedInformation] = useState();
    const [succ, setSucc] = useState(false)
    const mailcodex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



    const editReceptionist = () => {
        const tempArr = {
            recepName: name.current.value,
            recepSurn: surname.current.value,
            recepStat: Status.current.value,
            special: role.current.value,
            mail: email.current.value,
            num: number.current.value
        }

        if (tempArr.recepName === "") {
            setNameErr(true);
        } else {
            setNameErr(false);
        }

        if (tempArr.recepSurn === "") {
            setSurnameError(true);
        } else {
            setSurnameError(false);
        }

        if (tempArr.recepStat === "") {
            setStatusErr(true);
        } else {
            setStatusErr(false);
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

        if (nameErr === false || surnameError === false || statusErr === false || emailErr === false || roleErr === false || numberErr === false) {
            axios.post("http://localhost:8888/MedAPI/editReceptionists.php", tempArr)
            .then(res =>{
                let data = res.data;
                setSucc(true)
            })
            .catch(err =>{
                console.log(err);
            })
        }

    }

    return (
        ReactDOM.createPortal(
            <>
                <Col md={12} className='backdrop' onClick={props.func}> </Col>
                <Col md={{ span: 5 }} className="Modal">
                    {
                        succ ?
                        <Success
                            success= {<FaBookMedical color={"green"} size={150} className="faMedBook mb-4"/>}
                            message={<strong className="mt-4">Receptionist has been updated</strong>}
                            btn={ <Col md={{ span: 4, offset: 4 }} id={props.id} onClick={props.closeButt} className="button mt-4"><Primarybtn > Close</Primarybtn></Col>}
                        />
                        :
                        <></>
                    }
                    <Col md={12}>
                        <Col md={2} className="logo" onClick={props.func}> </Col>
                        <h2>Edit Receptionist</h2>
                        <hr></hr>
                        <Col md={{ span: 4, offset: 4 }} className="patPhoto">
                            <img src={props.img} alt={props.name} />
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
                                    <input ref={name} type={"text"} onChange={editReceptionist} name="Name" defaultValue={firstName} className="Dname inErr"></input>
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
                                    <input ref={surname} type={"text"} onChange={editReceptionist} name="last" defaultValue={lastName} className="Dname inErr"></input>
                                </>
                        }

                        {
                            !statusErr ?
                                <>
                                    <label for="room">Status</label>
                                    <input ref={Status} type={"text"} name="last" defaultValue={props.room} className="Dname"></input>
                                </>
                                :
                                <>
                                    <label for="room " className="Err">*STATUS</label>
                                    <input ref={Status} type={"text"} onChange={editReceptionist} name="last" defaultValue={props.room} className="Dname inErr"></input>

                                </>
                        }

                        {
                            !roleErr ?
                                <>
                                    <label for="speciality">Role</label>
                                    <select ref={role} onSubmit={editReceptionist} className="special" name="Speciality">
                                        {/* <option defaultValue={true} selected={true} disabled={true}> Select Role</option> */}
                                        <option>Receptionist</option>
                                        <option>Head Receptionist</option>
                                    </select>
                                </>
                                :
                                <>

                                <label for="speciality">Role</label>
                                    <select ref={role} o className="special" name="Speciality">
                                        {/* <option defaultValue={true} selected={true} disabled={true}> Select Role</option> */}
                                        <option>Receptionist</option>
                                        <option>Head Receptionist</option>
                                    </select>
                                </>
                        }


                        {
                            !emailErr
                                ?
                                <>
                                    <br />
                                    <label for="mail">Email</label>
                                    <input ref={email} type={"text"} name="mail" defaultValue={props.mail} className="Dmail"></input>
                                    <br />
                                </>
                                :
                                <>
                                    <br />
                                    <label for="mail" className="Err">*EMAIL</label>
                                    <input ref={email} type={"text"} onChange={editReceptionist} name="mail" defaultValue={props.mail} className="Dmail inErr"></input>
                                    <br />
                                </>
                        }




                        {
                            !numberErr
                                ?
                                <>

                                    <label for="mail">Contact</label>
                                    <input ref={number} type={"text"} name="mail" defaultValue={props.number} className="special"></input>
                                    <br />
                                </>
                                :
                                <>
                                    <label for="mail" className="Err">*CONTACT</label>
                                    <input ref={number} type={"text"} onChange={editReceptionist} name="mail" defaultValue={props.number} className="special inErr"></input>
                                    <br />
                                </>
                        }

                        <Col md={{ span: 4, offset: 1 }} id={props.id} onClick={props.closeButt} className="button mt-4"><Primarybtn > Cancel</Primarybtn></Col>
                        <Col md={{ span: 5, offset: 1 }} id={props.id} onClick={() =>{ editReceptionist();}} className="button mt-4"><Primarybtn id={"delete"} function={""} > Edit Receptionists</Primarybtn></Col>


                    </Col>

                </Col>

            </>
            , document.getElementById("root"))

    );
};

export default ReceptionistEdit;