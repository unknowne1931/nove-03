import React, { useContext, useEffect, useState } from 'react'
import Topn from './topnme';
import Navibar from './navibar';
import { store2 } from './App';
import { useLocation } from 'react-router-dom';
import Hoc from './hoc';
import axios from 'axios';

const Addprizes = () => {

    const user = useContext(store2)
    const [datta , setDatta] = useState([])

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    localStorage.setItem('email', email);

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setDatta(info))

        fetch("http://localhost:5000/amount/dataLength")
        .then(res => res.json())
        .then(info => setData(info))

    }, [])

    const [data , setData] = useState([])

    const [prizes, setPrizes] = useState({
        gifno : '',
        gifname : '',
        gifdisc : '',
        gifimgurl : '',
        giftime : ''
    })

    const handleChange = (e) => {
        setPrizes({
          ...prizes,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmitt = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/gif/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(prizes)
          });
    
          if (response.ok) {
            window.location.href='/'
          } else {
            alert("Data con't be ssaved")
          }
        } catch (error) {
            console.log(error)
        }
      };


      const Ammt = (e) => {
        setAmount(e.target.value);
      };

      const [amount , setAmount] = useState([])

      const Subbbit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/amount/data/fix" , {email, amount})
        .then(res => {
          if(res.data.Status === "OK"){
            window.location.href='/payment'
          }else{
            window.location.reload()
          }
        })
      }

      const Subbbitupdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/amount/data/put/${email}`, {amount})
        .then(res => {
          if(res.data.Status === "OK"){
            window.location.href = '/payment'
          }
        })
      }


  return (
    <div>
        <Navibar />
        <Topn/>
        {datta.role === "admin" &&
      <center>
        {user.email === email &&<div>
        <h2>Add Prizes</h2>
        <div>
            <form onSubmit={handleSubmitt}>
                <div className='adprz-div-cnt-01' >
                    <div className='adprz-div-cnt-02'>
                    <span>Gif No</span><br />
                    <input type='number' name='gifno' className='adprz-int-01' onChange={handleChange} required autoComplete='off' /><br />
                    </div>

                    <div className='adprz-div-cnt-02'>
                    <span>Gif Name</span><br />
                    <input type='text' name='gifname' className='adprz-int-01' onChange={handleChange} required autoCapitalize='off' /><br />
                    </div>

                    <div className='adprz-div-cnt-02'>
                    <span>Gif Discription</span><br />
                    <input type='text' name='gifdisc' className='adprz-int-01' onChange={handleChange} required autoCapitalize='off' /><br />
                    </div>

                    <div className='adprz-div-cnt-02'>
                    <span>Gif Img Url</span><br />
                    <input type='url' name='gifimgurl' className='adprz-int-01' onChange={handleChange} required autoCapitalize='off' /><br />
                    </div>

                    <div className='adprz-div-cnt-02'>
                    <span>Gif Duration</span><br />
                    <input type='text' name='giftime' className='adprz-int-01' onChange={handleChange} required autoCapitalize='off' /><br />
                    </div>

                    <button type='submit' className='adprz-btn-01'> Add</button>
                </div>
            </form>
        </div>

        <div>
          {data.length <= 0 && 
          <form onSubmit={Subbbit}>
          <span>Enter Amount for Puzzel</span><br />
          <input type='number' className='adprz-int-01' onChange={Ammt} name='amount' placeholder='Adding New Value' required autoComplete='off'/><br />
          <button type='submit' className='adprz-btn-01'> Add</button>
          </form>}
          {data.length > 0 && 
          
          <form onSubmit={Subbbitupdate}>
          <span>Update Amount for Puzzel</span><br />
          <input type='number' className='adprz-int-01' onChange={Ammt} name='amount' placeholder='Updating Value' required autoComplete='off'/><br />
          <button type='submit' className='adprz-btn-01'> Add</button>
          </form>
          }


        </div>
        </div>}
      </center>}
    </div>
  )
}

export default Hoc(Addprizes);