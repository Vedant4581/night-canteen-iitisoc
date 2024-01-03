import React from "react";
import './loginBar.css'
function LoginBar(props){
    return (
        <div className="login-bar">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={props.strokePath} fill="black"/>
        </svg>
        <input type="text" placeholder={props.placeholder} className="bar" />
        </div>
    )
}
export default LoginBar;