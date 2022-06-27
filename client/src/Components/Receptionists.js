import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import "../index.scss";
import Profile from './SubComponents/UI/Profile';
import Chatroom from './SubComponents/UI/Chatroom';
import io from 'socket.io-client';
import Patientoverview from './SubComponents/UI/Patientoverview';
import { FaTty, FaBookMedical, FaUser } from "react-icons/fa";
import Staff from './SubComponents/UI/Staff';
import Navigation from './SubComponents/UI/Navigation';
import Receptionist from "../Components/Assets/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import image from "../Components/Assets/default.jpeg";
import { ConfirmationModal } from './SubComponents/modals/ConfirmationModal';
import { FaTimesCircle, FaTrashAlt } from "react-icons/fa";
import Primarybtn from './SubComponents/Buttons/PrimaryBtn';
import Addbutton from './SubComponents/Buttons/Addbutton';
import { ReceptionistC } from './SubComponents/UI/ReceptionistC';
import AddRecep from './SubComponents/UI/AddReceptionist/AddRecep';


const socket = io.connect("http://localhost:3001");

const Receptionists = () => {
    const [receptionists, setReceptionists] = useState([]);
    const [recepLength, setRecepLength]= useState();
    const Doctors = sessionStorage.getItem("doctors");
    const recep = sessionStorage.getItem("reception");
    const room = 1;
    const date = moment().clone().format("YYYY");
    const [click, setClick] = useState({ counter: 1 });
    const [clicked, setClicked] = useState(false);
    const [allDoctors, setAllDoctors] = useState();
    const [docLength, setDocLength] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [bookedL, setBookedL] = useState()
    const joinRoom = () => {
        if (room !== null) {
            socket.emit("joinRoom", room);
        }
    }
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({activeUser: sessionStorage.getItem("activeUser")});

    console.log(recep)

    useEffect(() =>{
        const userLogged = sessionStorage.getItem("activeUser");
        if(userLogged === "" || userLogged === null || userLogged === false){
            navigate('/');
        }
    }, [currentUser]);

    useEffect(() => {
        axios.get('http://localhost:8888/MedAPI/getAllReceptionists.php')
            .then((res) => {
                let data = res.data;
             setReceptionists(data);
             console.log(data.length)
             setRecepLength(data.length)
            })
    }, [recepLength]);

    useEffect(() =>{
        axios.get('http://localhost:8888/MedAPI/getAllDoctors.php')
        .then((res) => {
            let data = res.data;
            setAllDoctors(data);
            setDocLength(data.length)
            console.log(data.length)
        })
    }, [docLength])

    useEffect(() => {
        axios.post('http://localhost:8888/MedAPI/getAllBookedAppointments.php')
            .then((res) => {
                let data = res.data;
                setBookedL(data.length)
            })
    }, [bookedL]);

    const staffAmount = docLength + recepLength;
    // console.log(staffAmount)

    const deleteStaff = (e) => {
        setClick((prev) => ({ ...prev, counter: prev.counter + 1 }));
        console.log(click)
        if (click.counter == 1) {
            e.target.innerText = "Delete?"

        } else if (click.counter == 2) {
            let member = e.target.id;
            console.log(member)
            setModalOpen(true)
            axios.post('http://localhost:8888/MedAPI/deleteReceptionist.php', member)
                .then(res => {
                    let data = res.data;
                    console.log(data);
                    setModalOpen(true)
                })
                .catch(err => {
                    console.log(err);
                    alert("There was an issue deleting the Doctor")
                })
        }
    }

    return (
        <>
            <Navigation />
            <Col md={{ span: 8, offset: 1 }} className="workingCon">
                <h2 className='headingTwo ms-2'> RECEPTIONISTS </h2>

                <Patientoverview
                    title="Total Staff members"
                    number={staffAmount}
                    icon={<FaUser color={"#2663d4"} size={56} />} />

                <Patientoverview
                    title="Total Appointments"
                    number={bookedL}
                    icon={<FaBookMedical color={"#2663d4"} size={56} />} />

                <Patientoverview
                    title="Total Receptionists"
                    number={recepLength}
                    icon={<FaTty color={"#2663d4"} size={56} />} />

                <h2 className='allPatients ms-2 mt-4'>All Receptionists</h2>

                <Col md={{ span: 12 }} className='staffWrapper'>
                <Col md={{ span: 2, offset: 10 }} className="addPatient mb-5">
                    <Addbutton
                          function={() => {
                            return setClicked(true);
                        }}
                    />
                    <p className='buttonText'>Add Recep</p>
                </Col>
                {
                        !clicked
                        ?
                         receptionists.map((e) =>(<ReceptionistC
                            key={e.id}
                          img={!e.ProfileImage ? image : "http://localhost:8888/MedAPI/images/"+ e.ProfileImage}
                          name={e.name +" "+ e.surname}
                          gender={e.gender}
                          age={date - e.dateOfBirth.split(" ").splice(2)}
                          room={e.Status}
                          unique={"Monthly Income:"+ e.monthInc}
                          mail={e.email}
                          number={e.phoneNumber}
                          role={e.rank}
                          btn={<Col md={{ span: 6, offset: 3 }} className="button" id={e.id}><Primarybtn function={deleteStaff} id={e.id} > <FaTrashAlt color={"white"} size={13} /> Remove</Primarybtn></Col>}
                        />))
                        :
                        <AddRecep
                            cancel={() => {return setClicked(false)}}
                        />
                    }


                   

                </Col>
            </Col>

            <Col md={3} className="work">
                <Profile
                    Auth={"Cindy Stacy"}
                />
                <Chatroom
                    socket={socket}
                    room={room}
                    onClick={joinRoom}
                />
            </Col>
        </>
    );
};

export default Receptionists;