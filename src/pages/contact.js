import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Contact() {
    return (
        <div>
            <section className="contact" id="contact">
                <div className="container">
                        <h4 className="section-title">Contact</h4>

                    <Row>
                        <Col lg={4}>
                            <div className="info">
                                <div className="address">
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                                <div className="info">
                                <div className="email">
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>
                                </div>
                                    <div className="info">
                                <div className="phone">
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
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
            <section className="footer">
                <div className="container">
                    <h3>Olabode Olaloluwa</h3>
                    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                    <div className="socials">
                        <Link to="#" className="socials-link"><i className='bx bxl-twitter'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-facebook'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-linkedin'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-meta'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-github'></i></Link>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default Contact;