// import React, { useEffect, useState,useContext } from "react";
// import FoodCard from "../../components/Cart_page_components/FoodCard";
// import './Cart.css'
// import { AuthContext } from "../../../context/auth-context";
// import {Icon} from "@iconify/react"


// export default function Cart({size, cart,setCart, handleChange,goForOrder,setNavbar}){

//     const [price,setPrice]=useState(0);
//     const data=useContext(AuthContext);
//     const HandleCheckOut=async()=>{
//         let userEmail=data.email
//         let userId=data.userid
//         console.log(data.email)
//         console.log(userId)
//         console.log(cart)
//         let response=await fetch("/canteen/orders",{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json',
//                 'Authorization':`BEARER ${data.token}`
//             },
//             body:JSON.stringify({
//                 order_data:cart,
//                 email:userEmail,
//                 userid:userId,
//                 order_date:new Date(),
//                 price:price
//             })


//         })
//     }
//     const handlePrice = ()=> {
//         let ans=0;
//         cart.map((cartItem)=>(ans+=cartItem.amount*cartItem.price))
//         setPrice(ans);
//     }
//     useEffect(()=>{
//         handlePrice();
//         setNavbar();
//     })
//     const handleRemove = (id) =>{
//         const arr = cart.filter((item)=>item.id !== id);
//         setCart(arr);
//     }
//     const [file,setFile]=useState(null)
//     const handleSubmit=async(e)=>{
//         let deletepost=window.confirm("DO YOU REALLY WANT TO PLACE THE ORDER?");
//         if(deletepost){
//             e.preventDefault();
//             console.log(file)
//             const formData=new FormData;
//             formData.append("file",file)
//             const response=await fetch('/upload',{
//                 method:"POST",
//                 body:formData,
//                 encType:"multipart/form-data",
//                 headers:{
//                     'Authorization':`BEARER ${data.token}`
//                 }
               
//         }).then((res) =>{
//             console.log(res)
//             if(res.ok){
//                 HandleCheckOut();
//             alert("YOUR ORDER HAS BEEN SENT")
//             }else{
//                 alert("PLEASE UPLOAD THE SCREENSHOT OF PAYMENT")
//             }
//         })

//         // setFile("");
//     }
//     else{
//         alert("YOUR ORDER HAS NOT BEEN SENT")
//     }
//     }
// return (
//         <div className="cart">
//             <div className="container-my-cart">
//                 <Icon icon="mdi:cart" />
//                 <p>My Cart</p>
//             </div>
//             <p>Items Selected <span>({size})</span></p>
//             <div className="cart-item-container">
//                 {cart.map((cartItem)=><FoodCard key={cartItem.id} cartItem={cartItem} handleChange={handleChange} handleRemove={handleRemove}/>)}
//             </div> 
//             <form onSubmit={handleSubmit}>
//             <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} name="profileImage" />
//                 <p>Total Price <br /><span>{price}</span>/-</p>
//                 <button className="order-button" type="submit">ORDER</button>
//             <div className="order-button-container">

//             </div>
//             </form>
//         </div>
    
// );
// }

import React, { useEffect, useState,useContext } from "react";
import FoodCard from "../../components/Cart_page_components/FoodCard";
import './Cart.css'
import { AuthContext } from "../../../context/auth-context";
import {Icon} from "@iconify/react"


export default function Cart({size, cart,setCart, handleChange,goForOrder,setNavbar}){

    const [price,setPrice]=useState(0);
    const data=useContext(AuthContext);
    const HandleCheckOut=async()=>{
        let userEmail=data.email
        let userId=data.userid
        let username=data.name
        console.log(data.name)
        console.log(data.email)
        console.log(userId)
        console.log(cart)
        let response=await fetch("/canteen/orders",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`BEARER ${data.token}`
            },
            body:JSON.stringify({
                order_data:cart,
                email:userEmail,
                username:username,
                userid:userId,
                order_date:new Date(),
                price:price
            })


        })
    }
    const handlePrice = ()=> {
        let ans=0;
        cart.map((cartItem)=>(ans+=cartItem.amount*cartItem.price))
        setPrice(ans);
    }
    useEffect(()=>{
        handlePrice();
        setNavbar()
    })
    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }
    const [file,setFile]=useState(null)
    const handleSubmit=async(e)=>{
        let deletepost=window.confirm("DO YOU REALLY WANT TO PLACE THE ORDER?");
        if(deletepost){
            e.preventDefault();
            console.log(file)
            const formData=new FormData;
            formData.append("file",file)
            const response=await fetch('/upload',{
                method:"POST",
                body:formData,
                encType:"multipart/form-data",
                headers:{
                    'Authorization':`BEARER ${data.token}`
                }
               
        }).then((res) =>{
            console.log(res)
            if(res.ok){
                HandleCheckOut();
            alert("YOUR ORDER HAS BEEN SENT")
            }else{
                alert("PLEASE UPLOAD THE SCREENSHOT OF PAYMENT")
            }
        })
        
        // setFile("");
    }
    else{
        alert("YOUR ORDER HAS NOT BEEN SENT")
    }
    }
return (
        <div className="cart">
            <div className="container-my-cart">
                <Icon icon="mdi:cart" />
                <p>My Cart</p>
            </div>
            <p>Items Selected <span>({size})</span></p>
            <div className="cart-item-container">
                {cart.map((cartItem)=><FoodCard key={cartItem.id} cartItem={cartItem} handleChange={handleChange} handleRemove={handleRemove}/>)}
            </div> 
            <form onSubmit={handleSubmit}>
            <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} name="profileImage" />
                <p>Total Price <br /><span>{price}</span>/-</p>
                <button className="order-button" type="submit" >ORDER</button>
            <div className="order-button-container">

            </div>
            </form>
        </div>
    
);
}

