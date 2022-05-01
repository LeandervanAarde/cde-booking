import React from 'react';
import "../../index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Placeholder } from 'react-bootstrap';

const Profile = () => {
    return (
        <Col md={12} className="profile">
            <Col md={12} className="banner">
                <h2 className='headingTwo text-center' id='profileText'>MY PROFILE</h2>
            </Col>
            <Col md={12}>
                <Col md={{ span: 4 }} className="profileImage"></Col>
                <h2 id="reception">RECEPTIONIST NAME</h2>
                <br></br>
                {/* <h5 id="title">Head Receptionist</h5> */}
            </Col>

            <Col md={12} className="receptionInfo">
                <table className='receptionInfoT'>
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
                </table>
            </Col>
        </Col>
    );
};

export default Profile;


