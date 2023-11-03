import React from 'react'
import Navibar from './navibar'
import Topn from './topnme'

const Terms = () => {

    const Priv = () =>{
        window.location.href='https://merchant.razorpay.com/policy/Mg3evuGApj2YG4/privacy'
    }
    const Refn = () =>{
        window.location.href='https://merchant.razorpay.com/policy/Mg3evuGApj2YG4/refund'
    }
    const Spng = () =>{
        window.location.href='https://merchant.razorpay.com/policy/Mg3evuGApj2YG4/shipping'
    }
    const Cnt = () =>{
        window.location.href='https://merchant.razorpay.com/policy/Mg3evuGApj2YG4/contact_us'
    }
  return (
    <div>
        <Navibar/>
        <Topn/>
      <center>
        <h2 className='term-h2-01'>Privacy Policy, Refund Policy, Shipping, Contact check out those.</h2>
        <div className='trm-cnt-01'>
            <div className='trm-sub-cnt-01'>
                <button onClick={Priv}>Privacy Policy</button>
            </div>
            <div className='trm-sub-cnt-01'>
                <button onClick={Refn}>Refund Policy</button>
            </div>
            <div className='trm-sub-cnt-01'>
                <button onClick={Spng}>Shipping</button>
            </div>
            <div className='trm-sub-cnt-01'>
                <button onClick={Cnt}>Contact Us</button>
            </div>
        </div>
      </center>
    </div>
  )
}

export default Terms
