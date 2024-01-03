import React,{useEffect} from "react";
import './menuPage.css'
import FoodItems from "../../components/menu_page_components/FoodItems";
import menuItems from "../../Arrays/menuitems";


export default function MenuPage({handleClick,setNavbar,cart}){
    function sentenceCase (str) {
        if ((str===null) || (str===''))
            return false;
        else
        str = str.toString();
         
        return str.replace(/\w\S*/g,
        function(txt){return txt.charAt(0).toUpperCase() +
            txt.substr(1).toLowerCase();});
        }

     const searchOnClick =()=>{
        let a=document.getElementById("search-box");
        let c=a.value
        for(let menuItem of menuItems){
            
            if(sentenceCase(c)===menuItem.category || sentenceCase(c)===menuItem.name){
                try{
                    let element = document.getElementById(menuItem.category)
                    element.scrollIntoView({behavior:"smooth"});
                }catch(error){
                   
                }
                
                break
            }
        }
    }

    const topOnClick=()=>{
        let element = document.getElementById("search-box")
        element.scrollIntoView({behavior:"smooth"});
    }
    useEffect(()=>{
        setNavbar();
        document.addEventListener("keypress",(a)=>{
            if (a.key==="Enter"){
                let a = document.getElementById("search-box")
                let c=a.value
                if(c===null){}
                else{
                for(let menuItem of menuItems){
                    if(sentenceCase(c)===menuItem.category || sentenceCase(c)===menuItem.name){
                        try{
                            let element = document.getElementById(sentenceCase(c))
                            element.scrollIntoView({behavior:"smooth"});
                        }catch(error){
                   
                        }
                
                        break
                    }
                }}
            }
        })
    },[])

    return (
        <>
            <div style={{marginTop:"100px",marginLeft:"40px",width:"500px"}}>
                <input placeholder="Search category or item" id="search-box"/>
                <button onClick={searchOnClick}>Search</button>
            </div>
            <div className="box">
                <FoodItems handleClick={handleClick} />
            </div>
            <button className="take-me-up-arrow" onClick={topOnClick}>&uarr;</button>
        </>
        
    );
}