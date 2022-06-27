import * as React from "react";
import { useEffect, useState, useRef } from 'react';
import * as ReactDOM from "react-dom";
import { Col } from 'react-bootstrap';

const TooltipModal = (props) => {
    return (
        ReactDOM.createPortal(
     
                    <>
                        <Col md={{ span: 1 }} className="mod ">
                          <p>{props.message}</p>
                        </Col>
                    </>
            , document.getElementById("root"))
    );
};

export default TooltipModal;