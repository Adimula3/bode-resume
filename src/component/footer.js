import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <h3>Olabode Olaloluwa</h3>
                    <p></p>
                    <div className="socials">
                        <Link to="#" className="socials-link"><i className='bx bxl-twitter'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-facebook'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-linkedin'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-meta'></i></Link>
                        <Link to="#" className="socials-link"><i className='bx bxl-github'></i></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;