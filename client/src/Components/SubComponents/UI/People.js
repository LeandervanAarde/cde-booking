import React from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaEye } from "react-icons/fa";


const People = (props) => {
  return (
    <>
    {props.key}
      <Col md={12} className='infoCon' >
        <Col md={1} className="text-center picture">
          <img src={props.image} alt='Patient' className='picture'/>
        </Col>
        <Col md={2} className='text-center id'><p>{props.id}</p></Col>
        <Col md={2} className='text-center name'><p>{props.name}</p></Col>
        <Col md={2} className='text-center title'><p>{props.children}</p></Col>
        <Col md={1} className='text-center age'><p>{props.age}</p></Col>
        <Col md={2} className='text-center gender'><p>{props.gender}</p></Col>
        {/* GrandChild component that needs to take in an ID of a patient from phpMyAdmin */}
        <Col md={2} className='viewBtn' onClick={props.function && props.function2} id={props.val}  ><Primarybtn id={props.val}   ><FaEye /> View profile </Primarybtn></Col>
      </Col>
    </>
  );
};

export default People;