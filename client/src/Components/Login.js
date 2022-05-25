import React from 'react';
import { Col } from 'react-bootstrap';

const Login = () => {
    return (
        <>
            <Col md={7} className='background'></Col>

            <Col md={5} className='formCon'>
                <Col  md={{span: 6, offset: 3}} className="logoBg"></Col>
                <h1 className='logInTxt'><strong>LOG IN</strong></h1>

                <form>
                
                <input name="RecepID"  type="username" className='RecepID'  />
                <label className='recepLabel'>Receptionist ID</label>
                <br></br>
                
                <input name="Password"  type="password" className='Pass'  />
                <label className='passLabel'>Receptionist ID</label>
                </form>
            </Col>
        </>
    );
};

export default Login;