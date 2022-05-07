import React from 'react';
import "../styles/style.css";
import {Nav, NavLink} from "react-bootstrap";


function Header() {


    return (
        <div>

            <header id="header" className="d-flex flex-column justify-content-center">

                    <Nav className="flex-column nav-menu">
                            <NavLink href="/#hero" className="item"><i className='bx bx-home'></i><span className="text">Home</span></NavLink>
                            <NavLink href="/#about" className="item"><i className='bx bx-user'></i><span className="text">About</span></NavLink>
                            <NavLink href="/#resume" className="item"><i className='bx bx-file-blank'></i><span className="text">Resume</span></NavLink>
                            <NavLink href="#" className="item"><i className='bx bx-book-content'></i><span className="text">Portfolio</span></NavLink>
                            <NavLink href="/#services" className="item"><i className='bx bx-server'></i><span className="text">Services</span></NavLink>
                            <NavLink href="/#contact" className="item"><i className='bx bx-envelope'></i><span className="text">Contact</span></NavLink>
                    </Nav>
            </header>

        </div>
    );
}

export default Header;