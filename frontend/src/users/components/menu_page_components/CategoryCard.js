import React from "react";
import './CategoryCard.css';

function scrollTo (event){
    let element = document.getElementById(event.target.innerHTML)
    element.scrollIntoView({behavior:"smooth"});
}

export default function CategoryCard({category}){
    return (
        <button onClick={scrollTo} className="category-card">{category.name}</button>       
    );
}