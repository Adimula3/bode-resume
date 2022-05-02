import React from 'react';
import {Col, Row} from "react-bootstrap";

function About() {
    return (
        <div>
            <section className="about" id="about">
                <div className="container">
                    <div className="section-title">
                        `<h4>About</h4>
                    </div>
                    <Row>
                        <Col lg={5}>
                            <img src={require("../assests/Img/bode2.jpeg" )} alt="" height="380" width="500"></img>
                        </Col>
                        <Col lg={7}>
                            <div className="content">
                                <h4>Data-Analyst & UI/UX Designer</h4>
                            </div>
                            <Row>
                                <Col md={6}>
                                    <div className="counts">
                                        <i className='bx bx-smile'></i><span className="number">65</span>
                                        <p><strong>Happy clients</strong> weve got over 65 happy cliennts</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="counts">
                                        <i className='bx bx-notepad'></i><span className="number">100</span>
                                        <p><strong>Projects</strong> over 100 projects don successfully</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="counts">
                                        <i className='bx bx-time'></i><span className="number">3</span>
                                        <p><strong>Years of Experience</strong> Years of experience in both data analysis and ui/ux design</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="counts">
                                        <i className='bx bx-certification'></i><span className="number">5</span>
                                        <p><strong>Certifications</strong> over 5 certifications in various discipline</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </section>

        </div>
    );
}

export default About;