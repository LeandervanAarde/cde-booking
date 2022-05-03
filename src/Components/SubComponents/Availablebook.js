
import React from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from './PrimaryBtn';
import { FaRegCalendarCheck } from "react-icons/fa";

const Availablebook = () => {
    return (
    <Col md={12} className='Bookings' >
       <Col md={12} className="banner">
               <h4 className='text-center'>Available Appointments for</h4>
               <p className='text-center'>26 April 2021</p>
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
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"><Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn> </td>
                        </tr>
                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>
                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>

                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>

                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>

                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>

                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>

                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>

                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>

                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>

                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>

                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>

                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>

                        <tr>
                            <td>09:00 - 10:00</td>
                            <td>Dr. G Makan</td>
                            <td>Endocronology</td>
                            <td className="remove"> <Primarybtn> <FaRegCalendarCheck size={20}/> Book appointment</Primarybtn></td>
                        </tr>
                        
                    </tbody>
                </table>
        </Col>
    </Col>
    );
};

export default Availablebook;