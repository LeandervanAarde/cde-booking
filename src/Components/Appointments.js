import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Placeholder } from 'react-bootstrap';
import "../index.scss";
import SearchInput from './SubComponents/SearchInput';
import Appointmentcard from './SubComponents/Appointmentcard';
const Appointments = () => {
    let today = new Date;
    let stringDate = today.toString().split(" ").splice(1, 3);
    // If year is not wanted please use stringDateTwo.
    let stringDateTwo = today.toString().split(" ").splice(1, 2);
    // Display date refers to the date that will be displayed on the frontend.
    const displayDate = stringDate.join(' ');

    return (
        <Col md={11} className="Wrap">
            <Col md={8} className="workingCon">
                <SearchInput>
                    Search Patient...
                </SearchInput>
                <Col md={12}>
                    <h2 className='headingTwo'> {displayDate} Appointments</h2>
                </Col>
                <Col md={12} className="cardCon">
                    <Appointmentcard />
                    <p className='smallText text-center'> Scroll horizontal to see all appointments</p>
                </Col>

            </Col>
            <Col md={4} className="work">
       
       </Col>
        </Col>
    );
};

export default Appointments;