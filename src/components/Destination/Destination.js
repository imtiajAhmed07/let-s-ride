import React from 'react';
import './Destination.css'
import SelectedDestination from '../SelectedDestination/SelectedDestination';
import GoogleMap from '../GoogleMap/GoogleMap';



const Destination = () => {

    return (
        <div className="destinationContainer">
            <div className="destinationBox">
                <form className="destinationForm" action="">
                    <label>From</label>
                    <input type="text" />
                    <label>To</label>
                    <input type="text" />
                    <br/>
                    <input className="destinationSearchBtn" type="submit" value="Search" />
                </form>
                <SelectedDestination></SelectedDestination>
            </div>
            <div className="destinationMap">
                <GoogleMap></GoogleMap>
            </div>
        </div>
    );
};

export default Destination;