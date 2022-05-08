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
                                    <p className="s-description"> Providing an assistance to IT issues and disruptions, by being the first line of help to assist the end-user
                                         when they encounter problems with software or applications or a defect in an IT program..</p>
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
                                    <p className="s-description">Collecting,processing and presenting data to business owners in form of actionable insight while avoiding
                                        investment in the development and administration of analytic solution.
                                        </p>
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
                                    <p className="s-description"> Offering of Software Testing services to an organization or a business such as Performance and Load Testing,
                                        Mobile Application Testing,Usability Testing, Functionality Testing, UI Testing.</p>
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