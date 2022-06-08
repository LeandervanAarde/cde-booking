import React, {useEffect} from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import "../../src/index.scss";
import SearchInput from './SubComponents/Inputs/SearchInput';
import Profile from './SubComponents/UI/Profile';
import Patientoverview from './SubComponents/UI/Patientoverview';
import { FaUser } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import Addbutton from './SubComponents/Buttons/Addbutton';
import TableInformation from './SubComponents/UI/TableInformation';
import People from './SubComponents/UI/People';
import AddModal from './SubComponents/modals/AddModal';
import ViewModal from "./SubComponents/modals/ViewModal";
import Navigation from './SubComponents/UI/Navigation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import image from "../Components/Assets/default.jpeg";

const Patients = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const Number = 1245;
    const Fees = 450.45;
    const Name = "Richard Hendricks";
    const [allPatients, setAllPatients] = useState([]);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({activeUser: sessionStorage.getItem("activeUser")});
    const current = moment().clone().format("DD MMMM ");

    useEffect(() =>{
        const userLogged = sessionStorage.getItem("activeUser");
        if(userLogged === "" || userLogged === null || userLogged === false){
            navigate('/');
        }
    }, [currentUser]);

    useEffect(() =>{
        axios.post('http://localhost:8888/MedAPI/getAllPatients.php')
        .then((res) =>{
            let data = res.data; 
            setAllPatients(data);
        });
    },[]);
    console.log(allPatients);


    const allPat= allPatients.map((e) => ( <People image={!e.profileImage ? image : "http://localhost:8888/MedAPI/images/"+e.profileImage} id={e.id} name={e.name +" "+ e.surname} children={e.medCondition} age={(+ e.dateOfBirth.split(" ").splice(2))} gender={e.gender} function={() => {return setModalOpen(true);}} />));


    return (
        <>
        <Navigation/>
            <Col md={{ span: 8, offset: 1 }} className="workingCon">
                <SearchInput>
                    Search Patient...
                </SearchInput>
                <h2 className='headingTwo'> CDE Program patients</h2>

                <Patientoverview
                    title="Total patients"
                    number={allPatients.length}
                    icon={<FaUser color={"#2663d4"} size={70} />} />

                <Patientoverview
                    title="Total Doctors"
                    number="60"
                    icon={<FaStethoscope color={"#2663d4"} size={70} />} />

                <Patientoverview
                    title="Total fees owed"
                    number={"R " + Fees}
                    icon={<FaMoneyBillWave color={"#2663d4"} size={70} />} />

                <h2 className='allPatients ms-4'>All patients</h2>

                <Col md={{ span: 2, offset: 10 }} className="addPatient">
                    <Addbutton 
                    function = {() => {
                            return setAddModal(true);
                        }}
                    />
                    <p className='buttonText'>Add patient</p>
                </Col>

                <Col md={12} className='mt-3 personBanner '>
                   {allPat}
                </Col>
            </Col>

            <Col md={3} className="work">
            <Profile />
                <TableInformation
                    headerOne="ID"
                    headerTwo="Patient"
                    headerThree="Fees"
                    headerFour=" "
                    Information1="01"
                    Information2="Leander van Aarde"
                    Information3="R6000.00"
                    btnTxt="PAID"
                >
                    Outstanding fees
                </TableInformation>
            </Col>
            {modalOpen && <ViewModal setModalOpen={setModalOpen} />}
            {addModal && <AddModal setAddModal={setAddModal} />}
        </>
    );
};

export default Patients;