import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import "../../src/index.scss";
import SearchInput from './SubComponents/Inputs/SearchInput';
import Profile from './SubComponents/UI/Profile';
import Patientoverview from './SubComponents/UI/Patientoverview';
import { FaMoneyBillWave, FaTimesCircle, FaStethoscope, FaUser  } from "react-icons/fa";
import Addbutton from './SubComponents/Buttons/Addbutton';
import TableInformation from './SubComponents/UI/TableInformation';
import People from './SubComponents/UI/People';
import Primarybtn from './SubComponents/Buttons/PrimaryBtn';
import AddModal from './SubComponents/modals/AddModal';
import Navigation from './SubComponents/UI/Navigation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import image from "../Components/Assets/default.jpeg";
import TableRow from './SubComponents/UI/TableRow';
import { ConfirmationModal } from './SubComponents/modals/ConfirmationModal';

const Patients = (props) => {
    // const [modalOpen, setModalOpen] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [allPatients, setAllPatients] = useState([]);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({ activeUser: sessionStorage.getItem("activeUser") });
    const current = moment().clone().format("DD MMMM ");
    const [allDoctors, setAllDoctors] = useState([]);
    const [person, setPerson] = useState();
    const date = moment().clone().format("YYYY");
    const [fees, setFees] = useState();
    const [reset, setReset] = useState();
    const [updatePatients, setUpdatePatiens] = useState();
    const[outstanding, setOutstanding] = useState();
    const [outstandingItem, setOutstandingItem] = useState();
    const [openConfirm, setOpenConfirm] = useState(false);

    useEffect(() => {
        const userLogged = sessionStorage.getItem("activeUser");
        if (userLogged === "" || userLogged === null || userLogged === false) {
            navigate('/');
        }
    }, [currentUser]);

    const paidFees = (e) =>{
        let value = e.target.id;
       
        axios.post('http://localhost:8888/MedAPI/editFees.php', value)
        .then((res) =>{
            let data = res.data;
            console.log(data); 
            setOpenConfirm(true);
        })
        .catch((err) =>{
            console.log(err)
        })
        
    }

    useEffect(() => {
        axios.post('http://localhost:8888/MedAPI/getAllPatients.php')
            .then((res) => {
                let data = res.data;
                console.log(data)

                const arr = [];

                for(let i = 0; i < data.length; i++){
                    if(data[i].feesOut != 0){
                        arr.push({
                            id: data[i].id,
                            name: data[i].name,
                            surname: data[i].surname,
                            fees: "R " + data[i].feesOut
                        })
                        let outstandingpeople = arr.map((e) => <TableRow  Information1={e.id} Information2={e.name +" "+ e.surname} Information3={e.fees} btnTxt={"- PAID"} function={paidFees} id={e.id}/>)

                        setOutstanding(outstandingpeople);
                    }
                }

                let outstandingFees = data.map((e) => (+ e.feesOut));
                let total = Math.round(outstandingFees.reduce((accumulator, currVal) => (accumulator + currVal), 0));
                setFees(total)
                let allPat = data.map((e, index) => (
                    <People
                        {...e} 
                        key={index}
                        image={!e.profileImage ? image : "http://localhost:8888/MedAPI/images/" + e.profileImage} 
                        age={(+date - e.dateOfBirth.split(" ").splice(2))} 
                    />
                ));
              
                setAllPatients(allPat);
            });

        axios.get('http://localhost:8888/MedAPI/getAllDoctors.php')
            .then((res) => {
                let data = res.data;
                setAllDoctors(data);
               
            });

           
    }, []);  

    console.log(fees)
    return (
        <>
            <Navigation />
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
                    number={allDoctors.length}
                    icon={<FaStethoscope color={"#2663d4"} size={70} />} />

                <Patientoverview
                    title="Total fees owed"
                    number={"R " + fees}
                    icon={<FaMoneyBillWave color={"#2663d4"} size={70} />} />

                <h2 className='allPatients ms-4'>All patients</h2>

                <Col md={{ span: 2, offset: 10 }} className="addPatient">
                    <Addbutton
                        function={() => {
                            return setAddModal(true);
                        }}
                    />
                    <p className='buttonText'>Add patient</p>
                </Col>

                <Col md={12} className='mt-3 personBanner '>
                    {allPatients}
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
                    row={outstanding}
                >
                    Outstanding fees
                </TableInformation>

            </Col>
            {addModal && <AddModal   
            last = "Last Name"
            DOB = "Date of Birth"
            day = "Day"
            function={() => { return setAddModal(false); }} />}
            {openConfirm && <ConfirmationModal content={"Patient fees has updated"} button={<Primarybtn function={() =>{ return setOpenConfirm(false)}}><FaTimesCircle size={25}/> Close  </Primarybtn>}/>}
        </>
    );
};

export default Patients;