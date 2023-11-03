import React, { useContext, useEffect, useState } from 'react'
import Hoc from './hoc';
import { store2 } from './App';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Topn from './topnme';
import axios from 'axios';

const Cnfcoin = () => {
    const user = useContext(store2)
    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    const id = queryParm.get('id')

    useEffect(() =>{
        fetch(`http://localhost:5000/star/tot/one/get/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStarget(info))

        fetch(`http://localhost:5000/get/coin/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setData(info))

        fetch(`http://localhost:5000/coin/item/${id}`)
        .then(res => res.json())
        .then(info => setIDe(info))

    },[])

    const[starget , setStarget] = useState([]);
    const[data , setData] = useState([]);
    const[ide, setIDe] = useState([]);

    const reactkey = process.env.REACT_APP_API_KEY

    const SubmitUpad = () => {
        {starget.map((user) =>{
            const stars = user.stars - ide.stars
            axios.put(`http://localhost:5000/star/tot/put/${user._id}`,{stars})
            .then(res => {
              if(res.data.Status === "OK"){
                window.location.href = `/profile?email=${email}`
              }
            })
        })}
    }
  return (
    <div>
        <Topn/>
        {user.email === email &&
        <div>
            {ide._id === id &&
            <center>
                <h3 className='cnf-coin-h3'>Claim it <span>..!</span></h3>
                <div className='coin-cnt-01'>
                    <span className='coin-spn-01'>{ide.name}</span><br />
                    <span className='coin-spn-02'> <FontAwesomeIcon className='coin-aws-icon' icon={faStar} /> {ide.stars}</span><br />
                    <div className='coin-cnt-01-img'>
                        <img src={ide.img} alt='img'/><br />
                    </div >
                    <span className='coin-spn-03'>{ide.valid}</span><br />
                </div>
                <button onClick={SubmitUpad} className='btn-01'>get</button>
            </center>}
        </div>}
    </div>
  )
}

export default Hoc(Cnfcoin);
