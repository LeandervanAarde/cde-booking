import React from 'react';
import "../../../index.scss";
import { Col } from 'react-bootstrap';

const Profile = (props) => {
    return (
        <Col md={12} className="profile">
            <Col md={12} className="banner">
                <h4 className='headingTwo text-center' id='profileText'>MY PROFILE</h4>
            </Col>

            <Col md={{ span: 3}} className="profileImage"></Col>
            <h2 id="reception">{props.Auth}</h2>
            <h5 id="title">Head Receptionist</h5>
            <br></br>
            <Col md={12} className="receptionInfo">
                <Col md={4} className='receptionistInfo'><h6><strong>BIRTH DATE</strong></h6>  <h5 id="title">26 March 2022</h5></Col>
                <Col md={4} className='receptionistInfo'><h6><strong>PAY</strong></h6>  <h5 id="title">R15 000</h5></Col>
                <Col md={4} className='receptionistInfo'><h6><strong>SOMETHING</strong></h6>  <h5 id="title">Registered</h5></Col>

            </Col>
        </Col>
    );
};

export default Profile;



{/* <Col md={12} className="banner">
<h4 className='headingTwo text-center' id='profileText'>MY PROFILE</h4>
</Col>
<Col md={12}>
<Col md={{ span: 3 }} className="profileImage"></Col>
<h2 id="reception">{props.Auth}</h2>

<h5 id="title">Head Receptionist</h5>
</Col>

<Col md={12} className="receptionInfo">
<table id='receptionInfoT'>
    <thead>
        <tr>
            <th>Date Of Birth</th>
            <th>Income (p/m)</th>
            <th className='rightContainer'>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>26 March 2001</td>
            <td>R 24 000.00</td>
            <td className='rightContainer'>Registered</td>
        </tr>
        <tr>
        </tr>
    </tbody>
</table> */}

