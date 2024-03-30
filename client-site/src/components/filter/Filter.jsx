import React from 'react'
import "./filter.scss";
const Filter =()=> {
  return (
    <div className='filter'>
       <h1> Serch result for <b>London</b></h1>
       <div className='top'>
         <div className='item'>
           <label htmlFor="city"> Location</label>
           <input type="text" id='city' name='city' placeholder='city location' />
         </div>
       </div>
        <div className='botton'>
         <div className='item'>
           <label htmlFor="type"> Type</label>
            <select name="typy" id="type">
                <option value="">Any</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
            </select>
           <input type="text" id='city' name='city' placeholder='city location' />
         </div>
         <div className='item'>
           <label htmlFor="property"> Property</label>
            <select name="property" id="property">
               <option value="">Any</option>
               <option value="apartment">Apartment</option>
               <option value="house">House</option>
               <option value="cando">Cando</option>
               <option value="land">Land</option>
            </select>
        
         </div>
         <div className='item'>
           <label htmlFor="city"> Location</label>
           <input type="text" id='city' name='city' placeholder='city location' />
         </div>
         <div className='item'>
           <label htmlFor="maxPrice">Max Price </label>
           <input type="text" id='maxPrice' name='maxPrice' placeholder='any' />
         </div>
         <div className='item'>
           <label htmlFor="bedroom"> Bedroom</label>
           <input type="text" id='bedroom' name='bedroom' placeholder='any' />
         </div>
         <button> 
            <img src="/search.png" alt="" />
         </button>
        </div>
    </div>
  )
}

export default Filter