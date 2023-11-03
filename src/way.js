import React,{useState, useEffect, useContext} from 'react'
import { store2 } from './App'
import Navibar from './navibar'
import './App.css'
import Hoc from './hoc'
import { useLocation } from 'react-router-dom'
import Topn from './topnme'
import axios from 'axios'

const Way = () => {
    const user = useContext(store2)
    const [datta, setDatta] = useState([]);
    const [lang, setLang] = useState([]);

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    localStorage.setItem('email', email);

    const reactkey = process.env.REACT_APP_API_KEY

  useEffect(() =>{
    fetch(`http://localhost:5000/way/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(info => setDatta(info))

    fetch(`http://localhost:5000/lang/get/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(info => setLang(info))
},[])
 
const Eng = () =>{
  const Lang = "English"
  axios.post("http://localhost:5000/lang/put/data",{email})
  .then(res =>{
    if(res.data.Status === "OK"){
      if(lang.Lang === "English"){
        if(datta.way === "1"){
          window.location.href = `/one?qno=1&email=${email}`
        } else if(datta.way === "2"){
          window.location.href=  `/one?qno=1&email=${email}`
        } else if(datta.way === "3"){
          window.location.href=  `/one?qno=1&email=${email}`
        } else if(datta.way === "4"){
          window.location.href=  `/one?qno=1&email=${email}`
        } else if(datta.way === "5"){
          window.location.href=  `/one?qno=1&email=${email}`
        } else if(datta.way === "6"){
          window.location.href=  `/one?qno=1&email=${email}`
        } else if(datta.way === "7"){
          window.location.href=  `/one?qno=1&email=${email}`
        } else if(datta.way === "8"){
          window.location.href=  `/one?qno=1&email=${email}`
        }
      }
    }else{
      const Lang = "English";
      axios.post("http://localhost:5000/lang/post/sel",{email, Lang})
      .then(res => {
        if(res.data.Status === "OK"){
          window.location.reload();
        }
      })
    }
  })
}

const Kan = () =>{
  const Lang = "Kannada"
  axios.post("http://localhost:5000/lang/put/data",{email})
  .then(res =>{
    if(res.data.Status === "OK"){
      if(lang.Lang === "Kannada"){
        if(datta.way === "1"){
          window.location.href = `/two?qno=1&email=${email}`
        } else if(datta.way === "2"){
          window.location.href=  `/two?qno=1&email=${email}`
        } else if(datta.way === "3"){
          window.location.href=  `/two?qno=1&email=${email}`
        } else if(datta.way === "4"){
          window.location.href=  `/two?qno=1&email=${email}`
        } else if(datta.way === "5"){
          window.location.href=  `/two?qno=1&email=${email}`
        } else if(datta.way === "6"){
          window.location.href=  `/two?qno=1&email=${email}`
        } else if(datta.way === "7"){
          window.location.href=  `/two?qno=1&email=${email}`
        } else if(datta.way === "8"){
          window.location.href=  `/two?qno=1&email=${email}`
        }
      }
    }else{
      const Lang = "Kannada";
      axios.post("http://localhost:5000/lang/post/sel",{email, Lang})
      .then(res => {
        if(res.data.Status === "OK"){
          window.location.reload();
        }
      })
    }
  })
}

  return (
    <div>
      <Navibar />
      <Topn/>
      <center>
        <div className='way-cnt-01'>
          <h2>Select <strong>your's <span>Language</span></strong></h2>
          <h1>Best of Luck</h1>
          <div className='way-cnt-02'>
            <button className='way-01-btn' onClick={Eng} title='English' >English</button>
            <button className='way-01-btn' onClick={Kan} title='kannada'>ಕನ್ನಡ</button>
          </div>
        </div>
      </center>
    </div>
  )
}

export default Hoc(Way);