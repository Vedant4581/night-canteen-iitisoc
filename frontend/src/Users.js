import React, {useState} from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Cart from './foodItems/Components/Cart';
import MenuPage from './foodItems/Pages/menuPage';
import Navbar from './shared/components/Navbar';
import Background from "./users/components/background";
import Home from './users/pages/home/Home';

export default function Users() {
  const [cart, setCart]=useState([]);
  const [updates,setUpdates]=useState([])

  const giveUpdates =()=>{
    setUpdates(updates.concat([1]))
  }

  const dismissUpdates =()=>{
    setUpdates(updates.splice(0,updates.length));
  }

  const handleClick= (item)=>{
        let isPresent=false;
        cart.forEach((product)=>{
            if(item.id===product.id){
                isPresent =true;
            }
        })
        if(isPresent){
            return;
        }
        else {  
            setCart([...cart,item]);
        }
    }

  const handleChange =(item, d)=>{
      let ind = cart.findIndex((data)=>data.id===item.id);
      setCart((prevValue)=>{
          prevValue[ind].amount +=d;
          if (prevValue[ind].amount === 0) prevValue[ind].amount = 1;
          return [...prevValue ];
  })}

  return (
    // <BrowserRouter>
    <>
      <Background />
      <Navbar size={cart.length} />
      <Routes>
        <Route exact path="/user/about" element={<div></div>}/>
        <Route exact path='/user/services' element={<div></div>} />
        <Route exact path="/user/home" element={<Home />} />
        <Route exact path='/user/menu' element={<MenuPage handleClick={handleClick} cart={cart}/> } />
        <Route exact path='/user/cart' element={<Cart size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange} giveUpdates={giveUpdates} />} />
      </Routes> 
    </>
    // </BrowserRouter>
    
  );
}
