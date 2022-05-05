import React from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import "../index.scss";
import SearchInput from './SubComponents/SearchInput';
import Profile from './SubComponents/Profile';
import Patientoverview from './SubComponents/Patientoverview';
import { FaUser } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import Addbutton from './SubComponents/Addbutton';
import TableInformation from './SubComponents/TableInformation';
import People from './SubComponents/People';
const Patients = (props) => {
    const Number = 1245;
    const Fees = 450.45
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
                    icon={<FaUser color={"black"} size={110} />} />

                <Patientoverview
                    title="Total Doctors"
                    number="60"
                    icon={<FaStethoscope color={"black"} size={110} />} />

                <Patientoverview
                    title="Total fees owed"
                    number={"R " + Fees}
                    icon={<FaMoneyBillWave color={"black"} size={110} />} />
                <h2 className='allPatients ms-4'>All patients</h2>
                <Col md={{ span: 2, offset: 8 }} className="addPatient">
                    <Addbutton />
                    <p className='buttonText'>Add patient</p>
                </Col>

                <People
                id= "01"
                name = "Richard Hendricks"
                children ="Diabetes"
                age = "29"
                gender ="Male"
                />
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
                    Information Goes here
                </TableInformation>
            </Col>
        </>
    );
};

export default Patients;