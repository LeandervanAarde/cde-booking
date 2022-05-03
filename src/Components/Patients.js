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
                 <Col md={{span:2, offset: 8}} className="addPatient">
                 <Addbutton/>
                 <p className='buttonText'>Add patient</p>
                 </Col>
            </Col>
            


            <Col md={3} className="work">
                <Profile />

            </Col>
        </>
    );
};

export default Patients;