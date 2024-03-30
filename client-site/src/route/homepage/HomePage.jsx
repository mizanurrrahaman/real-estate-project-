import React from 'react'
import './homepage.scss'
import SerchBar from '../serchbar/SerchBar'
const HomePage = () => {
  return (
    <div className='homePage'>
       <div className='textcontainer'>
         <div className='wrapper'>
            <h1 className='title'> Find Real Estate & Get Your Dream place Find Real Estate & Get You Drem Place</h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo suscipit culpa non dicta ut atque accusamus possimus voluptatem velit, voluptas autem repudiandae nihil a eaque, beatae hic, dolores illum. Placeat?</p>
            <SerchBar/>
            <div className='boxes'>
              <div className='box'>
                <h1>16+</h1>
                <h2> Years of Experience</h2>
              </div>
               <div>
                <h1>200</h1>
                <h2>Award Gained</h2>
               </div>
                <div>
                    <h1>2000+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
         </div>
       </div>
        <div className='imgcontainer'>
          <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage