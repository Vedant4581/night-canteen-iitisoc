import React, {useEffect} from "react";
import "./aboutPage.css"

const AboutPage=({setNavbar})=>{
    useEffect(()=>{
        setNavbar();
      },[])
    return(
        <div className="about-page-container">
        <h1>About Us</h1>
        <p>We have created a functional and responsive website for IIT Indore’s night canteen that has a user-friendly interface and provides an intuitive and seamless experience for customers to browse and order food from the night canteen, while also offering administrative capabilities to manage orders, menu items, and user data.</p>
        </div>
    )
}
export default AboutPage;
