import React, { useEffect, useState } from 'react';
import "../../../index.scss";
import { Col } from 'react-bootstrap';
import axios from 'axios';

const Profile = (props) => {

    const userLogged = sessionStorage.getItem("activeUser");
    const [user, setUser] = useState(sessionStorage.getItem("activeUser"));
    const [recepInfo, setRecepInfo] = useState({
        email: sessionStorage.getItem("activeUser"),
        name: '',
        status: '',
        income: '',
        birthday: '',
        rank: '',
        gender: '',
        image: ''
    })

    // useEffect(() => {
    //     axios.post('http://localhost:8888/MedAPI/getUserInfo.php',userLogged)
    //         .then((res) => {
    //             let data = res.data;
    //             console.log(data) 
    //         })
    // }, [userLogged]);

    // let t = JSON.string
    useEffect(() => {
        axios.post('http://localhost:8888/MedAPI/getUserInfo.php', JSON.stringify(recepInfo))
            .then((res) => {
                console.log(res.data[0]);
                // let somethingWeird = res.data.email.toUpperCase()
                // console.log(somethingWeird)
                // let data = res.data;
                // console.log(data);
                setRecepInfo({
                    email: res.data[0].email,
                    name: res.data[0].name +" "+ res.data[0].surname,
                    status: res.data[0].Status,
                    income: res.data[0].monthInc,
                    birthday: res.data[0].dateOfBirth,
                    rank: res.data[0].rank,
                    gender: res.data[0].gender,
                    image: res.data[0].profileImage
                });
            })
    }, []);

   


    return (
        <Col md={12} className="profile">
            <Col md={12} className="banner">
                <h4 className='headingTwo text-center' id='profileText'>MY PROFILE</h4>
            </Col>

            <Col md={{ span: 3 }} className="profileImage"></Col>
            <h2 id="reception">{recepInfo.name}</h2>
            <h5 id="title">{recepInfo.rank}</h5>
            <br></br>
            <Col md={12} className="receptionInfo">
                <Col md={4} className='receptionistInfo'><h6><strong>BIRTH DATE</strong></h6>  <h5 id="title">{recepInfo.birthday}</h5></Col>
                <Col md={4} className='receptionistInfo'><h6><strong>PAY</strong></h6>  <h5 id="title">{recepInfo.income}</h5></Col>
                <Col md={4} className='receptionistInfo'><h6><strong>WORK STATUS</strong></h6>  <h5 id="title">{recepInfo.status}</h5></Col>

            </Col>
        </Col>
    );
};

export default Profile;