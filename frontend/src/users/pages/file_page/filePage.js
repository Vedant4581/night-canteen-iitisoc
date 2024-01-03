import React,{useState,useEffect,useContext} from "react";
import { AuthContext } from "../../../context/auth-context";
import "./filePage.css"
const FilePage=()=>{
    const [file,setFile]=useState(null)
    const data=useContext(AuthContext)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(file)
        const formData=new FormData;
        formData.append("file",file)
        const response=await fetch('/upload',{
            method:"POST",
            body:formData,
           encType:"multipart/form-data",
           headers:{
            'Authorization':`BEARER ${data.token}`
        }
        }).then(res =>console.log(res))
        
        // setFile("");
    }
    
    return(
        <>
        <div class="profile-card">
        <div class="outer">
            <div class="content">
                <div class="image-box">
                    <img src="https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg" alt="profile-img" />
                </div>
                <div class="details">
                    <div class="name">{data.name}</div><hr/>
                    <div class="email_id">{data.email}</div><hr/>
                    <div class="phone_no">+91xxxxxxxxxx</div>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default FilePage;