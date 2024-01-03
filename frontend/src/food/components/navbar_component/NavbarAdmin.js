import React, { useState,useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
// import 
import navItemsData from './NavAdminItemsData';
import { Icon } from '@iconify/react';
import Logo from '../../../Images/Logo.png'

export default function NavbarAdmin({size}) {
  const [isClicked,setClicked]=useState(false);

  const removeButton=()=>{
    const elements = document.getElementsByClassName("nav-bar-links");
    [...elements].forEach(element => {element.classList.remove("nav-button")});
  }
  const handleClick=(element)=>{
    if(isClicked){
      handleMenu()
    }
    removeButton();
    element.target.classList.add("nav-button");
  }
  
  const handleMenu=()=>{
    setTimeout( ()=>{setClicked(!isClicked);
    document.getElementsByClassName("navitems")[0].classList.toggle("active");}
      ,300);
    
  }

  let location = useLocation();
  location=location.pathname;
  location=location.slice(7);

    useEffect(()=>{
    
      let a=Array.from(document.getElementsByClassName("nav-bar-links"));
      for(let i=0;i<a.length;i++){
        let b=a[i].getAttribute("href");
        let c=b.slice(7);
        a[i].classList.remove("nav-button");
        if(c===location){
          let d=document.getElementById(i+1);
          d.classList.add("nav-button");
          }
        }
    },[location])

  return (
    <div className='main-navbar-div sticky'>
    <nav className="navbar-container">
    <Link to="/"  className='logo-name' onClick={()=>{removeButton(); document.getElementsByClassName("nav-bar-links")[0].classList.add("nav-button")}} >
        <img src={Logo} alt="logo" className="logo" />
        <p className="name">IITI NIGHT CANTEEN</p>
    </Link>
       <ul className="navitems">
          {navItemsData.map((data)=><li key={data.id} ><Link className="nav-bar-links" id={data.id} onClick={handleClick} to={data.url} >{data.title}</Link></li>)}
        </ul>
        <div className="icons-container">
          <Link to="/" className='icons' ><Icon icon="mdi:user" width={24} height={24}  /></Link>
          <Link to="/user/cart" className='icons' >
            <Icon icon="mdi:cart" width={24} height={24}  />
            {size>0&&<div className='circle-cart'>{size}</div>}
            </Link>
          <Icon onClick={handleMenu} className='hamburger-menu' icon={isClicked ?"maki:cross":"ion:menu"} width={24} height={24} />
        </div>
    </nav>
    </div>
  )
} 
        
// let location = useLocation();
//   location=location.pathname;
//   location=location.slice(6);

//   useEffect(()=>{
    
//     let a=Array.from(document.getElementsByClassName("nav-bar-links"));
//     for(let i=0;i<a.length;i++){
//       let b=a[i].getAttribute("href");
//       let c=b.slice(6);
//       a[i].classList.remove("nav-button");
//       if(c===location){
//         let d=document.getElementById(i+1);
//         console.log(d);
//         d.classList.add("nav-button");
//       }
//     }
//   },[location])