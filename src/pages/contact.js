import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

function Contact() {
    return (
        <div>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>
                    <Row>
                        <Col lg={4}>
                            <div className="info">
                                <div className="address">
                                    <i className='bx bx-location-plus'></i>
                                    <h4>Location:</h4>
                                    <p>MTN Plaza, Awolowo Rd, Ikoyi 101233,Lagos</p>
                                </div>
                            </div>
                                <div className="info">
                                <div className="email">
                                    <i className='bx bx-envelope'></i>
                                    <h4>Email:</h4>
                                    <p>Olakitan0808@gmail.com</p>
                                </div>
                                </div>
                                    <div className="info">
                                <div className="phone">
                                    <i className='bx bx-mobile-alt'></i>
                                    <h4>Call:</h4>
                                    <p>+234 810 432 2095</p>
                                </div>

                            </div>
                        </Col>
                        <Col lg={8}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Your Name"/>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <input className="form-control" type="email" placeholder="Your Email"/>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Subject"/>
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" className="form-control" cols="30" rows="5"  placeholder="Message"></textarea>
                                </div>
                                <div className="button-center">
                                    <Button variant="primary" type="submit">Submit</Button>
                                </div>

                            </Form>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
}

export default Contact;