import React from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import "../index.scss";
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

const Patients = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [addModal, setAddModal] = useState(false);

    const Number = 1245;
    const Fees = 450.45;
    const Name = "Richard Hendricks";
    return (
        <>
            <Col md={{ span: 8, offset: 1 }} className="workingCon">
                <SearchInput>
                    Search Patient...
                </SearchInput>
                <h2 className='headingTwo'> CDE Program patients</h2>

                <Patientoverview
                    title="Total patients"
                    number={Number}
                    icon={<FaUser color={"#2663d4"} size={100} />} />

                <Patientoverview
                    title="Total Doctors"
                    number="60"
                    icon={<FaStethoscope color={"#2663d4"} size={100} />} />

                <Patientoverview
                    title="Total fees owed"
                    number={"R " + Fees}
                    icon={<FaMoneyBillWave color={"#2663d4"} size={100} />} />

                <h2 className='allPatients ms-4'>All patients</h2>

                <Col md={{ span: 2, offset: 8 }} className="addPatient">
                    <Addbutton 
                    function = {() => {
                            return setAddModal(true);
                        }}
                    />
                    <p className='buttonText'>Add patient</p>
                </Col>

                <Col md={12} className='mt-3 personBanner '>
                    <People
                        id="01"
                        name={Name}
                        children="Diabetes"
                        age="29"
                        gender="Male"
                        function={() => {
                            return setModalOpen(true);
                        }}
                    />



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