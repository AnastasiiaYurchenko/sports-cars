import React, { useCallback, useEffect, useState } from 'react'
import './vehicleRating.css'

const VehicleRating = ({ rating }) => {
    const [stars, setStars] = useState([]);

    // const generateStars = () => {
    //     let stars = [];
    //     if (rating > 5 || rating < 1) {
    //         return
    //     }
    //     for (let i = 0; i < rating; i++) {
    //         stars.push(i)
    //     }
    //     return stars;
    // }

    // useEffect(() => {
    //     setStars(generateStars())
    // }, [])

    const generateStars = useCallback(() => {
    let stars = [];
    if (rating > 5 || rating < 1) {
        return;
    }
    for (let i = 0; i < rating; i++) {
        stars.push(i);
    }
    return stars;
}, [rating]);

useEffect(() => {
    setStars(generateStars());
}, [generateStars, rating]);


  return (
      <div className='stars'> { stars.map(star => (<i key={star} className="bi bi-star-fill"></i>))}</div>
  )
}

export default VehicleRating