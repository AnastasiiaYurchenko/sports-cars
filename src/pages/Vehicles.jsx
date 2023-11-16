import React, { useContext } from 'react';
import './vehicles.css';

import bgImg from '../images/mclaren-1.jpg';
import { AppContext } from 'App';
import PageTitle from 'components/PageTitle';

const Vehicles = () => {
  const { data: cars, setData: setCars } = useContext(AppContext);

  return (
    <div id='vehicles' className='page vehicles' >
      <img src={bgImg} alt="" className='img-fluid page-img' />
      <div className="container">
        <PageTitle title="Vehicles Catalogue" subtitle="Here are our new arrivals"/>
      </div>

    </div>
  )
}

export default Vehicles