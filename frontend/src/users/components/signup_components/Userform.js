import React ,{useEffect} from "react";
import {useState,useContext} from "react";
// import {useWorkoutsContext} from "../hooks/useWorkoutsContext";
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import {useParams,useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/authhook";
import { AuthContext } from "../../../context/auth-context";
import {Icon} from "@iconify/react";
import './Userform.css';

const Userform=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(null);
    const params=useParams();
    const history=useNavigate();

useEffect(()=>{
    getProductDetails();
},[])
const getProductDetails=async()=>{
    // console.warn(params);
//     let result=await fetch(`http://localhost:3000/register`,{method:"POST"})
//     result=await result.json();
//     console.warn(result);
//     setName(result.name);
//     setEmail(result.email);
//     setPassword(result.password);
//     setId(result.id);
}
const Auth = useContext(AuthContext)
const handleSubmit=async(e)=>{
    e.preventDefault();

    const workout={name,email,password};
    console.log({workout})
    const response=await fetch('/canteen/user/register',{
        method:"POST",
        body:JSON.stringify(workout),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const json=await response.json();
    if(!response.ok){
        console.log(json)
        // setError(json.error)
        setError(json.errors[0].msg)
        // console.log("ERROR");
        // alert('invalid credentials')
    }
    if(response.ok){
        // setId('');
        setName('');
        setPassword('');
        setEmail('');
        setError(null);
        // response.redirected('/home')
        // e.redirect('/home')
        console.log(json)
        console.log("NEW STRING IS ADDED")
        // dispatch({type:'CREATE_WORKOUT',payload:json})
        Auth.login(json.name, json.token,json.email,json.userid)
        if(email==="admin@iiti.ac.in"){
            // setIsAdmin(true)
             history('/admin/menu')

        }
        else{
            history('/user/home')
        }
}
}
    return (
        <div className="signup-page-container">
            <div className="register-container">
            <Link to="/" className="Back" > <Icon icon="octicon:arrow-left-16" height={20} width={20}/> Back</Link>
                    <form action="/register" method="POST" onSubmit={handleSubmit}>
                        <div className="username">
                        <label for="name">Name</label>
                        <input type="name" onChange={(e)=>{setName(e.target.value)}} name="username" value={name}/>
                        </div>
                        <div class="useremail">
                        <label for="email">Email</label>
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="useremail" value={email}/>
                        </div>
                        <div class="password">
                        <label for="password">Password</label>
                        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name="password" value={password}/>
                        </div>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <button type="submit" className="register-button">Register</button>
                    </form>
            </div>
        </div>
    );
}

export default Userform;