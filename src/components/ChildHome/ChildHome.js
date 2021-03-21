import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './ChildHome.css'

const ChildHome = (props) =>{
    
    const { image, title, id } = props.vehicle
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    return (
        <div className="childHomeContainer">
            <Link to={`/destination/${id}`}>
                <div className="childBox">
                    <img className="boxImage" src={image} alt="" />
                    <h6 style={{color: "black"}}>{title}</h6>
                </div>
            </Link>
        </div>
    );
};

export default ChildHome;