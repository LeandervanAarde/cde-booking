import React from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import moment from 'moment';
import "../index.scss";
import SearchInput from './SubComponents/Inputs/SearchInput';
import Appointmentcard from './SubComponents/Appointments/Appointmentcard';
import Profile from './SubComponents/UI/Profile';
import Calendar  from './SubComponents/Calendar/Calendar';
import TableInformation from './SubComponents/UI/TableInformation';
import Availablebook from './SubComponents/Appointments/Availablebook';
import Modal from './SubComponents/modals/Modal';
import Navigation from './SubComponents/UI/Navigation';

const Appointments = () => {

    const endWeek = moment().clone().endOf('week').format("DD MMMM");
    const current = moment().clone().format("DD MMMM ");
    const Year = moment().clone().format("DD MMMM YYYY");
    const week = current + " - " + endWeek;
    const [value, setValue] = useState(moment());
    const [modalOpen, setModalOpen] = useState(false);
   
    return (
        <>
        <Navigation/>
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
                    <Calendar value={value} onChange={setValue} 

                    />
                </Col>

                <Col md={12} className="BookingCon">
                   <Availablebook
                    value = {value}
                    function ={() => {
                        return setModalOpen(true);
                    }}
                   />
                
                </Col>
            </Col>

            <Col md={3} className="work">
                <Profile 
                Auth={"Cindy Stacy"}
                />
                <TableInformation
                    headerOne = "Time"
                    headerTwo = "Patient"
                    headerThree = "Doctor"
                    headerFour= " "
                    Information1 = "09:00 - 10:00"
                    Information2 = "Leander van Aarde"
                    Information3 = "Dr Makan"
                    btnTxt = "-REMOVE"
                >
                  <h5>{week} Appointments </h5>  
                </TableInformation>
            </Col>
           {modalOpen && <Modal setModalOpen={setModalOpen}/>}
           
        </>

    );
};

export default Appointments;