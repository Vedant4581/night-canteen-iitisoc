import React,{useContext,useEffect} from 'react'
import Hero from '../../components/home_components/Hero'
import Carousel from '../../components/home_components/Carousel'
import Featured from '../../components/home_components/Featured'
import Footer from '../../components/home_components/Footer'
import { AuthContext } from "../../../context/auth-context";
export default function Home(props) {
  const a=useContext(AuthContext)
  useEffect(()=>{
    props.setNavbar();
    
  },[])
  return (
    <div>
      <Hero/>
      {/* <div className="container">
        <Carousel/>
      </div>  */}
      {/* <Featured/>
      <Footer/> */}
    </div>
  )
}
