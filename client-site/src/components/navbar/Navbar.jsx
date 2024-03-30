import React, { useState } from "react";
import "./navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img
            src="https://thumbs.dreamstime.com/b/louis-vuitton-logo-16032301.jpg"
            alt="not found"
          />{" "}
        </a>
       
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/"> Contact</a>
        <a href="/"> Agents</a>
      </div>
      <div className="right">
         { user ? (
          <div className="user">
             <img   src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1395991368.1711584000&semt=sph" alt="" />
             <span> John Doe</span>
             <Link to="/profile" className="profile"> 
               <div className="notification">3</div>
               <span> Profile</span>
             </Link>
          </div>
         ):
         (
          <>
            <a href="/">Sing in</a>
            <a href="/" className="register">
               Sing up
             </a>
          </>
         )}
        <div className="menuIcon">
              <RxHamburgerMenu onClick={()=> setOpen((prev) => !prev)} />
        </div>
         <div className={open ? "menu active" : "menu"}>
           <a href="/">Home</a>
           <a href="/">About</a>
           <a href="/"> Contact</a>
           <a href="/"> Agents</a>
           <a href="/">Sing in</a>
          <a href="/">Sing up</a>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
