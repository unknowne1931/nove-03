import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navibar from './navibar';
import Topn from './topnme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Starlst = () => {
    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(() =>{
        fetch(`http://localhost:5000/winnn/data/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setData(info))
    }, [])

    const [data, setData] = useState([])

  return (
    <div>
        <Navibar/>
        <Topn/>
      <center>
        <div>
            {data.map((user,i) => {
                if(user.star === "5"){
                    return(
                        <div>
                            <div className='str-lst-cnt-02'>
                                <span className='str-lst-cnt-02-spn-01'>stars {user.star}</span><br />
                                <span className='str-lst-cnt-02-spn-02'>Time : {user.Time}</span>
                                <div><FontAwesomeIcon className='star-clo-01' icon={faStar} /> <FontAwesomeIcon className='star-clo-02' icon={faStar} /> <FontAwesomeIcon className='star-clo-03' icon={faStar} /> <FontAwesomeIcon className='star-clo-04' icon={faStar} /> <FontAwesomeIcon className='star-clo-05' icon={faStar} /></div>
                            </div>
                        </div>
                    )
                }else if(user.star === "4"){
                    return(
                        <div>
                            <div className='str-lst-cnt-02'>
                                <span className='str-lst-cnt-02-spn-03'>stars {user.star}</span><br />
                                <span className='str-lst-cnt-02-spn-04'>Time : {user.Time}</span>
                            </div>
                        </div>
                    )
                }
                else if(user.star === "3"){
                    return(
                        <div>
                            <div className='str-lst-cnt-02'>
                                <span className='str-lst-cnt-02-spn-05'>stars {user.star}</span><br />
                                <span className='str-lst-cnt-02-spn-06'>Time : {user.Time}</span>
                            </div>
                        </div>
                    )
                }
                else if(user.star === "2"){
                    return(
                        <div>
                            <div className='str-lst-cnt-02'>
                                <span className='str-lst-cnt-02-spn-07'>stars {user.star}</span><br />
                                <span className='str-lst-cnt-02-spn-08'>Time : {user.Time}</span>
                            </div>
                        </div>
                    )
                }
                else if(user.star === "1"){
                    return(
                        <div>
                            <div className='str-lst-cnt-02'>
                                <span className='str-lst-cnt-02-spn-09'>star {user.star}</span><br />
                                <span className='str-lst-cnt-02-spn-010'>Time : {user.Time}</span>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
      </center>
    </div>
  )
}

export default (Starlst);
