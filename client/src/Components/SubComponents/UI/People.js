import React, { useState, ReactDOM, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaEye } from "react-icons/fa";
import ViewModal from "../modals/ViewModal";
import moment from 'moment';
import axios from 'axios';


const People = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  // const date = moment().clone().format("YYYY");
  const date = moment().clone().format("YYYY");
  let age = (+date - props.dateOfBirth.split(" ").splice(2));
  const [click, setClick] = useState({ counter: 1 });
  const [individual, setIndividual] = useState({
    name: "",
    surname: ""
  });

  const confirm = (e) => {
 
    setClick((prev) => ({ ...prev, counter: prev.counter + 1 }));
    if (click.counter == 1) {
      const confirm = e.target;
      confirm.innerHTML = "<strong>Confirm patient Delete</strong>";
      setIndividual({
        name: props.name,
        surname: props.surname
      });
    }
    else if (click.counter == 2) {
      // setIndividual(props.name + " " + props.surname);
      const persona = individual;
      axios.post('http://localhost:8888//MedApi/deletePatient.php',persona)
        .then((res) => {
          let data = res.data;
          setClick((prev) => ({ ...prev, counter: prev.counter -1 }));
          setModalOpen(false)
        })
        .catch((err) => {

        })
    }
  }

  return (
    <>
      {props.key}
      {/* {props.} */}
      <Col md={12} className='infoCon'>
        <Col md={1} className="text-center picture">
          <img src={props.image} alt='Patient' className='picture' />
        </Col>
        <Col md={2} className='text-center id'><p>{props.id}</p></Col>
        <Col md={2} className='text-center name'><p>{props.name} {props.surname}</p></Col>
        <Col md={2} className='text-center title'><p>{props.medCondition}</p></Col>
        <Col md={1} className='text-center age'><p>{props.age}</p></Col>
        <Col md={2} className='text-center gender'><p>{props.gender}</p></Col>
        {/* GrandChild component that needs to take in an ID of a patient from phpMyAdmin */}
        <Col md={2} className='viewBtn' id={props.val}  ><Primarybtn function={() => setModalOpen(true)} id={props.val}   ><FaEye /> View profile </Primarybtn></Col>
      </Col>

      {modalOpen && <ViewModal
        {...props}
        func={() => { return setModalOpen(false)}}
        delete={confirm}
        setModalOpen={setModalOpen}
        id={props.id}
      />}
    </>
  );
};

export default People;