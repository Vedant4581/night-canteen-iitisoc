// import React from 'react'
// // import './WorkoutDetails.css'
// // import UpdateForm from './Updateform'
// // const express = require('express');
// // // const path = require('path');
// // const app = express();
// const WorkoutDetails=({workout})=>{
//     const handleClick=async ()=>{
//         const response=await fetch("/canteen/food/"+workout.name,{
//             method:"DELETE"
//         })
        
//         const json=await response.json();

//         if(response.ok){
//             console.log("ITEM WAS DELETED SUCCESSFULLY");
//         }


//     }
//     return(
//             <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
//                 <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
//                 <hr/>
//                 <div className="card-body">
//                     <h5 className="card-text">Category Name</h5>
                
//             <h4 className="card-text"><strong>ITEM NAME:</strong>{workout.name}</h4>
//             <p className="card-text"><strong>PRICE:</strong>{workout.price}</p>
//             <p className="card-text"><strong>CATEGORY:</strong>{workout.category}</p>
//             {/* <p>{workout.createdAt}</p>  */}
//              <span  onClick={handleClick} className="btn">DELETE</span>
//             <a className= "card-text" href={"/services/"+workout._id}>UPDATE</a>
//             <hr/>
//         </div>
//         </div>
//     )

//     }
// export default WorkoutDetails;





import React,{useContext} from 'react'
import { AuthContext } from "../../../context/auth-context";
import OrderMenu1 from './OrderMenu1';
// import './WorkoutDetails.css'
// import UpdateForm from './Updateform'
// const express = require('express');
// // const path = require('path');
// const app = express();
const WorkoutDetails=({workout})=>{
    const data=useContext(AuthContext)
    const handleClick=async ()=>{
        const response=await fetch("/canteen/orders/"+workout._id,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json',
                'Authorization':`BEARER ${data.token}`
            }
        })
        
        const json=await response.json();

        if(response.ok){
            console.log("ITEM WAS DELETED SUCCESSFULLY");
        }


    }
    return(
        //     <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
        //         <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
        //         <hr/>
        //         <div className="card-body">
        //             <h5 className="card-text">Category Name</h5>
                
        //     <h4 className="card-text"><strong>ITEM NAME:</strong>{workout.name}</h4>
        //     <p className="card-text"><strong>PRICE:</strong>{workout.price}</p>
        //     <p className="card-text"><strong>CATEGORY:</strong>{workout.category}</p>
        //     {/* <p>{workout.createdAt}</p>  */}
        //      <span  onClick={handleClick} className="btn">DELETE</span>
        //     <a className= "card-text" href={"/services/"+workout._id}>UPDATE</a>
        //     <hr/>
        // </div>
        // </div>
     <div className="card col-sm-12 col-lg-4 mx-2 my-2" style={{width:"400px"}}>
                <img src="https://www.iiti.ac.in/public/themes/iitindore/demos/update-logo.png"  className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    USER EMAIL
                                </td>
                                <td>
                                    : {workout.email}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    USER NAME
                                </td>
                                <td>
                                    : {workout.username}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    USER ID
                                </td>
                                <td>
                                    : {workout.userid}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ORDER ID
                                </td>
                                <td>
                                    : {workout._id}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CATEGORY
                                </td>
                                <td>
                                    : {workout.order_data.map((orderItem)=>{
                                        return <OrderMenu1 orderItem={orderItem}/>
                                    })}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ORDER DATE
                                </td>
                                <td>
                                    : {workout.order_date}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PRICE
                                </td>
                                <td>
                                    : {workout.price}
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                
            
                    <button onClick={handleClick} className='btn btn-danger me-2'>DELETE</button>
                    <a className="card-text" href={"/services/"+workout._id}><button className='btn btn-primary'><p className= "card-text">UPDATE</p></button></a>
                    <hr/>
                </div>
            
            
            </div> 
    )

    }
export default WorkoutDetails;