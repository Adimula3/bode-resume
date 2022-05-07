import React from 'react';
import {Col, Row} from "react-bootstrap";

function Services() {
    return (
        <div>
            <section className="services" id="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Services</h2>
                    </div>
                    <Row>
                        <Col md={4}>
                            <div className="service-box">
                                <div className="service-icon">
                                    <span className="icon-circle"><i className='bx bx-briefcase'></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">End user support </h2>
                                    <p className="s-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                        provident vitae! Magni
                                        tempora perferendis eum non provident.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="service-box">
                                <div className="service-icon">
                                    <span className="icon-circle"><i className='bx bx-bar-chart'></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Data Analyst</h2>
                                    <p className="s-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                        provident vitae! Magni
                                        tempora perferendis eum non provident.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="service-box">
                                <div className="service-icon">
                                    <span className="icon-circle"><i className='bx bxs-binoculars'></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Software Tester</h2>
                                    <p className="s-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                        provident vitae! Magni
                                        tempora perferendis eum non provident.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

        </div>
    );
}

export default Services;