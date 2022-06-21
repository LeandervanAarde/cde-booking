import * as React from "react";
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaUserPlus } from "react-icons/fa";

const AddModal = (props) => {
  const theMonths = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];

    return (
      ReactDOM.createPortal(
    <>
    <Col md={12} className='backdrop' onClick={props.function}> </Col>
   <Col md={{span:8}} className="Modal" id={"add"}>
       <Col md={12}>

        <Col md={2} className="logo" onClick={props.function}> </Col>
      <h2> Add Patient</h2>
       <hr></hr>
       <h6>{props.nm}</h6>
            <br></br>
            <h6>First Name</h6>
            <input type={'text'} className={"name"}></input>
            <h6 id="last">Last Name</h6>
            <input type={'text'} className={"name"}></input>
            <br/>
            <h4>Date of birth</h4>
        
            <h6 id="day">Day</h6>
            <input type={'number'} id="day" placeholder="eg. 26"></input>
            <h6 id="monH">Month</h6>
            <input type={'text'} id="month" placeholder="eg June"></input>
            <h6 id="last">Year</h6>
            <input type={'number'} id="year" placeholder="eg. 2001"></input>
            <select id="gender">
              <option disabled={true} selected={true}>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Rather not say</option>
            </select>
            <br/>
            <h6 id="phone">Number</h6>
            <input type={'number'} id="number" ></input>
            <h6 id="mail">Email</h6>
            <input type={'email'} id="email" ></input>
            <h6 id="medN">Medical Aid Number</h6>
            <input type={'tel'} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="medicalAidnr" ></input>
            <h6 id="Condition">Medical Condition</h6>
            <input type={'text'}></input>
            <Col md={{span:4, offset:4}} className="mt-5" onClick={props.function}><Primarybtn ><FaUserPlus size ={25} className="me-3 text-center" /> Add Patient </Primarybtn></Col>
       </Col>
   </Col>
   </>
    , document.getElementById("root"))
    );
};

export default AddModal;