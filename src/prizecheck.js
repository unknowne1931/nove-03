import React, { useContext, useEffect, useState } from 'react'
import Hoc from './hoc';
import { Link, useLocation } from 'react-router-dom';
import { store2 } from './App';
import Topn from './topnme';
import Navibar from './navibar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Prizecheck = () => {

  const user = useContext(store2)
  const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    const gifno = queryParm.get('no')
    localStorage.setItem('email', email);

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() => {
      fetch(`http://localhost:5000/gif/data/${gifno}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setDatta(info))

      fetch(`http://localhost:5000/wonnn/data/${gifno}?key=${reactkey}`)
      .then(res => res.json())
      .then(data => setWinnOne(data))

        fetch(`http://localhost:5000/winnn/data/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setData(info))

        fetch(`http://localhost:5000/prize/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStar(info))

      fetch(`http://localhost:5000/way01/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(data => setQnoo(data))

    fetch(`http://localhost:5000/winnn/data/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(data => setValid(data))

    fetch(`http://localhost:5000/won/data/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(info => setWondata(info))

    fetch(`http://localhost:5000/gif/won/data/${email}?key=${reactkey}`)
      .then(res => res.json())
      .then(data => setWondata1(data))

    },[])

    const [wondata, setWondata] = useState([])
    const [wondata1, setWondata1] = useState([])
    const [datta, setDatta] = useState([]);
    const [data, setData] = useState([]);
    const [qnoo, setQnoo] = useState([]);
    const [star, setStar] = useState([]);
    const [valid, setValid] = useState([]);
    const [winnone , setWinnOne] = useState([])


  return (
    <div>
      <Navibar />
      <Topn/>
      <center>
      </center>
      {gifno === wondata.rank &&
      <div>
      {user.email === email &&
      <center>
        {qnoo.qno1 === "Yes" ?
        <div>
        <center>
          <Navibar />
          <h2>You Are Out Now </h2>
        </center>
      </div> :
        <div>
          <div>
          {wondata1.map((user, u) =>{
                    if(user.email1 === email){
                        return(
                            <div key={u}>
                                <div className='viw-cnt-01'>
                                <snap className='viw-cnt-01-snap-01'>{user.rank} Rank</snap><br />
                                <snap className='viw-cnt-01-snap-02'>{user.gifname}</snap><br />
                                <div className='viw-cnt-02'>
                                    <img src={user.gifimgurl} alt='img' />
                                </div>
                                <snap className='viw-cnt-01-snap-03'>{user.giftime}</snap>
                                <p className='viw-cnt-01-p-01'>{user.gifdisc}</p>
                                </div> 
                            </div>
                        )
                    }
                })}
           </div>
        </div>}
      </center>}
      {star.map((user, i) =>{
        if(gifno > parseInt(user.total)){
          return(
            <div key={i}>
              <center>
                <div>
                  {winnone.star === "1" && 
                  <div className='prz-str-cnt-01'>
                    <h2>You Got {winnone.star} <span>star</span></h2>
                    <span className='prz-glo-str'><FontAwesomeIcon className='glow-5-1' icon={faStar} /></span>
                  </div>}
                  {winnone.star === "2" && 
                  <div className='prz-str-cnt-01'>
                    <h2>You Got {winnone.star} <span>stars</span></h2>
                    <span className='prz-glo-str'><FontAwesomeIcon className='glow-5-1' icon={faStar} /><FontAwesomeIcon className='glow-5-2' icon={faStar} /></span>
                  </div>}
                  {winnone.star === "3" && 
                  <div className='prz-str-cnt-01'>
                    <h2>You Got {winnone.star} <span>stars</span></h2>
                    <span className='prz-glo-str'><FontAwesomeIcon className='glow-5-1' icon={faStar} /><FontAwesomeIcon className='glow-5-2' icon={faStar} /><FontAwesomeIcon className='glow-5-3' icon={faStar} /></span>
                  </div>}
                  {winnone.star === "4" && 
                  <div className='prz-str-cnt-01'>
                    <h2>You Got {winnone.star} <span>stars</span></h2>
                    <span className='prz-glo-str'><FontAwesomeIcon className='glow-5-1' icon={faStar} /><FontAwesomeIcon className='glow-5-2' icon={faStar} /><FontAwesomeIcon className='glow-5-3' icon={faStar} /><FontAwesomeIcon className='glow-5-4' icon={faStar} /></span>
                  </div>}
                  {winnone.star === "5" && 
                  <div className='prz-str-cnt-01'>
                    <h2>You Got {winnone.star} <span>stars</span></h2>
                    <span className='prz-glo-str'><FontAwesomeIcon className='glow-5-1' icon={faStar} /><FontAwesomeIcon className='glow-5-2' icon={faStar} /><FontAwesomeIcon className='glow-5-3' icon={faStar} /><FontAwesomeIcon className='glow-5-4' icon={faStar} /><FontAwesomeIcon className='glow-5-5' icon={faStar} /></span>
                  </div>}
                  
                </div>
              </center>
            </div>
          )
        }
      })} 
      </div>}
    </div>
  )
}
export default Hoc(Prizecheck); 