import React,{useContext, useEffect, useState} from 'react'
import Navibar from './navibar'
import Hoc from './hoc'
import Topn from './topnme'
import { useLocation } from 'react-router-dom'
import { store2 } from './App'

const Trid = () => {

    const user = useContext(store2)
    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    localStorage.setItem('email', email);

    const [datta, setDatta] = useState([])

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() =>{
      fetch(`http://localhost:5000/user/${email}?key=${reactkey}`)
      .then(res => res.json())
      .then(info => setDatta(info))
  },[])

  const [formData, setFormData] = useState({
    email: email,
    trID : ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch('http://localhost:5000/trid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        window.location.reload();
      } else {
        alert("Data con't be ssaved")
      }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div>
        <Navibar />
        <Topn />
        <center>
            {user.email === email &&
            <div>
              {datta.role === "admin" &&
              <div className='tran-id-cnt-01'>
                <form onSubmit={handleSubmit}>
                <h2>Tran</h2>
                <input type='text' placeholder='Enter Transaction ID'  required autoComplete='off' name='trID' onChange={handleChange} /><br />
                <button className='btn-01' type='submit'>Send</button>
                </form>
              </div>}
            </div>
            }
        </center>
    </div>
  )
}

export default Hoc(Trid);
