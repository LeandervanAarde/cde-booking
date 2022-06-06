
import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaRegCalendarCheck } from "react-icons/fa";
import axios from 'axios';
import moment from 'moment';
import AvailableAppointItems from './AvailableAppointItems';



const Availablebook = (props, { setModalOpen }) => {
  

    return (
        <Col md={12} className='Bookings' >
            <Col md={12} className="banner">
                <h4 className='text-center'>Available Appointments for</h4>
                <p className='text-center'>{props.valueRead}</p>
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
                       {props.Children}
                    </tbody>
                </table>
            </Col>
        </Col>
    );
};

export default Availablebook;



// {availableAppointments.map((e) => (<AvailableAppointItems time={e.TimeStart + " - " + e.TimeEnd} Dr={e.DoctorName} special={e.Speciality} onClick={props.function} />))}