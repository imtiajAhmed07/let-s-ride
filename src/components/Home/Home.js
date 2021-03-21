import React, { useEffect, useState } from 'react';
import ChildHome from '../ChildHome/ChildHome';
import './Home.css'

const Home = () => {
    
    const [vehicle, setVehicle] = useState([])
    
    useEffect(()=>{
        fetch('https://api.mocki.io/v1/a58662f8')
            .then(res => res.json())
            .then(data => setVehicle(data))
    }, [])
    
    return (
        <div className="homeContainer">
            <div className="textContainer">
                {
                    vehicle.map(vehicle => <ChildHome vehicle={vehicle}></ChildHome>)
                }
            </div>
        </div>
    );
};

export default Home;