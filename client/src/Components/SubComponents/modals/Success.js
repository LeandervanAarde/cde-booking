import * as React from "react";
import { useEffect, useState, useRef } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';


const Success = (props) => {
    return (
        ReactDOM.createPortal(

                    <>
                        <Col md={{ span: 1 }} className="successMod ">
                            {props.success}
                          <h4>{props.message}</h4>
                          {props.btn}
                        </Col>
                    </>
            , document.getElementById("root"))
    );
};

export default Success;