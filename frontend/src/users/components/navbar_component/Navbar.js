import React, { useState,useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { Icon } from '@iconify/react';
import userNavbar from '../../Arrays/userNavbar';
import { AuthContext } from '../../../context/auth-context';
import { useLocation } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

export default function Navbar({size}) {
  const [toggleMenu,setToggleMenu]=useState(false);
  const [isClicked,setClicked]=useState(false);
  const [imageSourceUrl, setImageSourceUrl] = useState(null);
  const [dropdown,setDropdown]=useState(false)
  const dat=useContext(AuthContext);
  let location = useLocation();
  location=location.pathname;
  location=location.slice(6);
 
  
  let cont;
  if(dat.name===null){
    cont="HELLO"
  }else{
    cont=`${((dat.name.length)<7)?dat.name:(dat.name.slice(0,5)+"...")}`
  }
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  // const typingSpeed = 100;
  const targetText = `Welcome to IITI Night Canteen,${cont}`; 
  useEffect(()=>{
    
    let a=Array.from(document.getElementsByClassName("nav-bar-links"));
    for(let i=0;i<a.length;i++){
      let b=a[i].getAttribute("href");
      let c=b.slice(6);
      a[i].classList.remove("nav-button");
      if(c===location){
        let d=document.getElementById(i+1);
        d.classList.add("nav-button");
      }
    }

    const url = '/upload/1689498209952-Logo (1).png'


    const fetchImage = async url => {
      const response = await fetch(url)
      const blob = await response.blob()
      return blob
    }
    
    const downloadImage = async url => {
      const imageBlob = await fetchImage(url)
      let imageBase64 = URL.createObjectURL(imageBlob)
      setImageSourceUrl(imageBase64)
    }

    downloadImage(url);
    if (currentIndex < targetText.length) {
      const timeout = setInterval(() => {
        setText(prevText => prevText + targetText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      },75);
      return () => clearTimeout(timeout);
    }

  },)

  const removeButton=()=>{
    const elements = document.getElementsByClassName("nav-bar-links");
    [...elements].forEach(element => {element.classList.remove("nav-button")});
  }
  const handleClick=(element)=>{
    removeButton();
    element.target.classList.add("nav-button");
  }
  
  const handleMenu=()=>{
    setTimeout( ()=>{setClicked(!isClicked);
    document.getElementsByClassName("navbar-container")[0].classList.toggle("active");
    document.getElementsByClassName("navitems")[0].classList.toggle("active");} 
    ,300);
  }
  var data=userNavbar;

// let cont;
//   if(dat.name===null){
//     cont="HELLO"
//   }else{
//     cont=`${((dat.name.length)<7)?dat.name:(dat.name.slice(0,5)+"...")}`
//   }

  return (
    // <div className="main">
    // <nav className="navbar">
  
    // <ul className="navitems">
    //       {data.map((item)=><li key={item.id} ><Link className="nav-bar-links" id={item.id} onClick={handleClick} to={item.url} >{item.title}</Link></li>)}
    // </ul>
      
    // </nav>
    // {/* <Link to="/"  className='logo-name' onClick={()=>{removeButton(); document.getElementsByClassName("nav-bar-links")[0].classList.add("nav-button")}} > */}
    //    {/* <div className="img-column">
    //    {imageSourceUrl && <img src={imageSourceUrl} alt="logo" className="logo" />}
    //    </div>  */}
    // {/* </Link> */}
    // <p className="writing-animation">{text}</p>
    // <nav className="navbar">
    // <div className="icons-container">
    //       <Icon icon="mdi:user" id='user' width={24} height={24}  onClick={()=>setDropdown(!dropdown)}/>
    //       {dropdown&&<ul className='drop-down-menu'>
    //         <li className='drop-down-item'><Link className='drop-down-links' to="/profile">Profile</Link></li>
    //         <li className='drop-down-item'><Link className='drop-down-links' to="/logout"> Logout</Link></li>
    //       </ul>}
    //       <Link to="/user/cart" className='icons' >
    //         <Icon icon="mdi:cart" width={24} height={24}  />
    //         {size>0&&<div className='circle-cart'>{size}</div>}
    //         </Link>
    //       <Icon onClick={handleMenu} className='hamburger-menu' icon={isClicked ?"maki:cross":"ion:menu"} width={24} height={24} />
    //       {cont}
    //     </div> 
    //     </nav>
    //   </div>
    <div className='main'>
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <h1>NIGHT CANTEEN</h1>
        </div>
        <ul className="app__navbar-links">
           {data.map((item)=><li key={item.id} ><Link className="nav-bar-links" id={item.id} onClick={handleClick} to={item.url} >{item.title}</Link></li>)}
        </ul>
        <div className="app__navbar-login">
       
          <Icon icon="mdi:user" className="profile"id='user' width={24} height={24}  onClick={()=>setDropdown(!dropdown)}/>
            {dropdown&&<ul className='drop-down-menu'>
              <li className='drop-down-item'><Link className='drop-down-links' to="/profile">Profile</Link></li>
              <li className='drop-down-item'><Link className='drop-down-links' to="/logout"> Logout</Link></li>
            </ul>}
           
          <div className='line' />
            <Link to="/user/cart" className='icons' >
              <Icon icon="mdi:cart" width={24} height={24}  />
                {size>0&&<div className='circle-cart'>{size}</div>}
            </Link>
        </div>
        {/* <Icon onClick={handleMenu} className='hamburger-menu' icon={isClicked ?"maki:cross":"ion:menu"} width={24} height={24} /> */}
        {/* <Icon onClick={handleMenu} className='hamburger-menu' icon={isClicked ?"maki:cross":"ion:menu"} width={24} height={24} /> */} 

        <div className="app__navbar-smallscreen">
        <GiHamburgerMenu style={{cursor:"pointer"}}color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
             {/* {data.map((item)=><li key={item.id} ><Link className="smallscreen-links" id={item.id} onClick={handleClick} to={item.url} >{item.title}</Link></li>)} */}
              <li><Link className="hamburger-links" to="/user/home" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link className="hamburger-links" to="/user/menu" onClick={() => setToggleMenu(false)}>Menu</Link></li>
              <li><Link className="hamburger-links" to="/user/about" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><Link className="hamburger-links" to="/user/faq" onClick={() => setToggleMenu(false)}>FAQ</Link></li>
              {/* <li><a href="/" onClick={() => setToggleMenu(false)}>Contact</a></li> */}
            </ul>
            <ul className='app__navbar-smallscreen-login'>
              <li><Link className="hamburger-links" to="/user/profile" onClick={() => setToggleMenu(false)}>Profile</Link></li>
              <li><Link className="hamburger-links" to="/user/cart" onClick={() => setToggleMenu(false)}>Cart</Link></li>
              <li><Link className="hamburger-links" to="/user/logout" onClick={() => setToggleMenu(false)}>Logout</Link></li>
            </ul>
          </div>
        )}
      </div> 

      </nav>
    </div>
      
  )
}