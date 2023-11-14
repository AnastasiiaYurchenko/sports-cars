import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './vehicleDetails.css';

const VehicleDetails = () => {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const index = parseInt(id) - 1;

    const fetchData = () => {
    fetch('http://localhost:3000/sports-cars/api/vehiclesData.json')
      .then(res => res.json())
      .then(data => setCar(data[index]))
    .catch(e => console.log(e.message))
  }

    useEffect(() => {
    fetchData()
  }, [])

  return (
    <div id='vehicle-details' className='page vehicle-details'>
      <img src={car.pageBgImg} alt={car.make} className='img-fluid page-img' />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 p-0 details-left
          ">
            <img src={car.bannerImg} alt={car.make} className="img-fluid details-img-left" />
            <div className="price">
              ${car.price && car.price.toLocaleString('en-US')}
              <span>Drive Away</span>
            </div>
            <a href="" className="contact-seller"><i className="bi bi-telephone-fill"></i>Contact Dealer</a>
          </div>
          <div className="col-lg-4 p-0 details-middle
          ">
            <div className="content">
              <h2>Vehicle Details</h2>
              <div className="details-box">
                <i className="bi bi-emoji-smile"></i>
                <span>Lorem ipsum dolor sit</span>
                <p><strong>Lorem ipsum</strong>Lorem ipsum dolor sit amet consectetur</p>
              </div>

              <div className="details-box">
                <i className="bi bi-emoji-smile"></i>
                <span>Lorem ipsum dolor sit</span>
                <p><strong>Lorem ipsum</strong>Lorem ipsum dolor sit amet consectetur</p>
              </div>

              <div className="details-box">
                <i className="bi bi-emoji-smile"></i>
                <span>Lorem ipsum dolor sit</span>
                <p><strong>Lorem ipsum</strong>Lorem ipsum dolor sit amet consectetur</p>
              </div>

              <div className="details-box">
                <i className="bi bi-emoji-smile"></i>
                <span>Lorem ipsum dolor sit</span>
                <p><strong>Lorem ipsum</strong>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
            <img src={car.leftImg} alt={car.make} className='img-fluid details-img-middle' />
          </div>
          <div className="col-lg-4 p-0 details-right
          "></div>
        </div>
      </div>
     
    </div>
  )
}

export default VehicleDetails