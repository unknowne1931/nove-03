import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { store2 } from './App';
import Navibar from './navibar';
import Topn from './topnme';
import Hoc from './hoc';

const Gamecnt = () => {

    const [datta, setDatta] = useState([]);
    const [star5, setStar5] = useState([]);
    const [star4, setStar4] = useState([]);
    const [star3, setStar3] = useState([]);
    const [star2, setStar2] = useState([]);
    const [star1, setStar1] = useState([]);
    const [star, setStar] = useState([]);

    const [alert, setAlert] = useState(false);

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setDatta(info))

        fetch(`http://localhost:5000/prize/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStar(info))

        fetch(`http://localhost:5000/prize/05/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStar5(info))

        fetch(`http://localhost:5000/prize/04/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStar4(info))

        fetch(`http://localhost:5000/prize/03/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStar3(info))

        fetch(`http://localhost:5000/prize/02/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStar2(info))

        fetch(`http://localhost:5000/prize/01/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStar1(info))



        fetch(`http://localhost:5000/total/prize/dataLength?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStarln(info))

        fetch(`http://localhost:5000/star/05/dataLength?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStarln5(info))

        fetch(`http://localhost:5000/star/04/dataLength?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStarln4(info))

        fetch(`http://localhost:5000/star/03/dataLength?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStarln3(info))

        fetch(`http://localhost:5000/star/02/dataLength?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStarln2(info))

        fetch(`http://localhost:5000/star/01/dataLength?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStarln1(info))

    }, [])

    const [starlen , setStarln] = useState([]);
    const [starlen5, setStarln5] = useState([]);
    const [starlen4, setStarln4] = useState([]);
    const [starlen3, setStarln3] = useState([]);
    const [starlen2, setStarln2] = useState([]);
    const [starlen1, setStarln1] = useState([]);

    const user = useContext(store2)
    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    localStorage.setItem('email', email);

    const [total, setTotal] = useState([])

    const handleChange = (e) => {
        setTotal(e.target.value);
      };

      const Submitt = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/prizzzess", {email, total})
        .then(res => {
            if(res.data.Status === "OK"){
                window.location.reload();
            }
        })
      }

      const Star5 = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/prizzzess/05", {email, total})
        .then(res => {
            if(res.data.Status === "OK"){
                window.location.reload();
            }
        })
      }

      const Star4 = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/prizzzess/04", {email, total})
        .then(res => {
            if(res.data.Status === "OK"){
                window.location.reload();
            }
        })
      }

      const Star3 = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/prizzzess/03", {email, total})
        .then(res => {
            if(res.data.Status === "OK"){
                window.location.reload();
            }
        })
      }

      const Star2 = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/prizzzess/02", {email, total})
        .then(res => {
            if(res.data.Status === "OK"){
                window.location.reload();
            }
        })
      }

      const Star1 = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/prizzzess/01", {email, total})
        .then(res => {
            if(res.data.Status === "OK"){
                window.location.reload();
            }
        })
      }

      const Starup = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/star/data/put/${email}`,{total})
        .then(res =>{
          if(res.data.Status === "OK"){
            window.location.reload();
          }else{
            setAlert(true)
          }
        })
      }

      const Starup5 = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/star5/data/put/${email}`,{total})
        .then(res =>{
          if(res.data.Status === "OK"){
            window.location.reload();
          }else{
            setAlert(true)
          }
        })
      }

      const Starup4 = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/star4/data/put/${email}`,{total})
        .then(res =>{
          if(res.data.Status === "OK"){
            window.location.reload();
          }else{
            setAlert(true)
          }
        })
      }

      const Starup3 = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/star3/data/put/${email}`,{total})
        .then(res =>{
          if(res.data.Status === "OK"){
            window.location.reload();
          }else{
            setAlert(true)
          }
        })
      }

      const Starup2 = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/star2/data/put/${email}`,{total})
        .then(res =>{
          if(res.data.Status === "OK"){
            window.location.reload();
          }else{
            setAlert(true)
          }
        })
      }

      const Starup1 = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/star1/data/put/${email}`,{total})
        .then(res =>{
          if(res.data.Status === "OK"){
            window.location.reload();
          }else{
            setAlert(true)
          }
        })
      }



  return (
    <div>
      <Navibar />
        <Topn />
        {user.email === email &&
      <center>
        
        {datta.role === "admin" &&
        <div>
          <div className='gme-cnt-cnt-01-div'>
            {starlen.length <= 0 &&
            <form onSubmit={Submitt}>
              {star.map((user, i) => {
                return(
                  <div key={i}>
                    <span>Total No {user.total}</span>
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='Total Gift List' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >set</button>
            </form>}

            {starlen.length >= 0 &&
            <form onSubmit={Starup}>
              {star.map((user, i) => {
                return(
                  <div key={i}>
                    <span>Total No {user.total}</span><br />
                    {alert && <span className='gme-alrt-fn'>To update, Login as {user.email}</span>}
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='Edit Gift List' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >Update</button>
            </form>}



          </div>
          
          <div className='gme-cnt-cnt-01-div'>
            {starlen5.length <= 0 &&
            <form onSubmit={Star5}>
            {star5.map((user, i) => {
                return(
                  <div key={i}>
                    <span>{user.total}</span>
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='5 Star' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >set</button>
            </form>}

            {starlen5.length >= 0 &&
            <form onSubmit={Starup5}>
            {star5.map((user, i) => {
                return(
                  <div key={i}>
                    <span>{user.total}</span><br/>
                    {alert && <span className='gme-alrt-fn'>To update, Login as {user.email}</span>}
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='Edit 5 Star' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >update</button>
            </form>}
          </div>
          
          <div className='gme-cnt-cnt-01-div'>
            {starlen4.length <=0 &&
            <form onSubmit={Star4}>
              {star4.map((user, i) => {
                return(
                  <div key={i}>
                    <span>{user.total}</span>
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='4 Star' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >set</button>
            </form>}

            {starlen4.length >=0 &&
            <form onSubmit={Starup4}>
              {star4.map((user, i) => {
                return(
                  <div key={i}>
                    <span>{user.total}</span><br/>
                    {alert && <span className='gme-alrt-fn'>To update, Login as {user.email}</span>}
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='Edit 4 Star' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >update</button>
            </form>}
          </div>
          
          <div className='gme-cnt-cnt-01-div'>
            {starlen3.length <= 0 &&
            <form onSubmit={Star3}>
            {star3.map((user, i) => {
                return(
                  <div key={i}>
                    <span>{user.total}</span>
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='3 Star' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >set</button>
            </form>}

            {starlen3.length >= 0 &&
            <form onSubmit={Starup3}>
            {star3.map((user, i) => {
                return(
                  <div key={i}>
                    <span>{user.total}</span><br/>
                    {alert && <span className='gme-alrt-fn'>To update, Login as {user.email}</span>}
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='Edit 3 Star' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >update</button>
            </form>}
          </div>

          <div className='gme-cnt-cnt-01-div'>
            {starlen2.length <= 0 &&
            <form onSubmit={Star2}>
            {star2.map((user, i) => {
                return(
                  <div key={i}>
                    <span>{user.total}</span>
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='2 Star' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >set</button>
            </form>}

            {starlen2.length >= 0 &&
            <form onSubmit={Starup2}>
            {star2.map((user, i) => {
                return(
                  <div key={i}>
                    <span>{user.total}</span><br />
                    {alert && <span className='gme-alrt-fn'>To update, Login as {user.email}</span>}
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='Edit 2 Star' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >update</button>
            </form>}
          </div>

          <div className='gme-cnt-cnt-01-div'>
            {starlen1.length <= 0 &&
            <form onSubmit={Star1}>
              {star1.map((user, i) => {
                return(
                  <div key={i}>
                    <span>{user.total}</span>
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='1 Star' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >set</button>
            </form>}

            {starlen1.length >= 0 &&
            <form onSubmit={Starup1}>
              {star1.map((user, i) => {
                return(
                  <div key={i}>
                    <span>{user.total}</span><br/>
                    {alert && <span className='gme-alrt-fn'>To update, Login as {user.email}</span>}
                  </div>
                )
              })}
            <input type='numbers' className='gme-cnt-01-in-put' style={{textAlign: "center"}} placeholder='Edit 1 Star' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >update</button>
            </form>}
          </div>
          
        </div>}
      </center>}
    </div>
  )
}

export default Hoc(Gamecnt)
