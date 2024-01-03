import React,{useState,useContext,useEffect} from 'react'
import './hero.css'
import { AuthContext } from '../../../context/auth-context';
import Carousel from './Carousel';
export default function Hero() {
const dat=useContext(AuthContext);
const url = '/upload/1689498209952-Logo (1).png'

  let cont;
  if(dat.name===null){
    cont="HELLO"
  }else{
    cont=`${((dat.name.length)<7)?dat.name:(dat.name.slice(0,5)+"...")}`
  }
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  // const typingSpeed = 100;
  const targetText = `Welcome to IITI Night Canteen,${cont}`; 
  useEffect(() => {
    if (currentIndex < targetText.length) {
      const timeout = setInterval(() => {
        setText(prevText => prevText + targetText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      },75);
      return () => clearTimeout(timeout);
    }
  })
  return (
    <div>
    <div className='hero-home'>
       <div className="left-column">
        <div>
        <img className="image" src={url} />
        <p className="writing-animation">{text}</p>
        </div>
       <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi augue, ornare sit amet erat eu, lacinia fringilla leo. Fusce imperdiet feugiat viverra. Nunc diam lorem, lacinia et nunc ut, sodales vulputate neque. Sed condimentum in mauris sit amet consequat. Mauris sit amet scelerisque est. Nunc gravida dui quis leo molestie hendrerit sed vitae diam. Aliquam non arcu non metus volutpat blandit convallis rhoncus ex. </p>
       </div> 
       <div className='right-column'>
       <Carousel />
       </div>
    </div>
   
    </div>
  )
}
