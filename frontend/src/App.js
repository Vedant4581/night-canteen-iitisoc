import './App.css';
import React, {useState,useEffect,useContext} from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Background from './users/components/background_components/background'
import Navbar from './users/components/navbar_component/Navbar'
import NavbarAdmin from './food/components/navbar_component/NavbarAdmin'
import LoginPage from './users/pages/login_page/loginPage'
import Home from './users/pages/home/Home'
import MenuPage from './users/pages/menu_page/menuPage'
import Cart from './users/pages/cart_page/Cart'
import AdminOrders from './food/pages/orders_page/AdminOrders'
import AdminMenu from './food/pages/menu_page/AdminMenu'
import { useAuth } from "./hooks/authhook";
import { AuthContext } from "./context/auth-context";
import SignupPage from './users/pages/signup_page/signupPage';
import UpdateForm from "./food/components/menu_component/Updateform"
import ItemForm from './food/components/menu_component/Itemform';
import FilePage from './users/pages/file_page/filePage';
import AboutPage from './users/pages/about_page/aboutPage';
import FAQPage from './users/pages/services_page/FAQPage';


export default function App() {
  const getLocalCartData = ()=>{
    let localCartData= localStorage.getItem("FoodCart");
    if(localCartData===null){
      return [];
    }
    else{
      return JSON.parse(localCartData);
    }
  }  
  const {token, Login, Logout, name,email,userid} = useAuth()
  const [chooseNavbar,setChooseNavbar]=useState(0)
  const [order,setOrder] = useState(null)
  const [cart, setCart]=useState(getLocalCartData);
  
  const goForOrder=()=>{
    let orderMenu=cart;
    let today = new Date();
    let dd=today.getDate();
    let mm=today.getUTCMonth();
    let yyyy=today.getFullYear();
    let date=dd+"/"+mm+"/"+yyyy;
    let time=new Date().toLocaleTimeString();
    let total=0;
    for(let i=0;i<orderMenu.length;i++){
      total=total+(orderMenu[i].price*orderMenu[i].amount);
    }
    setOrder({
      date:date,
      time:time,
      orderMenu:orderMenu,
      total:total
    })
  }

  const adminNavbar =()=>{
    if(chooseNavbar!==2){
    setChooseNavbar(2)
  }
  }

  const userNavbar =()=>{
    if(chooseNavbar!==1){
      setChooseNavbar(1)
    }
    
  }

  const noneNavbar =()=>{
    if(chooseNavbar!==0){
      setChooseNavbar(0)
    }
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
  useEffect(()=>{
    localStorage.setItem("FoodCart",JSON.stringify(cart));
  },[cart])
  let routes;
  // if(token){
    routes=(
      <>
       <Route exact path='/' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>} />
        <Route exact path='/login' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>} />
        <Route exact path='/profile' element={<FilePage />} />
        <Route exact path='/logout' element={<Logout />} />
        <Route exact path='/signup' element={<SignupPage />} />
        <Route exact path='/services/:id' element={<UpdateForm />} />
        {/* <Route exact path='/services' element={<UpdateForm />} /> */}
        <Route exact path='/about' element={<ItemForm />} />
        <Route exact path="/user/about" element={<AboutPage setNavbar={userNavbar} />} />
        <Route exact path='/user/faq' element={<FAQPage setNavbar={userNavbar} />} />
        <Route exact path="/user/home" element={<Home setNavbar={userNavbar}/>} />
        <Route exact path='/user/menu' element={<MenuPage handleClick={handleClick} cart={cart} setNavbar={userNavbar}/> } />
        <Route exact path='/user/cart' element={<Cart size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange} goForOrder={goForOrder} setNavbar={userNavbar}/>} />
        <Route exact path='/admin/order' element={<AdminOrders order={order} setNavbar={adminNavbar}/>} />
        <Route exact path='/admin/menu' element={<AdminMenu setNavbar={adminNavbar}/>}/>
      </>
    )
  // }else{
  //   routes=(
  //     <>
  //      <Route exact path='/' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>} />
  //       <Route exact path='/login' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>} />
  //       <Route exact path='/logout' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>}  />
  //       <Route exact path='/profile' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>} />
  //       <Route exact path='/signup' element={<SignupPage />} />
  //       <Route exact path='/services/:id' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>}  />
  //       {/* <Route exact path='/services' element={<UpdateForm />} /> */}
  //       <Route exact path='/about' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>} />
  //       <Route exact path="/user/about" element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>}  />
  //       <Route exact path='/user/services' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>}  />
  //       <Route exact path="/user/home" element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>}  />
  //       <Route exact path='/user/menu' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>}  />
  //       <Route exact path='/user/cart' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>} />
  //       <Route exact path='/admin/order' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>} />
  //       <Route exact path='/admin/updates' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>} />
  //       <Route exact path='/admin/menu' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} setNavbar={noneNavbar}/>}  />
  //     </>
  //   )
  // }
  return (
    <AuthContext.Provider value={{isLoggedin: !!token, token: token, name: name, login: Login, logout: Logout,email:email,userid:userid}}>
    <BrowserRouter>
    <Background />
      {(chooseNavbar===0) ? null:(chooseNavbar===1) ? <Navbar size={cart.length} />: (chooseNavbar===2) ? <NavbarAdmin />:null}
      <Routes>
       {routes}
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}