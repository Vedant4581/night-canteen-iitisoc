import React,{useState,useEffect} from "react";
import './CategoryType.css'
import Itemcard from "./Itemcard";
import menuItems from "../../Arrays/menuitems";


export default function CategoryType({category, handleClick}){
    const {name}=category;
    // const [menuItems,setMenuItems]=useState(null);

    function createItemCard(item){
        return (name===item.category)&&(<Itemcard key={item.id} item={item} handleClick={handleClick} />)
    }
    let menu;
    // useEffect(()=>{
    //     const fetchWorkouts=async()=>{
    //     const response=await fetch('/canteen/food',{
    //         method:"GET"
    //     })
    //     const json=await response.json();
    //     if(response.ok){
    //         setMenuItems(json);
    //     }
    //     }
    //     fetchWorkouts();
    //     console.log(menuItems)
    //     menu = Array.from(menuItems);
    // })
    
    // console.log(menuItems)
    return (
        <div>
            <h2 className="category-name" id={name}>{name}</h2>
            <hr />
            <div className="item-container">
        
                {menuItems && menuItems.map(createItemCard)}
            </div>
        </div>
    )
}