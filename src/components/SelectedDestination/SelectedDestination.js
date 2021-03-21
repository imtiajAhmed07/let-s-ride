import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import './SelectedDestination.css'

const SelectedDestination = () => {
    
    const { destinationId } = useParams();
    const [vehicle, setVehicle] = useState([])

    useEffect(()=>{
        fetch("https://api.mocki.io/v1/a58662f8")
            .then(res => res.json())
            .then(data => setVehicle(data))
    }, [])

    const selectedVehicle = vehicle.find(pd => pd.id == destinationId)

    return (
        <div className="selectedDestinationContainer mt-4">
            <div className="selectedDestinationBox" style={{textAlign:"center"}}>
                <img style={{ width: "150px" }} className="mt-2 mb-3" src={selectedVehicle?.image} alt="" />
                <h6>Title:{selectedVehicle?.title}</h6>
                <h6>Rent:{selectedVehicle?.rent}</h6>
            </div>
        </div>
    );
};

export default SelectedDestination;