import React from "react";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import "./singlepage.scss";
import { singlePostData, userData } from "../../components/lib/dummydata";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";
import { MdOutlineSaveAlt } from "react-icons/md";
import { IoHammerSharp } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { MdPets } from "react-icons/md";
import { FaPersonBreastfeeding } from "react-icons/fa6";



const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title} </h1>
                <div className="address">
                  <FaLocationDot />
                  <span> {singlePostData.address}</span>
                </div>
                <div className="price">${singlePostData.price} </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name} </span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title"> General</p>
          <div className="listVertical">
            <div className="feature">
                <IoHammerSharp />
                <div className="featureText">
                   <span> Utilities</span>
                   <p> Renter is responsible</p>
                </div>
            </div>
            <div className="feature">
                <MdOutlinePets />
                <div className="featureText">
                   <span> Pet Policy</span>
                   <p> Pets Allowed</p>
                </div>
            </div>
            <div className="feature">
               <GiTakeMyMoney />
                <div className="featureText">
                   <span> Property Fee</span>
                   <p> Must have 3x the rent in total household income</p>
                </div>
            </div>
          </div>
          <p className="title"> Sizes</p>
          <div className="size">
              <SlSizeFullscreen />
              <span> 80 sqft</span>
          </div>
          <div className="size">
               <IoIosBed />
              <span> 2 bads</span>
          </div>
          <div className="size">
              <FaBath />
              <span> 1 bathroom</span>
          </div>
          <p className="title">Nearable Place </p>
          <div className="listHorizontal">
            <div className="feature">
                <FaSchool />
              <div className="featureText">
                <span> School</span>
                <p> 250m away</p>
               </div>  
            </div>   
            <div className="feature">
                <MdPets />
              <div className="featureText">
                <span> Bus Stop</span>
                <p> 100m away</p>
               </div>  
            </div> 
            <div className="feature">
            <FaPersonBreastfeeding />
              <div className="featureText">
                <span> Restanrant</span>
                <p> 200m away</p>
               </div>  
            </div> 
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <IoMdChatboxes />
              Send a Message
            </button>
            <button>
              <MdOutlineSaveAlt />
              Save Tha Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
