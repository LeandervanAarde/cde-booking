import React from 'react';
import { Col} from 'react-bootstrap';
import { useState } from 'react';
import moment from 'moment';
import "../index.scss";
import SearchInput from './SubComponents/SearchInput';
import Appointmentcard from './SubComponents/Appointmentcard';
import Profile from './SubComponents/Profile';
import Calendar from './SubComponents/Calendar/Calendar';
const Appointments = () => {
    let today = new Date();
    let stringDate = today.toString().split(" ").splice(1, 3);

    // If year is not wanted please use stringDateTwo.
    // let stringDateTwo = today.toString().split(" ").splice(1, 2);
    // Display date refers to the date that will be displayed on the frontend.
    const displayDate = stringDate.join(' ');
    // const monthDisplay = month.join(' ');



    const [value, setValue] = useState(moment());
    return (
       <>
            <Col md={{span:7, offset: 1}} className="workingCon">
                <SearchInput>
                    Search Patient...
                </SearchInput>
                <Col md={12}>
                    <h2 className='headingTwo'> {displayDate} Appointments</h2>
                </Col>
                <Col md={12} className="cardCon">
                    <Appointmentcard />
                    <Appointmentcard />
                    <Appointmentcard />
                    <Appointmentcard />
                    <Appointmentcard />

                    <p className='smallText text-center'> Scroll horizontal to see all appointments</p>
                </Col>
                <Col md={12} className="calendarCon">
                    <Calendar value={value} onChange={setValue}/>
                </Col>
            </Col>

        <Col md={4} className="work">
            <Profile/> 
        </Col>
     </>  
        
    );
};

export default Appointments;