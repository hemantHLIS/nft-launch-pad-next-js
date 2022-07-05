import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
  const scrolled = document.documentElement.scrollTop;
  if (scrolled > 300){
  setVisible(true)
  }
  else if (scrolled <= 300){
  setVisible(false)
  }
};

const scrollToTop = () =>{
  window.scrollTo({
  top: 0,
  behavior: 'smooth'
  /* you can also use 'auto' behaviour
    in place of 'smooth' */
  });
};
if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener('scroll', toggleVisible);
  }

return (
    <>
   {/* <Button>
   <FaArrowCircleUp onClick={scrollToTop}
  style={{display: visible ? 'inline' : 'none'}} />
  </Button> */}
  <button className="scroll-top scroll-to-target" onClick={scrollToTop} data-target="html">
  <i className="fas fa-angle-up"></i>
</button>
</>
);
}

export default ScrollButton;
