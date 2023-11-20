import React, { useContext } from 'react'
import './library.css'
import bgImg from '../images/mclaren-1.jpg';
import PageTitle from 'components/PageTitle';
import { AppContext } from 'App';

const Library = () => {
  const {library: cars} = useContext(AppContext)
  return (
    <div id='library' className='page library'>
      <img src={bgImg} alt='' className="img-fluid page-img" />
      <div className="container">
        <PageTitle
          title='Vehicles Library' subtitle='Yere are your favourites' />
        <div className="row"></div>
      </div>
    </div>
  )
}

export default Library