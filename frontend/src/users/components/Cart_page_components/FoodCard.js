import React from "react";
import "./FoodCard.css";

export default function FoodCard({cartItem, handleChange, handleRemove}){

    
    return (
        <div className="food-card-container">
            <div className="circle"></div>
            <div >
                <p>{cartItem.name}</p>
                <p>{cartItem.price}</p>
            </div>
            <div className="number-button-container">
            <button onClick={()=>handleChange(cartItem, -1)} >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="15" height="15" rx="2" fill="white"/>
                    <path d="M11 7.5L4 7.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
            
            <p>{cartItem.amount}</p>
            <button onClick={()=>handleChange(cartItem, +1)} >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="15" height="15" rx="2" fill="white"/>
                    <path d="M7.5 4V11" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M11 7.5L4 7.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
            </div>
            <div className="remove-button-container">
                <button onClick={()=>handleRemove(cartItem.id)} className="remove-button" >
                <svg width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="12" height="12" rx="3" fill="#FFA9A9"/>
                    <path d="M3 3L8.65685 8.65685" stroke="#FFF2F2" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 8.65686L8.65685 3.00001" stroke="#FFF2F2" strokeWidth="2" strokeLinecap="round"/>
                    </svg>

                </button>
            </div>
        </div>
    );
}

// import React,{ useState } from "react";
// import "./FoodCard.css";

// export default function FoodCard(props){
//     const[ quantity , setQuantity]=useState("1");
//     const increasequantity = () =>{
//         let a=Number.parseInt(quantity);
//         a++;
//         setQuantity(`${a}`);
//         }
//         const decreasequantity = () =>{
//             let a=Number.parseInt(quantity);
//             a--;
//             if(a>=0){
//             setQuantity(`${a}`);}
//             }
            
//     const change_quantity_on_change = ()=>{

//     }
//     return (
//         <div className="food-card-container">
//             <div className="circle"></div>
//             <div className="text-container">
//                 <p>{props.name}</p>
//                 <p>{props.price}</p>
//             </div>
//             <div className="number-button-container">
//                 <button onClick={decreasequantity} onChange={change_quantity_on_change}>
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="red" xmlns="http://www.w3.org/2000/svg">
//                         <rect width="15" height="15" rx="2" fill="white"/>
//                         <path d="M11 7.5L4 7.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
//                     </svg>
//                 </button>
//                 <p>{quantity}</p>
//                 <button  onClick={increasequantity} onChange={change_quantity_on_change}>
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="red" xmlns="http://www.w3.org/2000/svg">
//                         <rect width="15" height="15" rx="2" fill="white"/>
//                         <path d="M7.5 4V11" stroke="black" strokeWidth="2" strokeLinecap="round"/>
//                         <path d="M11 7.5L4 7.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// }