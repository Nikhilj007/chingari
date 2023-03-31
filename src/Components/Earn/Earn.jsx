import React from 'react'
import './Earn.css'
import Card from '../Card/Card'
import {motion} from 'framer-motion'
import { useContext } from 'react'
import { themeContext } from '../../Context';

const Earn = () => {

  
  const theme=useContext(themeContext);
  const darkmode= theme.state.darkmode;

  const transition= {duration:1,type:'spring' }
  return (
    <div className='earn'>
      <div className="earnHead">
        <span style={{color:darkmode?'white':''}}>Engage And</span>
        <span>Earn</span>
        <span>
        Chingari is the only platform in the world that
        </span>
        <span>pays you in Gari to Socialize.</span>
        
        <a href="https://gari.network/" target='_blank'><button className='button s-button'>Learn more</button></a>
        <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
      </div>
      <div className="cards" >
        <motion.div
        whileInView={{left:'30rem'}}
        initial={{left:'21rem'}}
        transition={transition}
         style={{left:'21rem'}}>
          <Card
            icon={'https://chingari.io/images/new/icons/play-button.svg'}
            heading={'Watch'}
            detail={"Earn while you watch videos from our wide category collections"}
          />
          </motion.div>
        <motion.div
        initial={{left:'-2rem'}}
        whileInView={{left:'4rem'}}
        transition={transition}
         style={{top:'12rem',left:'4rem'}}>
          <Card
            icon={'https://chingari.io/images/new/icons/share.svg'}
            heading={'Share'}
            detail={"Share your favourite video with others and earn Gari"}
          />
        </motion.div>
        <motion.div 
        initial={{left:'30rem'}}
        whileInView={{left:'21rem'}}
        transiton={transition}
        style={{top: '19rem', left:'21rem'}}>
          <Card
            icon={'https://chingari.io/images/new/icons/purple-fire.svg'}
            heading={'Like'}
            detail={"Even liking videos on chinagri gets you Gari"}
          />
        </motion.div>
        <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Earn
