import React from 'react';
import {Col, Row} from "react-bootstrap";

function Resume() {
    return (
        <div>
            <section className="resume" id="resume">
                <div className="container">
                    <div className="section-title">
                        <h2>Resume</h2>
                    </div>
                    <Row>
                        <Col lg={6}>
                            <h5 className="resume-title">Summary</h5>
                            <div className="resume-item">
                                <h4>Olabode Olaoluwa</h4>
                                <p><em>A goal-oriented and visionary with over 2 years of experience in Information Technology.I wish to be in a dynamic professional environment with a growing organization and utilize my creativity and innovative thinking for benefit of the organization, my core strengths are Customer engagement, Active Collaboration, Planning, and Product Analysis.</em></p>
                                <ul>
                                    <li>MTN Plaza, Awolowo Rd, Ikoyi 101233,Lagos</li>
                                    <li>+234 810 432 2095</li>
                                    <li>Olakitan0808@gmail.com</li>
                                </ul>
                            </div>
                            <h5 className="resume-title">Education</h5>
                            <div className="resume-item">
                                <h4>Bachelor of Computer science</h4>
                                <h5>2016-2020</h5>
                                <p><em>Kwara state univeristy</em></p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h4 className="resume-title">Professional Experience</h4>
                            <div className="resume-item">
                                <h4>Computer Warehouse Group (CWG) IT Support Staff</h4>
                                <h5>2018 - 2019</h5>
                                <h4>Data-Analyst & End user support engineer</h4>
                                <h5>2021 - Present</h5>
                                <p><em>MTN Nigeria (End User Support intern)</em></p>
                                <ul>
                                    <li>Assist the team in technical presentation for training</li>
                                    <li>Identify and tailor technical solutions to suit user needs</li>
                                    <li>Analyze, develop and implement solutions for optimum data</li>
                                    <li>Project manage the technical solution delivery to clients (requirements gathering, design/configuration, Proof of concept, and implementation)
                                    </li>
                                    <li>Monitor and control products implemented</li>
                                    <li>Disseminate technical information to the entire team members</li>
                                    <li>Foster active collaboration and relationships with employees across all levels and divisions.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="skills" id="skills">
                <div className="container">
                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                   <div className="skills-content">
                       <Row>
                           <Col md={3}>
                               <div className="progress blue">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                                   <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                                   <div className="progress-value">90%</div>
                               </div>
                           </Col>
                           <Col md={3}>
                               <div className="progress yellow">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                                   <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                                   <div className="progress-value">75%</div>
                               </div>
                           </Col>
                           <Col md={3}>
                               <div className="progress pink">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                                   <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                                   <div className="progress-value">60%</div>
                               </div>
                           </Col>
                           <Col md={3}>
                               <div className="progress green">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                                   <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                                   <div className="progress-value">60%</div>
                               </div>
                           </Col>
                       </Row>
                       </div>
                </div>
            </section>
        </div>
    );
}

export default Resume;