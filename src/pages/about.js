import React from 'react';
import {Col, Row} from "react-bootstrap";

function About() {
    return (
        <div>
            <section className="about" id="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                    </div>
                    <Row>
                        <Col lg={5}>
                            <div className="img-box">
                                <img className="bode" src={require("../assests/Img/bode2.jpeg" )} alt=""></img>
                            </div>

                        </Col>
                        <Col lg={7}>
                            <div className="content">
                                <h4>Data-Analyst & End User Support Engineer</h4>
                            </div>
                            <Row>
                                <Col md={6}>
                                    <div className="counts">
                                        <i className='bx bx-smile'></i><span className="number">65</span>
                                        <p><strong>Happy clients</strong></p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="counts">
                                        <i className='bx bx-notepad'></i><span className="number">100</span>
                                        <p><strong>Projects</strong></p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="counts">
                                        <i className='bx bx-time'></i><span className="number">2</span>
                                        <p><strong>Years of Experience</strong></p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="counts">
                                        <i className='bx bx-certification'></i><span className="number">4</span>
                                        <p><strong>Certifications</strong></p>
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