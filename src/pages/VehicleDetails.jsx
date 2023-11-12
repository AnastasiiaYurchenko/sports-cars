import React from 'react';
import { useParams } from 'react-router-dom';
import './vehicleDetails.css';

const VehicleDetails = () => {
  const { id } = useParams();

  return (
    <div>VehicleDetails - ID: {id}</div>
  )
}

export default VehicleDetails