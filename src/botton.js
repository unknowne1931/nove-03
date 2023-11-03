import React from 'react'
import { Link } from 'react-router-dom'
import Insta from './images/insta.png'
import staWro from './images/staWro.png'

const Bottompg = () => {
  return (
    <div>
      <center>
        <div className='botm-cnt-01'>
            <h3>About <strong className='tp-nm-str'>sta<span>W</span>ro</strong></h3>
            <span className='btm-soc-med-inst'>Stay with us on Social Media <br />
            for Latest Updates.</span><br />

            <div className='tp-img-cnt-02'>
                <Link to='/' className='btn-01-logo-cnt'>
                    <img className='logo-img' src={staWro} alt='Logo' />
                </Link>
            </div>

            <div className='bot-div-icon-cnt-01'>
                <div className='bot-icon-cnt-01'>
                    <Link to='https://www.instagram.com/stawro' ><img src={Insta} alt='Instagram' /></Link>
                </div>
            </div>
            <div className='bot-cnt-lst-01'>
                <span>Founder & Developer<br />
                by <strong>Ki1931cK</strong></span><br />

            </div>  
        </div>
      </center>
    </div>
  )
}

export default Bottompg
