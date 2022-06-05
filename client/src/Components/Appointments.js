import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import moment from 'moment';
import "../index.scss";
import SearchInput from './SubComponents/Inputs/SearchInput';
import Appointmentcard from './SubComponents/Appointments/Appointmentcard';
import Profile from './SubComponents/UI/Profile';
import Calendar from './SubComponents/Calendar/Calendar';
import TableInformation from './SubComponents/UI/TableInformation';
import Availablebook from './SubComponents/Appointments/Availablebook';
import Modal from './SubComponents/modals/Modal';
import Navigation from './SubComponents/UI/Navigation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Appointments = () => {

    const endWeek = moment().clone().endOf('week').format("DD MMMM");
    const current = moment().clone().format("DD MMMM ");
    const Year = moment().clone().format("DD MMMM YYYY");
    const week = current + " - " + endWeek;
    const [value, setValue] = useState(moment());
    const [currentD, setCurrentD] = useState(moment().clone().format("DD MMMM YYYY"))
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({ activeUser: sessionStorage.getItem("activeUser") });
    console.log(value)
    const [appointments, setAppointments] = useState(Year);
    const [today, setToday] = useState([]);

    //Check if the current user has been logged in 
    useEffect(() => {
        const userLogged = sessionStorage.getItem("activeUser");
        if (userLogged === "" || userLogged === null || userLogged === false) {
            navigate('/');
        }
    }, [currentUser]);
    
    //Get all appointments that have been scheduled for the current day
    useEffect(() => {
        axios.post('http://localhost:8888/MedAPI/getAppointments.php', JSON.stringify(appointments))
            .then((res) => {
                let data = res.data;
                let tempArr = [];
                // console.log(data);
                for (let i = 0; i < data.length; i++) {
                    tempArr.push(data[i])
                }
                setToday(tempArr);
            })

    }, [])

    return (
        <>
            <Navigation />
            <Col md={{ span: 8, offset: 1 }} className="workingCon">
                <SearchInput>
                    Search Patient...
                </SearchInput>
                <Col md={12}>
                    <h2 className='headingTwo' value={Year}> {Year} Appointments</h2>
                </Col>
                <Col md={12} className="cardCon">
                    {today.map((e) => (<Appointmentcard Doctor={e.Doctor} patient={e.Patient} time={e.timeStart + " " + e.timeEnd} />))}
                </Col>
                <Col md={12} className="calendarCon">
                    <Calendar value={value} val={value.clone().format("DD MMMM YYYY")} onChange={setValue}
                    />
                </Col>

                <Col md={12} className="BookingCon">
                    <Availablebook
                        value={value}
                        function={() => {
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
                    headerOne="Time"
                    headerTwo="Patient"
                    headerThree="Doctor"
                    headerFour=" "
                    Information1="09:00 - 10:00"
                    Information2="Leander van Aarde"
                    Information3="Dr Makan"
                    btnTxt="-REMOVE"
                >
                    <h5>{week} Appointments </h5>
                </TableInformation>
            </Col>
            {modalOpen && <Modal setModalOpen={setModalOpen} />}
        </>
    );
};

export default Appointments;