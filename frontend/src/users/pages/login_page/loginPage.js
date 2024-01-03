import React,{useState,useContext,useEffect} from "react";
import './loginPage.css' ;
import Button from "../../components/login_page_components/button";
import { Link ,useNavigate} from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";


let a;
function LoginPage({userNavbar,adminNavbar,setNavbar}) {
    const [isAdmin,setIsAdmin]=useState(false)
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [err,setErr]=useState(null);
    const history = useNavigate();
  
  

  const Auth = useContext(AuthContext)
  const handleAuth=async(e)=>{
    const response=await fetch('/auth/google',{
        method:"GET",
    })
    // const json=await response.json();
    // console.log(json);
  }
  const HandleSubmit=async(e)=>{
  

 e.preventDefault();


    const workout={email,password};
    console.log({workout})
    const response=await fetch('/canteen/user/login',{
        method:"POST",
        body:JSON.stringify(workout),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const json=await response.json();
    if(!response.ok){
        setErr(json.errors[0].msg)
    
        console.log(json.errors[0].msg)
  
    }
    if(response.ok){
    

        setPassword('');
        setEmail('');
        if(json==="Incorrect email or password" || (json==="TRY AGAIN") ){
            setErr(json)
        }
        else{
            setErr(null);
        }
     
        
        console.log("NEW STRING IS ADDED")
        Auth.login(json.name, json.token,json.email,json.userid)
        if(email==="admin@iiti.ac.in"){
             history('/admin/menu')

        }
        else{
            history('/user/home')
        }
       
        
  }
}
useEffect(()=>{
 setNavbar();
})
    return (
    <div className="login-page-container">
                
        <div className="login-background"></div>
        <div className="login-container">
            <div className="login-text">
                <p className="login">Login</p>
                {/* <button id="login" onClick={handleAuth}>SIGN IN WITH GOOGLE</button> */}
                <form action="http://localhost:3000/auth/google" method="post">
  <input type="submit" value="Press to log in"/>
</form>
                <hr />
                <p id="sign-in">Sign in to your account</p>
            </div>
            <div className="user-identiy-button-container">
                <Link to="/user/home"><Button identity="User" status="selected" changeNavbar={userNavbar}/></Link>
                <Link to="/admin/order"><Button identity="Admin" status="not-selected" changeNavbar={adminNavbar}/></Link>
            </div>
            <form onSubmit={HandleSubmit}>
            <div className="bar-container">
                <div className="login-bar">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.04395 0C9.1087 0 10.1298 0.421427 10.8827 1.17157C11.6356 1.92172 12.0586 2.93913 12.0586 4C12.0586 5.06087 11.6356 6.07828 10.8827 6.82843C10.1298 7.57857 9.1087 8 8.04395 8C6.9792 8 5.95806 7.57857 5.20516 6.82843C4.45227 6.07828 4.0293 5.06087 4.0293 4C4.0293 2.93913 4.45227 1.92172 5.20516 1.17157C5.95806 0.421427 6.9792 0 8.04395 0ZM8.04395 10C12.4801 10 16.0733 11.79 16.0733 14V16H0.0146484V14C0.0146484 11.79 3.60776 10 8.04395 10Z" fill="black"/>
                    </svg>
                    <input placeholder="Username" onChange={(e)=>{setEmail(e.target.value)}} value={email} name="username" type="email" className="bar" />
                </div>
                <div className="login-bar">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14C10 13.4696 9.78929 12.9609 9.41421 12.5858C9.03914 12.2107 8.53043 12 8 12C7.46957 12 6.96086 12.2107 6.58579 12.5858C6.21071 12.9609 6 13.4696 6 14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V9C0 8.46957 0.210714 7.96086 0.585786 7.58579C0.960859 7.21071 1.46957 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z" fill="black"/>
                    </svg>
                    <input placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}} value={password} name="password" type="password" className="bar" />
                </div>
            </div>
            <div className="login-button-container">
                {err && <div style={{ color: 'red' }}>{err}</div>}

                
                <button className="login-button" onClick={HandleSubmit}>Login</button>
                <Link to="/signup" className="signup">Sign Up ?</Link>
            </div>
        </form>
        </div>

    </div>

    );
}

export default LoginPage;
