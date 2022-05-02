import React from 'react';
import {Link} from "react-router-dom";
import Header from "../component/header";
import About from "./about";
import Resume from "./resume";
import Contact from "./contact";
function Hero() {
    return (
        <>
            <section className="d-flex flex-column justify-content-center" id="hero">
                <div className="container">
                    <h2>Olabode Olaoluwa</h2>
                    <p>I'm a Data-Analyst<span className="typed" data-typed-item="Data-Analyst, Designer, Freelancer"></span></p>
                    <div className="socials">
                        <Link to="#" className="socials-link"><i className='bx bxl-twitter'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-facebook'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-linkedin'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-meta'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-github'></i></Link>
                    </div>
                </div>
            </section>

            <div className="main" id="main">
                <Header />
                <About />
                <Resume />
                <Contact />
            </div>


        </>


    );
}

export default Hero;