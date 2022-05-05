import React from 'react';
import { Col} from 'react-bootstrap';
import Primarybtn from './PrimaryBtn';
import { FaEye } from "react-icons/fa";


const People = (props) => {
    return (
      <Col md={12} className="personBanner">
    
        <table id='information'>
                    <thead>
                        <tr className='tr'>
                            <th className='image'><Col md={11} className="picture"></Col></th>
                            <th className='id'>{props.id}</th>
                            <th className='name'>{props.name}</th>
                            <th className='title'>{props.children}</th>
                            <th className='age'>{props.age}</th>
                            <th className='gender'>{props.gender}</th>
                            <th className='button'><Primarybtn><FaEye/> View profile </Primarybtn></th>
                        </tr>

                        <tr className='tr'> 
                            <th className='image'><Col md={11} className="picture"></Col></th>
                            <th className='id'>{props.id}</th>
                            <th className='name'>{props.name}</th>
                            <th className='title'>{props.children}</th>
                            <th className='age'>{props.age}</th>
                            <th className='gender'>{props.gender}</th>
                            <th className='button'><Primarybtn> <FaEye/> View profile  </Primarybtn></th>
                        </tr>

                        <tr className='tr'>
                            <th className='image'><Col md={11} className="picture"></Col></th>
                            <th className='id'>{props.id}</th>
                            <th className='name'>{props.name}</th>
                            <th className='title'>{props.children}</th>
                            <th className='age'>{props.age}</th>
                            <th className='gender'>{props.gender}</th>
                            <th className='button'><Primarybtn> <FaEye/> View profile </Primarybtn></th>
                        </tr>

                        <tr className='tr'>
                            <th className='image'><Col md={11} className="picture"></Col></th>
                            <th className='id'>{props.id}</th>
                            <th className='name'>{props.name}</th>
                            <th className='title'>{props.children}</th>
                            <th className='age'>{props.age}</th>
                            <th className='gender'>{props.gender}</th>
                            <th className='button'><Primarybtn> <FaEye/> View profile </Primarybtn></th>
                        </tr>

                        <tr className='tr'>
                            <th className='image'><Col md={11} className="picture"></Col></th>
                            <th className='id'>{props.id}</th>
                            <th className='name'>{props.name}</th>
                            <th className='title'>{props.children}</th>
                            <th className='age'>{props.age}</th>
                            <th className='gender'>{props.gender}</th>
                            <th className='button'><Primarybtn> <FaEye/> View profile </Primarybtn></th>
                        </tr>

                        <tr className='tr'>
                            <th className='image'><Col md={11} className="picture"></Col></th>
                            <th className='id'>{props.id}</th>
                            <th className='name'>{props.name}</th>
                            <th className='title'>{props.children}</th>
                            <th className='age'>{props.age}</th>
                            <th className='gender'>{props.gender}</th>
                            <th className='button'><Primarybtn> <FaEye/> View profile </Primarybtn></th>
                        </tr>

                        <tr className='tr'>
                            <th className='image'><Col md={11} className="picture"></Col></th>
                            <th className='id'>{props.id}</th>
                            <th className='name'>{props.name}</th>
                            <th className='title'>{props.children}</th>
                            <th className='age'>{props.age}</th>
                            <th className='gender'>{props.gender}</th>
                            <th className='button'><Primarybtn> <FaEye/> View profile </Primarybtn></th>
                        </tr>

                        <tr className='tr'>
                            <th className='image'><Col md={11} className="picture"></Col></th>
                            <th className='id'>{props.id}</th>
                            <th className='name'>{props.name}</th>
                            <th className='title'>{props.children}</th>
                            <th className='age'>{props.age}</th>
                            <th className='gender'>{props.gender}</th>
                            <th className='button'><Primarybtn> <FaEye/> View profile </Primarybtn></th>
                        </tr>

                        <tr className='tr'>
                            <th className='image'><Col md={11} className="picture"></Col></th>
                            <th className='id'>{props.id}</th>
                            <th className='name'>{props.name}</th>
                            <th className='title'>{props.children}</th>
                            <th className='age'>{props.age}</th>
                            <th className='gender'>{props.gender}</th>
                            <th className='button'><Primarybtn> <FaEye/> View profile </Primarybtn></th>
                        </tr>
                        
                    </thead>
                </table>
      </Col>
    );
};

export default People;