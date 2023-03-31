import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Navbar = () => {
  
  const theme=useContext(themeContext);
  const darkmode= theme.state.darkmode;

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
        <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/http://blog.chingari.io/wp-content/uploads/2020/09/chingari_logo_hd.png" width='45px' alt="sds" /></div>
        <div><Toggle/></div>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul >
                <li><a style={{color:darkmode?'white':''}} href="https://blog.chingari.io/about-us/" target={'_blank'}>About</a></li>
                <li><a style={{color:darkmode?'white':''}} href="https://careers.chingari.io/" target='_blank'>Careers</a></li>
                <li><a style={{color:darkmode?'white':''}} href="https://blog.chingari.io/contact-us/" target='_blank'>Contact</a></li>
                <li><a style={{color:darkmode?'white':''}} href="https://blog.chingari.io/category/news/" target="_blank"> Media</a></li>
                <li><a style={{color:darkmode?'white':''}} href="https://gari.network/" target='_blank'>Gari_Token</a></li>
                <li><a style={{color:darkmode?'white':''}} href="https://gari.network/investors-partners/" target='_blank'>Partners</a></li>
            </ul>
        </div>
        <button className='button' >Careers</button>
      </div>
    </div>
  )
}

export default Navbar
