import React, { useContext, useEffect, useState } from 'react'
import Hoc from './hoc'
import Navibar from './navibar'
import Topn from './topnme'
import { store2 } from './App'
import { Link, useLocation } from 'react-router-dom'

const Adminbr = () => {

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    const user = useContext(store2)    

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() =>{
        fetch(`http://localhost:5000/user/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(dat => setData(dat))
      },[])

    const [data, setData] = useState([])

    const Add1kan = () =>{
        window.location.href=`/addkan?email=${email}`
    }

    const Add2kan = () =>{
        window.location.href=`/addkan2?email=${email}`
    }

    const Add3kan = () =>{
        window.location.href=`/addkan3?email=${email}`
    }

    const Add4kan = () =>{
        window.location.href=`/addkan4?email=${email}`
    }

    const Add5kan = () =>{
        window.location.href=`/addkan5?email=${email}`
    }

    const Add6kan = () =>{
        window.location.href=`/addkan6?email=${email}`
    }

    const Add7kan = () =>{
        window.location.href=`/addkan7?email=${email}`
    }

    const Add8kan = () =>{
        window.location.href=`/addkan8?email=${email}`
    }


    const Add1eng = () =>{
        window.location.href=`/add?email=${email}`
    }
    const Add2eng = () =>{
        window.location.href=`/add2?email=${email}`
    }
    const Add3eng = () =>{
        window.location.href=`/add3?email=${email}`
    }
    const Add4eng = () =>{
        window.location.href=`/add4?email=${email}`
    }
    const Add5eng = () =>{
        window.location.href=`/add5?email=${email}`
    }
    const Add6eng = () =>{
        window.location.href=`/add6?email=${email}`
    }
    const Add7eng = () =>{
        window.location.href=`/add7?email=${email}`
    }
    const Add8eng = () =>{
        window.location.href=`/add8?email=${email}`
    }

    const Add9eng = () =>{
        window.location.href=`/game?email=${email}`
    }

    const Add10eng = () =>{
        window.location.href=`/addgif?email=${email}`
    }

    const Add11eng = () =>{
        window.location.href=`/tranid?email=${email}`
    }
    const Add12eng = () =>{
        window.location.href=`/addcoin?email=${email}`
    }
    

  return (
    <div>
        <Navibar/>
        <Topn/>
        {user.email === data.email &&
        <center>
            {data.role === "admin"&&
            <div>
                <div className='admn-pnl-cnt-01'>
                    <button className='btn-admin-pnl-01' onClick={Add1kan}>Add Kannada 01</button>
                    <button className='btn-admin-pnl-01' onClick={Add2kan}>Add Kannada 02</button>
                    <button className='btn-admin-pnl-01' onClick={Add3kan}>Add Kannada 03</button>
                    <button className='btn-admin-pnl-01' onClick={Add4kan}>Add Kannada 04</button>
                    <button className='btn-admin-pnl-01' onClick={Add5kan}>Add Kannada 05</button>
                    <button className='btn-admin-pnl-01' onClick={Add6kan}>Add Kannada 06</button>
                    <button className='btn-admin-pnl-01' onClick={Add7kan}>Add Kannada 07</button>
                    <button className='btn-admin-pnl-01' onClick={Add8kan}>Add Kannada 08</button>
                    <button className='btn-admin-pnl-02' onClick={Add1eng}>Add English. 01</button>
                    <button className='btn-admin-pnl-02' onClick={Add2eng}>Add English. 02</button>
                    <button className='btn-admin-pnl-02' onClick={Add3eng}>Add English. 03</button>
                    <button className='btn-admin-pnl-02' onClick={Add4eng}>Add English. 04</button>
                    <button className='btn-admin-pnl-02' onClick={Add5eng}>Add English. 05</button>
                    <button className='btn-admin-pnl-02' onClick={Add6eng}>Add English. 06</button>
                    <button className='btn-admin-pnl-02' onClick={Add7eng}>Add English. 07</button>
                    <button className='btn-admin-pnl-02' onClick={Add8eng}>Add English. 08</button>
                    <button className='btn-admin-pnl-03' onClick={Add9eng}>Total Prize List ex 20</button>
                    <button className='btn-admin-pnl-03' onClick={Add10eng}>Add Gif / Prizes Data</button>
                    <button className='btn-admin-pnl-03' onClick={Add11eng}>New Transaction ID</button>
                    <button className='btn-admin-pnl-03' onClick={Add12eng}>Add New Coin's</button>
                </div>
            </div>}
        </center>}
    </div>
  )
}

export default Hoc(Adminbr)
