import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from '../../Buttons/PrimaryBtn';
import { FaUserPlus, FaTrashAlt } from "react-icons/fa";

const AddPerson = (props) => {
    return (
        <Col md={12} className="addPerson">
            <form>
                <h2> {props.head}</h2>
                <hr></hr>
                <label for="firstName">first Name</label>
                <input type={'text'} name="firstName" className={"name last"}></input>
                <label for="lastName">Last name</label>
                <input type={'text'} name="lastName" className={"name"}></input>
                <br />
                <h4>Date of Birth</h4>
                <label for="day">Day</label>
                <input type={'number'} name="day" id="day" placeholder="eg. 26"></input>
                <label for="month">Month</label>
                <input type={'text'} id="month" placeholder="eg June"></input>
                <label for="year">year</label>
                <input type={'number'} id="year" placeholder="eg. 2001"></input>
                <select id="gender">
                    <option disabled={true} selected={true}>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Rather not say</option>
                </select>
                <label for="number">Cellphone number</label>
                <input type={'number'} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="number" ></input>
                <label for = "email">Email</label>
                <input type={'email'} id="email" ></input>
                <label for="medicalAid">{props.ex}</label>
                <input type={'medicalAid'} name="medicalAid" id="medicalAidnr" minLength={6}></input>
                <label for="condition">{props.ex2}</label>
                <input type={'text'} name="condition" id="condition"></input>
                {props.extra}
            </form>
            <Col md={{ span: 4, offset: 2 }} className="mt-5 button" onClick={props.function}><Primarybtn ><FaUserPlus size={25} className="me-3 text-center" /> Add Patient </Primarybtn></Col>
            <Col md={{ span: 4, offset: 1 }} className="mt-5 button" onClick={props.cancel}><Primarybtn id={"cancel"} ><FaTrashAlt size={25} className="me-3 text-center" /> Cancel </Primarybtn></Col>

        </Col>
    );
};

export default AddPerson;
