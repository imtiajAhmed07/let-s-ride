import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.svg'

const Header = () => {
    const destinationId = useParams()
    return (
        <div classNameName="headerContainer">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid navContainer d-flex pr-5 pl-5">
                    <Link to='/' className="navbar-brand"><h1 className="logo"><img style={{width:"40px"}} src={logo} alt=""/> Let's Ride</h1></Link>
                    <div className="float-end">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-link mr-5" style={{ color: "black" }} aria-current="page" >Home</Link>
                                <Link to="/destination/find" className="nav-link mr-5" style={{color: "black"}} >Destination</Link>
                                <Link className="nav-link mr-5" style={{ color: "black" }} >Blog</Link>
                                <Link className="nav-link mr-5" style={{ color: "black" }} >Contact</Link>
                            </div>
                           <Link to="/login"><button className="loginBtn">Log in</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;