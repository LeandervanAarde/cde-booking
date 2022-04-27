import React from 'react';
import { Col, Placeholder } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/appointments.scss';
import Input from './Subcomponents/Input';
import '../index.scss';
import Circle from './Subcomponents/Circle';
import Cards from './Subcomponents/Cards';
const Appointments = () => {
    //Get current day
    let today = new Date;
    let stringDate = today.toString().split(" ").splice(1,3);
    const displayDate = stringDate.join(' ');

    //get current day +7
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
    let stringWeek = nextweek.toString().split(" ").splice(1,3);
    let displayWeek = stringWeek.join(' ');
    const sevenDays = displayDate + " - " + displayWeek + " ";
    console.log(sevenDays);
 
    return (
        <Col md={{span:10, offset: 2}}className="contentContainer">
            <Input >
                Search Patient...
            </Input>
            <Col md={{span:2, offset: 1}} className="profile">
                <Circle>
                    <img src='../Assets/CDE.png'></img>
                </Circle>
                <p className='text-center'> Receptionists Name</p>
            </Col>
            <h3 className='ps-3 heading'>Appointments for {displayDate}</h3>
            <Col md={{span:12 }} className="cardsContainer ">
        
                <Cards>
                    <Col md={{span:11, offset:1}} className="card-photo pt-4">
                        <Circle/>
                        <h4 className='ms-5 mt-4'>Doctor Name</h4>
                        <h4 className='ms-5 mt-4'>Patient Name</h4>
                        <h4 className='ms-5 mt-4'>14:00 - 15:00</h4>
                    </Col>
                </Cards>

                <Cards>
                    <Col md={{span:11, offset:1}} className="card-photo pt-4">
                        <Circle/>
                        <h4 className='ms-5 mt-4'>Doctor Name</h4>
                        <h4 className='ms-5 mt-4'>Patient Name</h4>
                        <h4 className='ms-5 mt-4'>14:00 - 15:00</h4>
                    </Col>
                </Cards>

                <Cards>
                    <Col md={{span:11, offset:1}} className="card-photo pt-4">
                        <Circle/>
                        <h4 className='ms-5 mt-4'>Doctor Name</h4>
                        <h4 className='ms-5 mt-4'>Patient Name</h4>
                        <h4 className='ms-5 mt-4'>14:00 - 15:00</h4>
                    </Col>
                </Cards>

                <Cards>
                    <Col md={{span:11, offset:1}} className="card-photo pt-4">
                        <Circle/>
                        <h4 className='ms-5 mt-4'>Doctor Name</h4>
                        <h4 className='ms-5 mt-4'>Patient Name</h4>
                        <h4 className='ms-5 mt-4'>14:00 - 15:00</h4>
                    </Col>
                </Cards>

                <Cards>
                    <Col md={{span:11, offset:1}} className="card-photo pt-4">
                        <Circle/>
                        <h4 className='ms-5 mt-4'>Doctor Name</h4>
                        <h4 className='ms-5 mt-4'>Patient Name</h4>
                        <h4 className='ms-5 mt-4'>14:00 - 15:00</h4>
                    </Col>
                </Cards>
            </Col>
            <h3 className='ps-3 heading'>{sevenDays} Appointments</h3>

        </Col>
    );
};

export default Appointments;