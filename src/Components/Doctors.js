import React from 'react';
import { Col } from 'react-bootstrap';
import "../index.scss";
import SearchInput from './SubComponents/SearchInput';
import Profile from './SubComponents/Profile';
import Patientoverview from './SubComponents/Patientoverview';
import { FaStethoscope, FaBookMedical, FaUser } from "react-icons/fa";
import Staff from './SubComponents/Staff';


const Doctors = () => {
    return (
        <>
        <Col md={{ span: 8, offset: 1 }} className="workingCon">
            <SearchInput>
                Search Patient...
            </SearchInput>
            <h2 className='headingTwo'> CDE Program patients</h2>

            <Patientoverview 
                title="Total Staff members"
                number={"50"}
                icon={<FaUser color={"#2663d4"} size={100} />} />

            <Patientoverview
                title="Total Appointments"
                number="60"
                icon={<FaBookMedical color={"#2663d4"} size={100} />} />

            <Patientoverview
                title="Total Doctors"
                number={"12"}
                icon={<FaStethoscope color={"#2663d4"} size={100} />} />

            <h2 className='allPatients ms-2 mt-4'>All Receptionists</h2>

            <Col md={{span:12}} className='staffWrapper'>

            <Staff/>
            <Staff/>
            <Staff/>
            <Staff/>
            <Staff/>
            <Staff/>
            </Col>


        </Col>

        <Col md={3} className="work">
            <Profile />

        </Col>

    </>
    );
};

export default Doctors;