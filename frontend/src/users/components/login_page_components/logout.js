import React,{useState,useEffect,useContext} from "react";
// import Background from "../../components/background_components/background";
// import Button from "../../components/login_page_components/button";
// import LoginBar from "../../components/login_page_components/loginBar";
// import './loginPage.css' ;
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/authhook";
import { AuthContext } from "../../../context/auth-context";
function Logout() {

  const Auth = useContext(AuthContext)
  Auth.logout()
}
export default Logout;