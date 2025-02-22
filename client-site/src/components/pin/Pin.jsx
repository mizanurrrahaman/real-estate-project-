import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'


const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude, 52.4797]}>
    <Popup>
       <div className='popupContainer'>
         <img src={item.img} alt="" />
          <div className='textContainer'>
             <Link to={`/${item.id}`}>{item.title} </Link>
             <span className='bed'>{item.bedroom}bedroom </span>
             <b>$ {item.price}</b>
          </div>
       </div>
    </Popup>
  </Marker>
  )
}

export default Pin


{/*
 <div className='popupContainer'>
        <img src={item.img} alt="" />
         <div className='textContainer'>
            <Link to={`/${item.id}`}>{item.title} </Link>
             <span className='bed'>{item.bedroom}bedroom </span>
              <b>${item.price}</b>
          </div>
       </div>
*/}