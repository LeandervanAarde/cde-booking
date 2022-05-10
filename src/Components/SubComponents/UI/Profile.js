import React from 'react';
import "../../../index.scss";
import { Col} from 'react-bootstrap';

const Profile = () => {
    return (
        <Col md={12} className="profile">
            <Col md={12} className="banner">
                <h2 className='headingTwo text-center' id='profileText'>MY PROFILE</h2>
            </Col>
            <Col md={12}>
                <Col md={{ span: 3 }} className="profileImage"></Col>
                <h2 id="reception">RECEPTIONIST NAME</h2>
                
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
                </table>
            </Col>
        </Col>
    );
};

export default Profile;


