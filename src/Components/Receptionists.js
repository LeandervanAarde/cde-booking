import React from 'react';
import { Col } from 'react-bootstrap';
import "../index.scss";
import SearchInput from './SubComponents/SearchInput';
import Profile from './SubComponents/Profile';

const Receptionists = () => {
    return (
        <>
        <Col md={{ span: 8, offset: 1 }} className="workingCon">
            <SearchInput>
                Search Patient...
            </SearchInput>
                <h2 className='headingTwo ms-2'> RECEPTIONISTS </h2>
        </Col>

        <Col md={3} className="work">
            <Profile />
           
        </Col>
  
       
    </>
    );
};

export default Receptionists;