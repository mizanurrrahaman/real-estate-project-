import React from 'react'
import './card.scss';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdBedroomParent } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { CiSaveUp2 } from "react-icons/ci";
import { IoChatboxEllipses } from "react-icons/io5";


const Card = ({item}) => {
  return (
    <div className='card'>
       <Link to={`/${item.id}`} className='imageContainer'>
          <img src={item.img} alt="not found" />
       </Link>
       <div className='textContainer'>
          <h2 className='title'> 
            <Link to={`${item.id}`}>{item.title} </Link>
          </h2>
          <p className='address'> 
             <CiLocationOn />
             <span>{item.address} </span>
          </p>
          <p className='price'>${item.price}</p>
           <div className='bottom'>
             <div className='features'>
              <div className='feature'>
                 <MdBedroomParent />
                  <span>{item.bedRooms}bedroom</span>
              </div>
              <div className='feature'>
                  <MdBathtub />
                  <span>{item.brthRooms}bathroom </span>
              </div>
             </div>
             <div className='icons'>
                <div className='icon'>
                   <CiSaveUp2 />
                </div>
                 <div className='icon'>
                    <IoChatboxEllipses />
                 </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Card