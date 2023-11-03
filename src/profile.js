import React, { useContext, useEffect, useState } from 'react'
import Navibar from './navibar'
import { store2 } from './App'
import { Link, useLocation } from 'react-router-dom'
import Hoc from './hoc'
import Topn from './topnme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Profile = () => {

    
    const user = useContext(store2)
    const[datta, setData] = useState([])  
    const[way , setWay] = useState([])

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    
    localStorage.setItem('email', email);

    const email1 = email
    const id = datta._id

    const[starget , setStarget] = useState([])

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() =>{

      fetch(`http://localhost:5000/winnn/data/${email}?key=${reactkey}`)
      .then(res => res.json())
      .then(info => setStar(info))

      fetch(`http://localhost:5000/star/tot/one/get/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStarget(info))

        fetch(`http://localhost:5000/user/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setData(info))

        fetch(`http://localhost:5000/way01/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(data => setWay(data))

        fetch(`http://localhost:5000/gif/won/data/${email1}?key=${reactkey}`)
      .then(res => res.json())
      .then(data => setWondata(data))



    },[])
    const [wondata, setWondata] = useState([]);
    const [starr, setStar] = useState([]);

    const Starlst = () =>{
      window.location.href = `/star/data?email=${email}`
    }

  return (
    <div>
      <Navibar />
      <Topn />
      <center>
        {user.email === email &&
        <div>
            <h2 className='pro-ti-nme'>Profile Page</h2>
            <div className='pro-cnt-02'>
              <div className='pro-cnt-07'> <img src={datta.picture} alt='user' /></div>
                 <div className='pro-cnt-08'>
                <div className='pro-cnt-03'>
                  <span> {datta.username}</span><br />
                </div>
                <div className='pro-cnt-03'>
                    <span> {datta.email}</span><br />
                </div>
                <div className='pro-fle-awe-icn-cnt-01'>
              {starget.map((user,i) =>{
                return(
                  <div key={i}>
                    <div onClick={Starlst} className='pro-str-cnt-02-mb'>
                      <strong className='pro-rnk-str-01'>{user.stars}</strong> <span className='pro-str-awe-icon-01'><FontAwesomeIcon icon={faStar}/></span>
                    </div>
                  </div>
                )
              })}
            </div>
                <div className='pro-cnt-03'>
                </div>
                </div> 
            </div>
            
            <div>
            {way.qno1 === "Yes" &&  <h1 className='pro-res-01'>Eliminated</h1> }
            {way.qno1 === "false" &&  <h1 className='pro-res-01'>Activity</h1> }
            {way.qno1 === "True" &&  <h1 className='pro-res-01'>Activity</h1> }
            
            {way.qno7 === "True" && <Link to='/clainre' className='pr-cln-lnk'>Way To Claim Rewards</Link>}
            
              <div className='pro-cnt-04'>
                  {way.qno1 === "false" && <div className='pro-cnt-09'> <span className='pro-tru'>1st</span></div> }
                  {way.qno1 === "True" && <div className='pro-cnt-05'> <span className='pro-tru'>1st</span></div> }
                  {way.qno1 === "Out" && <div className='pro-cnt-06'> <span className='pro-fls'>1st</span></div>}
                  {way.qno2 === "True" && 
                  <div>
                    {way.qno1 === "Yes" && <div className='pro-cnt-05'> <span className='pro-fls'>1st</span></div>}
                  </div> }

                  {way.qno2 === "false" && 
                  <div>
                    {way.qno1 === "Yes" && <div className='pro-cnt-06'> <span className='pro-fls'>1st</span></div>}
                  </div> }

                  {way.qno2 === "Out" && 
                  <div>
                    {way.qno1 === "Yes" && <div className='pro-cnt-05'> <span className='pro-fls'>1st</span></div>}
                  </div> }
                  <br />


                  {way.qno2 === "True" && <div className='pro-cnt-05'> <span className='pro-tru'>2nd</span></div> }
                  {way.qno2 === "false" && <div className='pro-cnt-09'> <span className='pro-tru'>2nd</span></div> }
                  {way.qno2 === "Out" && <div className='pro-cnt-06'> <span className='pro-fls'>2nd</span></div>}<br />

                  {way.qno3 === "True" && <div className='pro-cnt-05'> <span className='pro-tru'>3rd</span></div> }
                  {way.qno3 === "false" && <div className='pro-cnt-09'> <span className='pro-tru'>3rd</span></div> }
                  {way.qno3 === "Out" && <div className='pro-cnt-06'> <span className='pro-fls'>3rd</span></div>}<br />
                

                  {way.qno4 === "True" && <div className='pro-cnt-05'> <span className='pro-tru'>4th</span></div> }
                  {way.qno4 === "false" && <div className='pro-cnt-09'> <span className='pro-tru'>4th</span></div> }
                  {way.qno4 === "Out" && <div className='pro-cnt-06'> <span className='pro-fls'>4th</span></div>}<br />
                

                  {way.qno5 === "True" && <div className='pro-cnt-05'> <span className='pro-tru'>5th</span></div> }
                  {way.qno5 === "false" && <div className='pro-cnt-09'> <span className='pro-tru'>5th</span></div> }
                  {way.qno5 === "Out" && <div className='pro-cnt-06'> <span className='pro-fls'>5th</span></div>}<br />
                </div>
                <div className='pro-cnt-04'>
                  {way.qno6 === "True" && <div className='pro-cnt-05'> <span className='pro-tru'>6th</span></div> }
                  {way.qno6 === "false" && <div className='pro-cnt-09'> <span className='pro-tru'>6th</span></div> }
                  {way.qno6 === "Out" && <div className='pro-cnt-06'> <span className='pro-fls'>6th</span></div>}<br />

                  {way.qno7 === "True" && <div className='pro-cnt-05'> <span className='pro-tru'>7th</span></div> }
                  {way.qno7 === "false" && <div className='pro-cnt-09'> <span className='pro-tru'>7th</span></div> }
                  {way.qno7 === "Out" && <div className='pro-cnt-06'> <span className='pro-fls'>7th</span></div>}<br />
                
                  {way.qno8 === "True" && <div className='pro-cnt-05'> <span className='pro-tru'>8th</span></div> }
                  {way.qno8 === "false" && <div className='pro-cnt-09'> <span className='pro-tru'>8th</span></div> }
                  {way.qno8 === "Out" && <div className='pro-cnt-06'> <span className='pro-fls'>8th</span></div>}<br />
                
                  {way.qno9 === "True" && <div className='pro-cnt-05'> <span className='pro-tru'>9th</span></div> }
                  {way.qno9 === "false" && <div className='pro-cnt-09'> <span className='pro-tru'>9th</span></div> }
                  {way.qno9 === "Out" && <div className='pro-cnt-06'> <span className='pro-fls'>9th</span></div>}<br />
                
                  {way.qno10 === "True" && <div className='pro-cnt-05'> <span className='pro-tru'>10th</span></div> }
                  {way.qno10 === "false" && <div className='pro-cnt-09'> <span className='pro-tru'>10th</span></div> }
                  {way.qno10 === "Out" && <div className='pro-cnt-06'> <span className='pro-fls'>10th</span></div>}<br />
              
              </div>
              
            </div>
            <div className='pro-cupn-cnt-01-div-01'>
              {wondata.map((user) => {
                return(
                  <div className='viw-cnt--pro-01'>
                    <snap className='viw-cnt-01-snap-01'>{user.rank} Rank</snap><br />
                    <snap className='viw-cnt-01-snap-02'>{user.gifname}</snap><br />
                    <div className='viw-cnt-02'>
                      <img src={user.gifimgurl} alt='img' />
                    </div>
                    <snap className='viw-cnt-01-snap-03'>{user.giftime}</snap>
                  </div>
                )
              })}
            </div>
        </div> }
      </center>
    </div>
  )
}

export default Hoc(Profile);
