import React, { useContext, useEffect } from 'react';
import './vehicleCard.css';
import { Link } from 'react-router-dom';
import VehicleRating from './VehicleRating';
import { AppContext } from 'App';

const VehicleCard = ({ car }) => {
  const { library, setLibrary } = useContext(AppContext);

    // Завантаження даних з localStorage при монтуванні компонента
  useEffect(() => {
    const storedLibrary = JSON.parse(localStorage.getItem('library')) || [];
    setLibrary(storedLibrary);
  }, [setLibrary]);

  // Збереження даних в localStorage при зміні бібліотеки
  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
  }, [library]);

  const handleAddLibrary = car => {
    setLibrary([...library, car])
  }

  const handleRemoveFromLibrary = car => {
    setLibrary(library.filter(item => item._id !== car._id))
  }


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
        <p>{car.description.substring(0, 30)}...</p>
        <span className="price">
          ${car.price && car.price.toLocaleString('en-US')}
        </span>
        <div className="buttons">
          <Link className={`like ${library.includes(car) ? 'active' : undefined}`}
          onClick={library.includes(car) ? () => handleRemoveFromLibrary(car) : () => handleAddLibrary(car)}
          >
           <i className="bi bi-heart-fill"></i></Link>
          <Link to={`/vehicles/${car._id}`} className='details'>
          Learn more <i className="bi bi-plus-lg"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default VehicleCard