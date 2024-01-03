import React from "react";
import './Itemcard.css'



export default function Itemcard({item, handleClick}){
    const {name, price}=item;
    return (
        <div className="item-card">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95-IMZwCUaUFRaENKc7sinAX-YJG5sNPhMw&usqp=CAU"alt="item" />
            <div className="bottom-part" >
                <p className="food-name">{name}</p>
                <div className="price-tag">
                    <p className="price">₹{price}</p>
                    <button  onClick={()=>handleClick(item)}>
                        <svg  width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 8.5V25.5" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                            <path d="M25.5 17L8.5 17" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                

            </div>
        </div>
    );
}
