import React from 'react';
import img from "../Images/logo.png";
import main from "../Styles/MainStyle.module.css";
import "../Styles/style.css";
import "../JS/main.js";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={main.topbar} id="navbar_top">
                <div className='container' >
                    <div className='row'>
                        <div className='col-md-12 d-flex'>
                            <div className='col-md-2'>
                            <figure className="figure mb-0">
                                        <img src={img} className={main.hlogo} alt="logo" />
                                    </figure>
                            </div>
                            <div className='col-md-10'>
                            <nav className="navbar navbar-expand-lg f-right mt-3">
                                <div className="container-fluid">
                                   
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon "></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item different">
                                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item different">
                                                <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                                            </li>
                                            <li className="nav-item different">
                                                <NavLink className="nav-link" to="/services">Services</NavLink>
                                            </li>
                                            <li className="nav-item different">
                                                <NavLink className="nav-link" to="/offers">Offers</NavLink>
                                            </li>
                                            <li className="nav-item different">
                                                <NavLink className="nav-link" to="/bookservice">Book Service</NavLink>
                                            </li>
                                            <li className="nav-item different">
                                                <NavLink className="nav-link" to="/testimonial">Testimonial</NavLink>
                                            </li>
                                            <li className="nav-item different">
                                                <NavLink className="nav-link" to="/contactus" >Contact Us</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header