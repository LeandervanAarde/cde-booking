import React, { useEffect, useState, useRef } from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from '../../Buttons/PrimaryBtn';
import { FaUserPlus, FaTrashAlt } from "react-icons/fa";
import axios from 'axios';
import ErrorModal from '../../modals/ErrorModal';

const AddPerson = (props) => {
    const [errorModal, setErrorModal] = useState(false);
    //months
    const yearMonth= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const name = useRef();
    const surname = useRef();
    //Birthday
    const day = useRef();
    const month = useRef();
    const year = useRef();
    //other
    const gender = useRef();
    const cellphone = useRef();
    const email = useRef();
    const medANr = useRef();
    const medCon = useRef();

    const addPatient = () =>{
        let patientInformation = {
            userName: name.current.value.trim(),
            surn: surname.current.value.trim(), 
            birthday: day.current.value.trim() +" "+ month.current.value.trim() +" "+ year.current.value.trim(),
            gen: gender.current.value.trim(),
            cell: cellphone.current.value.trim(),
            mail: email.current.value.trim(),
            medicalAid: medANr.current.value.trim(),
            condition: medCon.current.value.trim()
        }
        axios.post("http://localhost:8888/MedAPI/addNewPatient.php", patientInformation)
        .then(res =>{
            let data = res.data;
            console.log(data);
            if(data === false){
                setErrorModal(true);
            }
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return (
        <>
        <Col md={12} className="addPerson">
            <form>
                <h2> {props.head}</h2>
                <hr></hr>
                <label for="firstName">first Name</label>
                <input type={'text'} ref={name} name="firstName" className={"name last"}></input>
                <label for="lastName">Last name</label>
                <input ref={surname} type={'text'} name="lastName" className={"name"}></input>
                <br />
                <h4>Date of Birth</h4>
                <label for="day">Day</label>
                <input ref={day} type={'number'} name="day" id="day" placeholder="eg. 26"></input>
                <label for="month">Month</label>
                <select ref={month} id="month" name="month">
                    {yearMonth.map((e) => <option>{e}</option>)}
                </select>
                <label for="year">year</label>
                <input ref={year} type={'number'} id="year" placeholder="eg. 2001"></input>
                <select ref={gender} id="gender">
                    <option disabled={true} defaultValue={true}>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Rather not say</option>
                </select>
                <label for="number">Cellphone number</label>
                <input ref={cellphone} type={'number'} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="number" ></input>
                <label for = "email">Email</label>
                <input ref={email} type={'email'} id="email" ></input>
                <label for="medicalAid">{props.ex}</label>
                <input ref={medANr} type={'medicalAid'} name="medicalAid" id="medicalAidnr" minLength={6}></input>
                <label for="condition">{props.ex2}</label>
                <input ref={medCon} type={'text'} name="condition" id="condition"></input>
                {props.extra}
                <Col md={{ span: 4, offset: 2 }} className="mt-5 button" onClick={addPatient}><Primarybtn ><FaUserPlus size={25} className="me-3 text-center" /> Add Patient </Primarybtn></Col>
            
            <Col md={{ span: 4, offset: 1 }} className="mt-5 button" onClick={props.cancel}><Primarybtn id={"cancel"} ><FaTrashAlt size={25} className="me-3 text-center" /> Cancel </Primarybtn></Col>
            </form>
  

        </Col>

        {errorModal && <ErrorModal
            content={"Patient Already exists"}
            button={<Primarybtn id={"Close"} function={() => setErrorModal(false)} ><FaTrashAlt size={25} className="me-3 text-center" /> Close </Primarybtn>}
        />}
        </>
    );
};

export default AddPerson;
