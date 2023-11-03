import React, { useEffect, useState } from 'react'
import Topn from './topnme'
import Navibar from './navibar'
import { Link } from 'react-router-dom'
import Phonepay from './images/sel.jpeg'

const Paymnt = () => {

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        fetch(`http://localhost:5000/amount/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setData(info))
    })

    const [data , setData] = useState([])
  return (
    <div>
        <Navibar/>
        <Topn/>
      <center>
        <div className='pynt-cnt-01'>
            <h2>Payment Method</h2>
            <div className='pynt-cnt-02'>
                <h3>Only Phone pay Accepted</h3><br />
                <span>After Payment Save Transaction ID To Enter In,<br />
                to Start Game.</span>
                <br />
                <br />
                <span><strong>*</strong> Once You Paid Money, We Never Pay you Back</span><br />
                <span> <strong>*</strong> On Transaction if Payment is Pending. we pay back after <strong>1 Day</strong></span><br />
                <span><strong>*</strong>For More Contact On Instagram <strong><Link to="https://www.instagram.com/stawro/" className='pam-lnk-01'>staWro</Link></strong></span>
            </div>
            <div>
                {data.map((user, i) => {
                    return(
                        <h2 key={i}> ₹ <strong className='patm-ru-int'>{user.amount}</strong></h2>
                    )
                })}
            </div>
            <div className='paynt-cnt-03'>
                <span>UPI ID <strong>krishna.kick2@ybl</strong></span><br />
                <span>Name : <strong>Veeresh</strong></span>
                <div className='paynt-cnt-04'>
                    <img src={Phonepay} alt='phone_pay'/>
                </div>
            </div>
        </div>
      </center>
    </div>
  )
}

export default Paymnt
