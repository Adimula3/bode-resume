import React from 'react';
import {Col, Row} from "react-bootstrap";
import {CircleProgress} from 'react-gradient-progress'

function Resume() {
    return (
        <div>
            <section className="resume" id="resume">
                <div className="container">
                        <h4 className="section-title">Resume</h4>
                    <Row>
                        <Col lg={6}>
                            <h5 className="resume-title">Summary</h5>
                            <div className="resume-item">
                                <h4>Brandon Johnson</h4>
                                <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                <ul>
                                    <li>Portland par 127,Orlando, FL</li>
                                    <li>(123) 456-7891</li>
                                    <li>alice.barkley@example.com</li>
                                </ul>
                            </div>
                            <h5 className="resume-title">Education</h5>
                            <div className="resume-item">
                                <h4>Bachelor of Computer science</h4>
                                <h5>2016-2021</h5>
                                <p><em>Kwara state univeristy</em></p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h4 className="resume-title">Professional Experience</h4>
                            <div className="resume-item">
                                <h4>Data-Analyst & UI/UX Designer</h4>
                                <h5>2019 - Present</h5>
                                <p><em>Experion, New York, NY </em></p>
                                <ul>
                                    <li>Lead in the design, development, and implementation of the graphic, layout, and
                                        production communication materials
                                    </li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all
                                        aspects of the project.
                                    </li>
                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and
                                        accuracy of the design
                                    </li>
                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 -
                                        $25,000
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="skills" id="skills">
                <div className="container">
                    <h4 className="section-title">Skills</h4>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                   <div className="skills-content">
                       <Row>
                           <Col md={3}>
                               <CircleProgress percentage={70} strokeWidth={5} secondaryColor="#f0f0f0" width="150" primaryColor={["#a6defd", "#2c80c7"]}  /><span><em>Power bi</em></span>
                           </Col>
                           <Col md={3}>
                               <CircleProgress percentage={70} strokeWidth={5} secondaryColor="#f0f0f0" width="150" primaryColor={["#f1d69c", "#ead856"]}  /><span><em>Excel</em></span>
                           </Col>
                           <Col md={3}>
                               <CircleProgress percentage={70} strokeWidth={5} secondaryColor="#f0f0f0" width="150" primaryColor={["#ee8a99", "#f38c9c"]}  /><span><em>SQL</em></span>
                           </Col>
                           <Col md={3}>
                               <CircleProgress percentage={70} strokeWidth={5} secondaryColor="#f0f0f0" width="150" primaryColor={["#9df1da", "#65d2b0"]}  /><span><em>Python</em></span>
                           </Col>
                       </Row>
                       </div>
                </div>
            </section>
        </div>
    );
}

export default Resume;