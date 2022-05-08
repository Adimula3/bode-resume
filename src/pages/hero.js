import React from 'react';
import {Link} from "react-router-dom";
import Header from "../component/header";
import About from "./about";
import Resume from "./resume";
import Contact from "./contact";
import Footer from "../component/footer";
import Services from "./services";
import TypeAnimation from 'react-type-animation';

function Hero() {
    return (
        <>
            <main id="page-wrap">
            <section className="d-flex flex-column justify-content-center" id="hero">
                <div className="container">
                    <h2>Olabode Olaoluwa</h2>
                    <p>I'm a
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                ' Data-Analyst',
                                3000,
                                ' Designer',
                                3000,
                                ' Freelancer.',
                                3000
                            ]}
                            wrapper="span"
                            repeat={3}
                        />
                    </p>
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
                <Services />
                <Contact />
                <Footer />
            </div>
            </main>

        </>


    );
}

export default Hero;