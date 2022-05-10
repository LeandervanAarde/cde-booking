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
                    icon={<FaUser color={"#2663d4"} size={90} />} />

                <Patientoverview
                    title="Total Appointments"
                    number="60"
                    icon={<FaBookMedical color={"#2663d4"} size={90} />} />

                <Patientoverview
                    title="Total Doctors"
                    number={"12"}
                    icon={<FaStethoscope color={"#2663d4"} size={90} />} />

                <h2 className='allPatients ms-2 mt-4'>All Receptionists</h2>

                <Col md={{ span: 12 }} className='staffWrapper'>

                    <Staff
                        name="name:"
                        nameContent="Dr. David Segal"
                        Age="Age:"
                        ageContent="54"
                        sex="Sex:"
                        sexContent="Male"
                        cell="Cell:"
                        cellContent="082 134 8492"
                        mail="Mail:"
                        mailContent="DavidS@CDE.com"
                        unique="Room:"
                        uniqueContent="D1"
                        title="Specialisastion"
                        titleContent="Endocronology"
                        pay="Consult fee"
                        payContent="R 650"

                    />
                    <Staff
                        name="name:"
                        nameContent="Dr. David Segal"
                        Age="Age:"
                        ageContent="54"
                        sex="Sex:"
                        sexContent="Male"
                        cell="Cell:"
                        cellContent="082 134 8492"
                        mail="Mail:"
                        mailContent="DavidS@CDE.com"
                        unique="Room:"
                        uniqueContent="D1"
                        title="Specialisastion"
                        titleContent="Endocronology"
                        pay="Consult fee"
                        payContent="R 650"

                    />
                    <Staff
                        name="name:"
                        nameContent="Dr. David Segal"
                        Age="Age:"
                        ageContent="54"
                        sex="Sex:"
                        sexContent="Male"
                        cell="Cell:"
                        cellContent="082 134 8492"
                        mail="Mail:"
                        mailContent="DavidS@CDE.com"
                        unique="Room:"
                        uniqueContent="D1"
                        title="Specialisastion"
                        titleContent="Endocronology"
                        pay="Consult fee"
                        payContent="R 650"

                    />
                    <Staff
                        name="name:"
                        nameContent="Dr. David Segal"
                        Age="Age:"
                        ageContent="54"
                        sex="Sex:"
                        sexContent="Male"
                        cell="Cell:"
                        cellContent="082 134 8492"
                        mail="Mail:"
                        mailContent="DavidS@CDE.com"
                        unique="Room:"
                        uniqueContent="D1"
                        title="Specialisastion"
                        titleContent="Endocronology"
                        pay="Consult fee"
                        payContent="R 650"

                    />
                    <Staff
                        name="name:"
                        nameContent="Dr. David Segal"
                        Age="Age:"
                        ageContent="54"
                        sex="Sex:"
                        sexContent="Male"
                        cell="Cell:"
                        cellContent="082 134 8492"
                        mail="Mail:"
                        mailContent="DavidS@CDE.com"
                        unique="Room:"
                        uniqueContent="D1"
                        title="Specialisastion"
                        titleContent="Endocronology"
                        pay="Consult fee"
                        payContent="R 650"

                    />
                    <Staff
                        name="name:"
                        nameContent="Dr. David Segal"
                        Age="Age:"
                        ageContent="54"
                        sex="Sex:"
                        sexContent="Male"
                        cell="Cell:"
                        cellContent="082 134 8492"
                        mail="Mail:"
                        mailContent="DavidS@CDE.com"
                        unique="Room:"
                        uniqueContent="D1"
                        title="Specialisastion"
                        titleContent="Endocronology"
                        pay="Consult fee"
                        payContent="R 650"

                    />
                    <Staff
                        name="name:"
                        nameContent="Dr. David Segal"
                        Age="Age:"
                        ageContent="54"
                        sex="Sex:"
                        sexContent="Male"
                        cell="Cell:"
                        cellContent="082 134 8492"
                        mail="Mail:"
                        mailContent="DavidS@CDE.com"
                        unique="Room:"
                        uniqueContent="D1"
                        title="Specialisastion"
                        titleContent="Endocronology"
                        pay="Consult fee"
                        payContent="R 650"

                    />
                    <Staff
                        name="name:"
                        nameContent="Dr. David Segal"
                        Age="Age:"
                        ageContent="54"
                        sex="Sex:"
                        sexContent="Male"
                        cell="Cell:"
                        cellContent="082 134 8492"
                        mail="Mail:"
                        mailContent="DavidS@CDE.com"
                        unique="Room:"
                        uniqueContent="D1"
                        title="Specialisastion"
                        titleContent="Endocronology"
                        pay="Consult fee"
                        payContent="R 650"

                    />
                </Col>


            </Col>

            <Col md={3} className="work">
                <Profile />

            </Col>

        </>
    );
};

export default Doctors;