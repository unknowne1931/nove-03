import React, { useState } from 'react'
import Navibar from './navibar'
import Topn from './topnme'
import { useLocation } from 'react-router-dom'

const Addcoupon = () => {

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')

    const [data , setData] = useState({
        name : "",
        valueID : "",
        stars : "",
        valid : "",
        img : ""
    })

    const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmitt = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/coin/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
    
          if (response.ok) {
            window.location.href=`/coin?email=${email}`
          } else {
            alert("Data con't be ssaved")
          }
        } catch (error) {
            console.log(error)
        }
      };

  return (
    <div>
        <Navibar/>
        <Topn/>
      <center>
        <h2 className='ad-coin-h2'>Add New Coins</h2>
        <form onSubmit={handleSubmitt}>
            <div className='ad-coin-cnt-01'>
                <span>Name</span><br />
                <input type='text' placeholder='Name' name='name' onChange={handleChange} required/>
            </div>
            <div className='ad-coin-cnt-01'>
                <span>Value ID</span><br />
                <input type='text' placeholder='Value ID' name='valueID' onChange={handleChange} required/>
            </div>
            <div className='ad-coin-cnt-01'>
                <span>Stars</span><br />
                <input type='number' placeholder='Stars' name='stars' onChange={handleChange} required/>
            </div>
            <div className='ad-coin-cnt-01'>
                <span>Valid</span><br />
                <input type='text' placeholder='Valid' name='valid' onChange={handleChange} required/>
            </div>
            <div className='ad-coin-cnt-01'>
                <span>Image</span><br />
                <input type='link' placeholder='URL' name='img' onChange={handleChange} required/>
            </div>
            <button type='submit'className='btn-01'>send</button>
        </form>
      </center>
    </div>
  )
}

export default Addcoupon
