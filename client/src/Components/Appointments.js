import React, { useEffect, useRef, useReducer } from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import moment from 'moment';
import "../index.scss";
import Appointmentcard from './SubComponents/Appointments/Appointmentcard';
import Profile from './SubComponents/UI/Profile';
import Calendar from './SubComponents/Calendar/Calendar';
import TableInformation from './SubComponents/UI/TableInformation';
import Availablebook from './SubComponents/Appointments/Availablebook';
import AvailableAppointItems from './SubComponents/Appointments/AvailableAppointItems';
import Modal from './SubComponents/modals/Modal';
import Navigation from './SubComponents/UI/Navigation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Primarybtn from './SubComponents/Buttons/PrimaryBtn';
import { FaRegCalendarCheck,FaEdit, FaTrashAlt } from "react-icons/fa";
import NoAppointments from './SubComponents/Appointments/NoAppointments';
import Addbutton from './SubComponents/Buttons/Addbutton';
import AppointmentModal from './SubComponents/modals/AppointmentModal';
import TableRow from './SubComponents/UI/TableRow';

const Appointments = () => {

    const endWeek = moment().clone().endOf('week').format("DD MMMM YYYY");
    const current = moment().clone().format("DD MMMM ");
    const Year = moment().clone().format("DD MMMM YYYY");
    const week = current + " - " + endWeek;
    const [value, setValue] = useState(moment());
    const [modalOpen, setModalOpen] = useState(false);
    const [appModal, setappModal] = useState(false);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({ activeUser: sessionStorage.getItem("activeUser") });
    const [appointments, setAppointments] = useState(Year);
    const [today, setToday] = useState([]);
    const [availableAppointments, setAvailableAppointments] = useState([]);
    const [allDoctors, setAllDoctors] = useState([]);
    const [allPatients, setAllPatients] = useState([]);
    const [weeklyAppointments, setWeeklyAppointments] = useState();
    const name = useRef();
    const start = useRef();
    const end = useRef();
    const day = useRef();
    const month = useRef();
    const year = useRef();
    const appointId = useRef();
    const specialisation = useRef();
    const patientName = useRef();
    const [doctorName, setDoctorName] = useState();
    const [appointmentId, setAppointmentId] = useState();

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
                for (let i = 0; i < data.length; i++) {
                    tempArr.push(data[i])
                }
                setToday(tempArr);
            })
    }, []);

    useEffect(() => {
        axios.post('http://localhost:8888/MedAPI/availableAppointments.php', JSON.stringify(value.clone().format("DD MMMM YYYY")))
            .then((res) => {
                let data = res.data;
                if (!data || data === false) {
                    setAvailableAppointments(false)
                } else {
                    setAvailableAppointments(data)
                }
            })
    }, [value.clone().format("DD MMMM YYYY")]);



    const openTheModal = (e) =>{
        let targ = e.target.id;
     
        setModalOpen(true);
        setAppointmentId(targ)
  }

    const outPut = !availableAppointments 
                    ? (<NoAppointments 
                        mess={"No appointments for " + value.clone().format("DD MMMM YYYY")} />) 
                        : availableAppointments.map((e) => (
                        <AvailableAppointItems 
                        key={e.id}
                        time={e.TimeStart} 
                        timeEnd = {e.TimeEnd}
                        Dr={e.DoctorName} 
                        special={e.Speciality} 
                        btn={<Primarybtn id={e.id} function={openTheModal}><FaRegCalendarCheck  size={20}/> Book </Primarybtn>}
                        edit={<Primarybtn id={e.id}> <FaEdit size={20}/> Edit</Primarybtn>}   
                        delete={<Primarybtn id={e.id} extraClass={"del"}> <FaTrashAlt size={20}/> delete</Primarybtn>}   
                        date={e.Date}    
                        />));

    const getName = (e) => {
        let nm = e.target.value;
        setDoctorName(nm)
    }

    const bookApp = (e) => {
        let information = {
            name: doctorName,
            startTime: start.current.value.trim(),
            endTime: end.current.value.trim(),
            specialisation: specialisation.current.value.trim(),
            date: day.current.value.trim() < 10? "0" + day.current.value.trim() + " " + month.current.value.trim() + " " + year.current.value.trim() :  day.current.value.trim() + " " + month.current.value.trim() + " " + year.current.value.trim()
        }
//Endocrinology
        if(information.date < 10){
            information.date = "0" + day.current.value.trim() + " " + month.current.value.trim() + " " + year.current.value.trim()
        }
        // setAvail(information);
        axios.post('http://localhost:8888/MedAPI/addAvailable.php', information)
            .then((res) => {
                let data = res.data;

                setappModal(false);
                // setAvail(information);
            })
    }

    useEffect(() => {
        axios.get('http://localhost:8888/MedAPI/getAllPatients.php')
            .then((res) => {
                let data = res.data;
                setAllPatients(data);
            });

        axios.get('http://localhost:8888/MedAPI/getAllDoctors.php')
            .then((res) => {
                let data = res.data;
                setAllDoctors(data);
            })
    }, []);

    const allPat = allPatients.map((e) => (<option  id={e.id} value={e.id}>{e.name} {e.surname}</option>));
    const dropElements = allDoctors.map((e) => (<option ref={name} value={e.name + " " + e.surname}>{e.name} {e.surname}</option>));

    useEffect(() => {
        axios.get(`http://localhost:8888/MedAPI/getWeeklyAppoint.php?endWeek=${endWeek}&startWeek=${Year}`)
            .then((res) => {
                let data = res.data;
                let weeklyApp = data.map((e) => (<TableRow id={e.id} Information1={e.Date} Information2={e.timeStart + " - " + e.timeEnd} Information3={e.Patient} btnTxt={"- REMOVE"} />));
                setWeeklyAppointments(weeklyApp);
            });
    }, []);


    return (
        <>
            <Navigation />
            <Col md={{ span: 8, offset: 1 }} className="workingCon">

                <Col md={12}>
                    <h2 className='headingTwo' id={'todayApp'} value={Year}> {Year} Appointments</h2>
                </Col>

                <Col md={12} className="cardCon">
                    {today.map((e) => (<Appointmentcard img={!e.DoctorImage ? e.DoctorImage : "http://localhost:8888/MedAPI/images/" + e.DoctorImage}  Doctor={e.Doctor} patient={e.Patient} time={e.timeStart + " " + e.timeEnd} />))}
                </Col>

                <Col md={12} className="calendarCon">
                    <Calendar value={value} val={value.clone().format("DD MMMM YYYY")} onChange={setValue}/>
                </Col>

                <Col md={{ span: 2, offset: 10 }} className="addPatient">
                    <Addbutton
                        function={() => {
                            return setappModal(true);
                        }}
                    />
                    <p className='buttonText'>Add avail</p>
                </Col>

                <Col md={12} className="BookingCon">
                    <Availablebook
                        valueRead={value.clone().format("DD MMMM YYYY")}
                        Children={outPut}
                    />
                </Col>
            </Col>

            <Col md={3} className="work">
                <Profile />
                <TableInformation
                    headerOne="Date"
                    headerTwo="Time"
                    headerThree="Patient"
                    headerFour={" "}
                    row={weeklyAppointments}
                >
                    <h5>{week} Appointments </h5>
                </TableInformation>
            </Col>

            {modalOpen && <Modal
                key={appointmentId}
                id={appointmentId}
                select={allPat}
                nm={"Patient name "}
                pName={patientName}
                cont={"Patient Cell"}
                mail={"Patient email"}
                setModalOpen={modalOpen}
               
            />}

            {appModal &&
                <AppointmentModal
                    head= {"Add availability"}
                    special={"Doctor type"}
                    timeBegin={start}
                    timeEnd={end}
                    day={day}
                    month={month}
                    year={year}
                    specialisation={specialisation}
                    nm={"Doctor "}
                    select={dropElements}
                    startTime={"Start time"}
                    endTime={"End time"}
                    mail={"Date"}
                    ref={name}
                    function={bookApp}
                  
                    setappModal={appModal}
                    getDrop={getName}
                />}
        </>
    );
};

export default Appointments;