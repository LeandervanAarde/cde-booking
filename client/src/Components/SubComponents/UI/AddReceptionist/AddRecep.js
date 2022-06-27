import React, { useEffect, useState, useRef } from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from '../../Buttons/PrimaryBtn';
import { FaUserPlus, FaTrashAlt } from "react-icons/fa";
import axios from 'axios';
import ErrorModal from '../../modals/ErrorModal';
import TooltipModal from '../../modals/TooltipModal';
import Success from '../../modals/Success';
import { FaBookMedical } from "react-icons/fa";

const AddRecep = (props) => {
    const [errorModal, setErrorModal] = useState(false);
    const [toolTip, setToolTip] = useState(false);
    const [passConfirmed, setPassConfirmed] = useState(false);
    const [confirm, setConfirm] = useState(false);
    //months
    const yearMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const name = useRef();
    const surname = useRef();
    //Birthday
    const day = useRef();
    const month = useRef();
    const year = useRef();
    const [succ, setSucc] = useState(false)
    //other
    const gender = useRef();
    const cellphone = useRef();
    const email = useRef();
    const password = useRef();
    const passwordCon = useRef();
    const rank = useRef();
    const status = useRef();
    const fees = useRef();


    const addRecep = () => {

        if (password.current.value.trim() === passwordCon.current.value.trim()) {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;
            if (password.current.value.trim().match(passwordRegex)) {
                setPassConfirmed(true);
            }
        } else {
            alert("Passwords do not match")
        }

        if (name.current.value === "") {
            setConfirm(true)
        } else {
            setConfirm(false)
        }
        if (surname.current.value === "") {
            setConfirm(true)
        } else {
            setConfirm(false);
        }
        if (gender.current.value === "") {

            setConfirm(true)
        } else {
            setConfirm(false)
        }

        if (email.current.value === "") {
            setConfirm(true);
        } else {
            setConfirm(false);
        }
        if (cellphone.current.value.length < 6) {
            setConfirm(true);
        } else {
            setConfirm(false);
        }
        if (fees.current.value.length === 0) {
            setConfirm(true);
        } else {
            setConfirm(false);
        }

        if (status.current.value === "") {
            setConfirm(true);
        } else {
            setConfirm(false);
        }

    }

    const pushRecep = () => {


        if (confirm === false && passConfirmed === true) {
            alert("Receptionist will be added");
            let RecepInformation = {
                userName: name.current.value.trim(),
                surn: surname.current.value.trim(),
                birthday: day.current.value.trim() + " " + month.current.value.trim() + " " + year.current.value.trim(),
                gen: gender.current.value.trim(),
                cell: cellphone.current.value.trim(),
                mail: email.current.value.trim(),
                password: password.current.value.trim(),
                passwordConfirm: passwordCon.current.value.trim(),
                rank: rank.current.value.trim(),
                status: status.current.value.trim(),
                income: fees.current.value.trim(),
            }

            console.log(RecepInformation)
            axios.post("http://localhost:8888/MedAPI/addNewReceptionist.php", RecepInformation)
                .then(res => {
                    let data = res.data;
                    if (data === false) {
                        setErrorModal(true);
                        // const reset = props.reset;
                    } else{
                        setSucc(true);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }

    return (
        <>

            {
                succ ?
                    <Success
                        success={<FaBookMedical color={"green"} size={150} className="faMedBook mb-4" />}
                        message={<strong className="mt-4">Receptionist has been added</strong>}
                        btn={<Col md={{ span: 4, offset: 4 }} id={props.id} onClick={props.cancel} className="button mt-4"><Primarybtn > Close</Primarybtn></Col>}
                    />
                    :
                    <></>
            }
            <Col md={12} className="addPerson">
                <form id={"addForm"}>
                    <h2> {props.head}</h2>
                    <hr></hr>
                    <label for="firstName">first Name</label>
                    <input required={true} type={'text'} ref={name} name="firstName" className={"name last"}></input>
                    <label for="lastName">Last name</label>
                    <input required={true} ref={surname} type={'text'} name="lastName" className={"name"}></input>
                    <br />
                    <h4>Date of Birth</h4>
                    <label for="day">Day</label>
                    <input required={true} ref={day} type={'number'} name="day" id="day" placeholder="eg. 26"></input>
                    <label for="month">Month</label>
                    <select ref={month} id="month" name="month">
                        {yearMonth.map((e) => <option>{e}</option>)}
                    </select>
                    <label for="year">year</label>
                    <input required={true} ref={year} type={'number'} id="year" placeholder="eg. 2001"></input>
                    <select ref={gender} id="gender">
                        <option disabled={true} selected={true} defaultValue={true}>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Rather not say</option>
                    </select>
                    <label for="number">Cellphone number</label>
                    <input ref={cellphone} type={"tel"} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="number" ></input>
                    <label for="email">Email</label>
                    <input ref={email} type={'email'} id="email" ></input>

                    <label for="password">password</label>
                    <input ref={password} name="password" type={'password'} id="password" onMouseEnter={() => { return setToolTip(true) }} onMouseLeave={() => { return setToolTip(false) }}  ></input>

                    <label for="pass">Confirm Password</label>
                    <input ref={passwordCon} name="pass" type={'password'} id="password"></input>
                    <br />
                    <label for="specialisation">Rank</label>
                    <input ref={rank} type={'text'} name="specialisation" id="password" ></input>

                    <label for="room">Status</label>
                    <input ref={status} type={'text'} name="room" id="room" ></input>

                    <label for="fee">Income</label>
                    <input ref={fees} type={'number'} name="fee" id="fee" ></input>

                    <Col md={{ span: 4, offset: 2 }} className="mt-5 button" onClick={() => { addRecep(); pushRecep() }}><Primarybtn ><FaUserPlus size={25} className="me-3 text-center" /> Add Doctor </Primarybtn></Col>

                    <Col md={{ span: 4, offset: 1 }} className="mt-5 button" onClick={props.cancel}><Primarybtn id={"cancel"} ><FaTrashAlt size={25} className="me-3 text-center" /> Cancel </Primarybtn></Col>
                </form>


            </Col>
            {errorModal && <ErrorModal
                content={"Receptionist Already exists"}
                button={<Primarybtn id={"Close"} function={() => setErrorModal(false)} ><FaTrashAlt size={25} className="me-3 text-center" /> Close </Primarybtn>}
            />}
            {
                toolTip && <TooltipModal
                    message={"Password requires atleast 5 characters, 1 special character (@!_.) and a number (0-9)"}
                />
            }

            {confirm && <ErrorModal
                content={"Please fill in all fields"}
                button={<Primarybtn id={"Close"} function={() => setConfirm(false)} ><FaTrashAlt size={25} className="me-3 text-center" /> Close </Primarybtn>}
            />}

        </>
    );
};

export default AddRecep;