// import { useState } from 'react'

// const ItemForm = () => {
//   const [id, setId] = useState('')
//   const [name, setName] = useState('')
//   const [category, setCategory] = useState('')
//   const [price, setPrice] = useState('')
//   const [error, setError] = useState(null)

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const item = {id,name,category,price}
    
//     const response = await fetch('/canteen/food', {
//       method: 'POST',
//       body: JSON.stringify(item),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     const json = await response.json()

//     if (!response.ok) {
//       setError(json.error)
//     }
//     if (response.ok) {
//       setError(null)
//       setId('')
//       setName('')
//       setCategory('')
//       setPrice('')
//       console.log('new workout added:', json)
//     }

//   }

//   return (
//     <form className="create" onSubmit={handleSubmit} action='POST'> 
//       <h3>Add a New Item</h3>

//       <label>Item Id: </label>
//       <input 
//         type="number" 
//         onChange={(e) => setId(e.target.value)} 
//         value={id}
//       />

//       <label>Item Name: </label>
//       <input 
//         type="text" 
//         onChange={(e) => setName(e.target.value)} 
//         value={name}
//       />

//       <label>Category: </label>
//       <input 
//         type="text" 
//         onChange={(e) => setCategory(e.target.value)} 
//         value={category} 
//       />
         
//       <label>Price: </label>
//       <input 
//         type="number" 
//         onChange={(e) => setPrice(e.target.value)} 
//         value={price} 
//       />

//       <button>Add Item</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   )
// }

// export default ItemForm






import {useState,useContext} from "react";
// import {useWorkoutsContext} from "../hooks/useWorkoutsContext";
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { AuthContext } from "../../../context/auth-context";
const ItemForm=()=>{
    // const {dispatch}=useWorkoutsContext();
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [category,setCategory]=useState('');
    const [price,setPrice]=useState('');
    const [amount,setAmount]=useState('');
    const [error,setError]=useState(null);
    const data=useContext(AuthContext)

const handleSubmit=async(e)=>{
    e.preventDefault();

    const workout={name,category,price,id,amount};
    const response=await fetch('/canteen/food',{
        method:"POST",
        body:JSON.stringify(workout),
        headers:{
            'Content-Type':'application/json',
            'Authorization':`BEARER ${data.token}`
        }
    })
    // const json=await response.json();
    
    // console.log("ERROR");
    console.log(response);

    if(!response.ok){
        // setError(json.error)
        console.log("ERROR");
    }
    if(response.ok){
        setId('');
        setName('');
        setPrice('');
        setAmount('');
        setCategory('');
        setError(null);
        
        console.log("NEW STRING IS ADDED")
        // dispatch({type:'CREATE_WORKOUT',payload:json})
    }
}

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>ADD A FOOD ITEM</h3>
            <label> NAME:</label>
            <input
            type="text"
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
            />
            <label> CATEGORY:</label>
            <input
            type="text"
            onChange={(e)=>{setCategory(e.target.value)}}
            value={category}
            />
            <label> PRICE:</label>
            <input
            type="number"
            onChange={(e)=>{setPrice(e.target.value)}}
            value={price}
            />
            <label> ID:</label>
            <input
            type="number"
            onChange={(e)=>{setId(e.target.value)}}
            value={id}
            />
            <label> AMOUNT</label>
            <input
            type="number"
            onChange={(e)=>{setAmount(e.target.value)}}
            value={amount}
            />
            <button>ADD ITEM</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ItemForm;