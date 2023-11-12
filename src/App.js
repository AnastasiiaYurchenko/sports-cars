//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
//Import Boxicons
import 'boxicons/css/boxicons.min.css';

import React, {useState, useEffect} from 'react';
import './App.css'
import Banner from 'pages/Banner';
import Header from 'components/Header';
import { Route, Routes } from 'react-router-dom';
import Vehicles from 'pages/Vehicles';
import VehicleDetails from 'pages/VehicleDetails';
import Library from 'pages/Library';
import Services from 'pages/Services';
import Contact from 'pages/Contact';

export const AppContext = React.createContext();

export const App = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3000/sports-cars/api/vehiclesData.json')
      .then(res => res.json())
      .then(data => setData(data))
    .catch(e => console.log(e.message))
  }

  useEffect(() => {
    fetchData()
   
  }, [])
  
   console.log(data)
  return (
    <>
      <AppContext.Provider value={{ data, setData }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Banner />} />
          <Route exact path="/vehicles" element={<Vehicles />} />
          <Route exact path="/vehicles/:id" element={<VehicleDetails />} />
          <Route exact path="/library" element={<Library />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        
      </AppContext.Provider>
          </>
  );
};
