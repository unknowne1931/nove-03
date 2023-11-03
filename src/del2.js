import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { store2 } from './App';
import Hoc from './hoc';
import Navibar from './navibar';
import Topn from './topnme';

const DeleteButton2 = () => {

    const user = useContext(store2)

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    const id = queryParm.get("id")

    const reactkey = process.env.REACT_APP_API_KEY
  const handleDelete = async () => {
    axios.delete(`http://localhost:5000/api/items/2/${id}`)
    .then(res => {
        if(res.data.Status === "OK"){
            window.location.href=`/question/02?email=${email}`
        }else{
            alert("Something Went wrong")
        }
    })
  }

  useEffect(() =>{
    fetch(`http://localhost:5000/user/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(info => setDatta(info))
},[])

const [datta, setDatta] = useState([])

  return (
    <div>
        <Navibar/>
        <Topn/>
        {datta.role === "admin" &&
        <div>
            {user.email === email &&
            <center>
                <div className='del-btn-cnt'>
                    <button onClick={handleDelete} className='btn-01'>DELETE</button>
                </div>
            </center>}
        </div>}
    </div>    
  );
}

export default Hoc(DeleteButton2);
