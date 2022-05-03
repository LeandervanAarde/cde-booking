import React from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import moment from 'moment';
import "../index.scss";
import SearchInput from './SubComponents/SearchInput';
import Appointmentcard from './SubComponents/Appointmentcard';
import Profile from './SubComponents/Profile';
import Calendar from './SubComponents/Calendar/Calendar';
import Weekappointments from './SubComponents/Weekappointments';
import Availablebook from './SubComponents/Availablebook';

const Appointments = () => {

    const endWeek = moment().clone().endOf('week').format("DD MMMM");
    const current = moment().clone().format("DD MMMM ");
    const Year = moment().clone().format("DD MMMM YYYY");
    const week = current + " - " + endWeek;
    console.log(week);

    const [value, setValue] = useState(moment());
    return (
        <>
            <Col md={{ span: 8, offset: 1 }} className="workingCon">
                <SearchInput>
                    Search Patient...
                </SearchInput>
                <Col md={12}>
                    <h2 className='headingTwo'> {Year} Appointments</h2>
                </Col>
                <Col md={12} className="cardCon">
                    <Appointmentcard />
                    <Appointmentcard />
                    <Appointmentcard />
                    <Appointmentcard />
                    <Appointmentcard />
                </Col>
                <Col md={12} className="calendarCon">
                    <Calendar value={value} onChange={setValue} />
                </Col>

                <Col md={12} className="BookingCon">
                   <Availablebook/>
                </Col>
            </Col>

            <Col md={3} className="work">
                <Profile />
                <Weekappointments>
                    {week} Appointments
                </Weekappointments>
            </Col>
        </>

    );
};

export default Appointments;