
import React from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaRegCalendarCheck } from "react-icons/fa";



const Availablebook = (props) => {
  

    return (
    <Col md={12} className='Bookings' >
       <Col md={12} className="banner">
               <h4 className='text-center'>Available Appointments for</h4>
               <p className='text-center'>{props.value.clone().format("DD MMMM YYYY")}</p>
        </Col>
        <Col md={12} className="body">
        <table id='upComingAppointments'>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Doctor</th>
                            <th >Speciality</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. E Makan</td>
                            <td>Endocronology</td>
                            <td className="remove" onClick = { props.function}><Primarybtn > <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn> </td>
                        </tr> 
                    </tbody>
                </table>
        </Col>
    </Col>
    );
};

export default Availablebook;