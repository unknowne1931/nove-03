import React, { useContext, useEffect , useState} from 'react'
import Hoc from './hoc'
import Navibar from './navibar'
import Topn from './topnme'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { store2 } from './App'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Cupon = () => {

    const user = useContext(store2)
    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')

    useEffect(() =>{
        fetch(`http://localhost:5000/star/tot/one/get/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStarget(info))

        fetch(`http://localhost:5000/get/coin/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setData(info))

    },[])

    const[starget , setStarget] = useState([]);
    const[data , setData] = useState([]);

    const reactkey = process.env.REACT_APP_API_KEY


  return (
    <div>
        <Navibar/>
        <Topn/>
      <center>
        {user.email === email &&
        <div>
            {data.map((user,i ) =>{
                return(
                    <div key={i} className='coin-cnt-01'>
                    <span className='coin-spn-01'>{user.name}</span><br />
                    <span className='coin-spn-02'> <FontAwesomeIcon className='coin-aws-icon' icon={faStar} /> {user.stars}</span><br />
                    <div className='coin-cnt-01-img'>
                        <img src={user.img} alt='img'/><br />
                    </div >
                    <span className='coin-spn-03'>{user.valid}</span><br />
                    {starget.map((data, i) => {
                        if(data.stars >= parseInt(user.stars)){
                            return(
                                <div>
                                    <Link key={i} className='coin-btn-01' to={`/cnfcoin?email=${email}&id=${user._id}`} >claim</Link>
                                </div>
                            )
                        }
                    })}

                    </div>
                )
            })}
        </div>}
      </center>
    </div>
  )
}

export default Hoc(Cupon)
