import React from 'react';
import './vehicleCard.css';
import { Link } from 'react-router-dom';
import VehicleRating from './VehicleRating';

const VehicleCard = ({car}) => {
  return (
    <div className='col-lg-4 col-md-6'>
      <div className="vehicle">
        <div className="vehicle-img">
          <img src={car.bannerImg} alt={car.make} className="img-fluid" />
        </div>
        <h3>
          <Link to={`/vehicles/${car._id}`} >{car.title}</Link>
        </h3>
        <VehicleRating rating={car.rating} />
      </div>
    </div>
  )
}

export default VehicleCard