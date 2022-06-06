import React from 'react';
import { Col } from 'react-bootstrap';
import doctor from "../../Assets/Doctor.svg"
const NoAppointments = (props) => {
    return (
    <div  className="container"> 
            <h2>{props.mess}</h2>
            <img src={doctor}/>
    </div>  
    );
};

export default NoAppointments;