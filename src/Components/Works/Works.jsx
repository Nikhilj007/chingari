import React from 'react'
import './Works.css'
import {motion} from 'framer-motion'
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Works = () => {
  
  const theme=useContext(themeContext);
  const darkmode= theme.state.darkmode;

  return (
    <div className='works'>
      <div className="earnHead">
        <span style={{color:darkmode?'white':''}}>Wide range of </span>
        <span>possibilities</span>
        <span>
        Welcome to the Chingari universe with lots of exciting features and products 
        </span>
        <span>for eveyone whether you are a Creater, a User or a Crypto Ninja.</span>
        
        <a href="https://gari.network/" target='_blank'><button className='button s-button'>Learn more</button></a>
        <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
      </div>
      <div className="w-right">
          <motion.div 
          initial={{rotate:45}}
          whileInView={{rotate:0}}
          viewport={{margin:'-40px'}}
          transition={{duration:3.5,type:'spring'}}
          className="w-mainCircle"> 
            <div className="w-secCircle">
                <img src="https://chingari.io/images/new/images/mining.png" alt="" />
            </div>
            <div className="w-secCircle">
                <img src="https://chingari.io/images/new/images/staking.png" alt="" />
            </div>
            <div className="w-secCircle">
                <img src="https://chingari.io/images/new/images/superstars.png" alt="" />
            </div>
            <div className="w-secCircle">
                <img src="https://chingari.io/images/new/images/wallet.png" alt="" />
            </div>
            <div className="w-secCircle">
                <img src="https://chingari.io/images/new/images/badges.png" alt="" />
            </div>
            
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
         </motion.div>
         
         
      </div>
    </div>
  )
}

export default Works
