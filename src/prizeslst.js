import React, { useEffect, useState } from 'react'
import Topn from './topnme'
import Navibar from './navibar'
import { Link } from 'react-router-dom'
import Hoc from './hoc'

const Prizeslst = () => {

    const [data , setData] = useState([])
    const [datta , setDatta] = useState([])

    const reactkey = process.env.REACT_APP_API_KEY

    useEffect(()=>{
        fetch(`http://localhost:5000/all/gif/data?key=${reactkey}`)
        .then(res => res.json())
        .then(dat => setData(dat))

        fetch(`http://localhost:5000/winnn/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setDatta(info))
    },[])
  return (
    <div><Navibar/>
        <Topn/>
        
      <center>
        <h2 className='prz-lst-title'>All Prizes</h2>
        <div>

            <div>
                {data.map((user, i) => {
                    return(
                        <div key={i} className='prz-all-dat-cnt-01'>
                            <span className='prz-cnt-01-snp'>{user.gifno}</span><br />
                            <span className='prz-cnt-02-snp'>{user.gifname}</span><br />
                            <div className='prz-cnt-01-img'>
                                <img src={user.gifimgurl} alt='img'/>
                            </div>
                            <span className='prz-cnt-03-span'>{user.giftime}</span>
                            <p className='prz-cnt-01-p'>{user.gifdisc}</p>
                            {datta.map((data, i) => {
                                if(data.no === user.gifno){
                                    return(
                                        <div key={i}>
                                            <span className='prz-clim-spn-01'> Claimed By <strong>{data.username}</strong></span>
                                        </div>
                                    )
                                }
                            })}                        
                        </div>
                    )
                })}
            </div>

        </div>
      </center>
    </div>
  )
}

export default Hoc(Prizeslst)
