import React from 'react';
import Phone from '../Assets/phone.png';
import Desktop from '../Assets/desktop.png';
import './TechHome.css';
import { motion } from "framer-motion"


function TechHome() {
  return (
    <div className='TWrapper'>
      <div></div>
      <div className='ImgWrapper'>
      <motion.img   animate={{ y: 100 }}
      className='img1' src={Phone} alt='img'/>
      <motion.img animate={{ x: -50 }} className='img2' src={Desktop} alt='img'/>

      
      </div>
    </div>
  )
}

export default TechHome
