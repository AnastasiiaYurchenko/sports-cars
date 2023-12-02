import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './vehicleDetails.css';
import IconBox from 'components/IconBox';
import vehicleData from '../../src/vehiclesData.json';

const VehicleDetails = () => {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const index = parseInt(id) - 1;

  // const fetchData = () => {
  //   fetch('http://localhost:3000/sports-cars/api/vehiclesData.json')
  //     .then(res => res.json())
  //     .then(data => setCar(data[index]))
  //     .catch(e => console.log(e.message))
  // };

  //   useEffect(() => {
  //   fetchData()
  // }, [])

  // useEffect(() => {
  // const fetchData = () => {
  //   fetch('http://localhost:3000/sports-cars/api/vehiclesData.json')
  //     .then(res => res.json())
  //     .then(data => setCar(data[index]))
  //     .catch(e => console.log(e.message));
  // };

  // fetchData();
  // }, [index]); 
  
  useEffect(() => {
   setCar(vehicleData[index]);
}, [index]);


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
            <a href="tel:+1234567890" className="contact-seller"><i className="bi bi-telephone-fill"></i>Contact Dealer</a>
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
          ">
            <img src={car.rightImg} alt={car.make} className='img-fluid details-img-right' />
            <div className="d-flex gap-2">
              <IconBox icon="bx bx-tachometer" title="Lorem, ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorum"/>
              <IconBox icon="bx bx-world" title="Lorem, ipsum" />
            </div>
            <div className="details-description">
              <h4>Description</h4>
              <p>{car.description}</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default VehicleDetails