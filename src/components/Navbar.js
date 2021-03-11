
import React, { useState } from "react";
import {Link} from "gatsby"
import logo from '../../static/img/logo.png'

const NavBar = () => {

    const [isActive, toggleNavbar] = useState(false);
    
    
    const toggleTrueFalse = () => toggleNavbar(!isActive);
    
   
    return (
        <div style={{position: "absolute", zIndex: "1000", width:"100%"}} className={` navagation-wrap  ${isActive ? 'mobile-wrap' : ''}`}>
            <div id="main-nav-wrap">
                <div className="logo-wrap">
                    <a href="/">
                       <img src={logo} alt="logo"/>

                        
                         </a>
                </div>
                <div >
                    <div className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                        <ul className="nav">

                            <li><Link  className="bottom-link" to="/">HOME
                            <span className="top-link">HOME</span>
                            </Link>
                            </li>
                            <li><Link to="/about" className="bottom-link">ABOUT
                            <span className="top-link">ABOUT</span>
                            </Link></li>
                            <li><Link to="/projects" className="bottom-link">PROJECTS
                            <span className="top-link">PROJECTS</span>
                            </Link></li>
                          
                         
                            <li><Link to="/contact" className="bottom-link">CONTACT
                            <span className="top-link">CONTACT</span>
                            </Link></li>
                        </ul>
                    </div>

                </div>



                <div id="hamburger-wrap">
                    <div className={` burger-open ${isActive ? 'burger-close' : ''}`}

                        data-target='nav-menu'
                        
                        onClick={toggleTrueFalse}
                        aria-hidden={true}>
                        <span className="line line01"></span>
                        <span className="line line02"></span>
                        <span className="line line03"></span>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default NavBar;