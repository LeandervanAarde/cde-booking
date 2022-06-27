import * as React from "react";
import { useEffect, useState, useRef } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';
import Primarybtn from "../Buttons/PrimaryBtn";

export const HeadRecepModal = (props) => {
    return (
        ReactDOM.createPortal(
            <>
                <Col md={{ span: 1 }} className="successMod ">

                    <h4 id="message">{props.message}</h4>
                    <label className="lab" for="email">Head receptionist Email</label>
                    <br />
                    <input ref={props.mail} type={"email"} className="in"></input>
                    <br />
                    <label className="lab" for="email">Head receptionist password</label>
                    <br />
                    <input ref={props.password} type={"password"} className="in"></input>
                    <br />
                    <Col md={{ span: 4, offset: 1 }} className="btnContainer"><Primarybtn id={"cancel"} function={props.cancel}>Cancel</Primarybtn></Col>
                    <Col md={{ span: 4, offset: 1 }} className="btnContainer" onClick={props.confirm}><Primarybtn  >Confirm</Primarybtn></Col>

                </Col>
            </>
            , document.getElementById("root"))
    );
};




