import React,{useState,useEffect, useContext} from 'react'
// import WorkoutDetails from '../../../users/components/WorkoutDetails';
import WorkoutDetails from '../../components/menu_component/WorkoutDetails';

export default function AdminMenu() {
    const [menuitems,setMenuItems]=useState(null);
    useEffect(()=>{
        const fetchWorkouts=async()=>{
        const response=await fetch('/canteen/food',{
            method:"GET"
        })
        const json=await response.json();
        if(response.ok){
            setMenuItems(json);
        }
        }
        fetchWorkouts();
    })
    
  return (
    <div>
      <div className="input-group ms-sm-4 ms-md-4" style={{marginTop:"100px"}}>
        <div className="width-setting-of-input">
            <input type="text mx-2" className="form-control my-3" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
        </div>
        <div className="input-group-append">
          <a className="btn btn-success mx-2 my-3" type="button" href='/about'>Add Item</a>
          <a className="btn btn-warning mx-2 my-3" type="button" href='/services'>Update Item</a>
          <button className="btn btn-danger mx-2 my-3" type="button">Delete Item</button>
        </div>
    </div>
    <div className="container">
        <h3>Category</h3>
        <hr/>
      </div>

    <div className="container">
        <div className="row">
            
                    {menuitems && menuitems.map((workout)=>(
                  <WorkoutDetails key={workout._id} workout={workout}/>
                )

                )}


        </div>
    </div>
    </div>
  )
}
