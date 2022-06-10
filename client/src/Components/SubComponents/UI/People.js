import React, { useState, ReactDOM } from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaEye } from "react-icons/fa";
import ViewModal from "../modals/ViewModal";
import moment from 'moment';


const People = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  // const date = moment().clone().format("YYYY");
  const date = moment().clone().format("YYYY");
  console.log(props);
  
  let age = (+date - props.dateOfBirth.split(" ").splice(2))

  return (
    // <h1>{props.name}</h1>

    <>
      {props.key}
      {/* {props.} */}
      <Col md={12} className='infoCon' >
        <Col md={1} className="text-center picture">
          <img src={props.image} alt='Patient' className='picture' />
        </Col>
        <Col md={2} className='text-center id'><p>{props.id}</p></Col>
        <Col md={2} className='text-center name'><p>{props.name} {props.surname}</p></Col>
        <Col md={2} className='text-center title'><p>{props.medCondition}</p></Col>
        <Col md={1} className='text-center age'><p>{props.age}</p></Col>
        <Col md={2} className='text-center gender'><p>{ props.gender}</p></Col>
        {/* GrandChild component that needs to take in an ID of a patient from phpMyAdmin */}
        <Col md={2} className='viewBtn' id={props.val}  ><Primarybtn function={() => setModalOpen(true)} id={props.val}   ><FaEye /> View profile </Primarybtn></Col>
      </Col>

      {modalOpen &&<ViewModal 
        {...props}
        func={() => { return setModalOpen(false); }}
        setModalOpen={setModalOpen}
        
      />}
    </>
  );
};

export default People;