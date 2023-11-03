import React, { useContext, useState, useEffect } from 'react';
import Navibar from './navibar';
import { store2, ipp3, pcmobile } from './App';
import axios from 'axios';
import Hoc from './hoc';
import Topn from './topnme';
import { useLocation } from 'react-router-dom';

const Sel = () => {

  const ip = useContext(ipp3)
    const user = useContext(store2)
    const initialSeconds = parseInt(localStorage.getItem('remainingSeconds'), 10) || 15;
    const [seconds, setSeconds] = useState(initialSeconds);

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')

    localStorage.setItem('email', email);

  const[validd, setValid] = useState([])

  const reactkey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`http://localhost:5000/validd/${email}?key=${reactkey}`)
      .then(res => res.json())
      .then(ipadr => setValid(ipadr))
  }, [])


  const [wayy, setRandomWords] = useState([]);

  const words = [
    1,2,3,4,5,6,7,8
  ] 


  const Index =1;
  const way = wayy[0];

  const generateRandomWords = () => {  
    const randomSelection = [];
    while (randomSelection.length < 1) {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      if (!randomSelection.includes(randomWord)) {
        randomSelection.push(randomWord);
      }
    }
    setRandomWords(randomSelection);
    console.log(randomSelection);
  };

  const valid = "Yes"

  const[trID, setTrID] = useState([])

  const handleEmailChange = (e) => {
    setTrID(e.target.value);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/way/email', {email})
    .then(res => {
      if(res.data.Status === "BAD"){
        axios.post('http://localhost:5000/validtr/id', {trID})
        .then(res => {
          if(res.data.Status === "BAD"){
            e.preventDefault();
        axios.post('http://localhost:5000/trid/id', {trID})
        .then(res => {
          if(res.data.Status === "OK"){
            axios.post("http://localhost:5000/select",{way,email, ip})
            .then(res => {
            if(res.data.Status === "OK") {
              axios.post("http://localhost:5000/way01",{way,email, ip})
              .then(resp => {
                if(resp.data.Status === "OK"){
                  axios.post('http://localhost:5000/validid/post',{email, valid, trID})
                  .then(ress => {
                    if(ress.data.Status === "OK"){
                      window.location.href='/'
                    }
                    else{
                      alert("Something Went Wrong Contact To Admin")
                      window.location.reload();
                    }
                  })
                  
                } else{
                  alert("Something Went wrong Contact to Admins")
                }
              })
            } else{
                window.location.href = "/"
            }
          })
          } else{
            alert("Not A Valid Transaction ID")
            window.location.reload();
          }
        })
          }else{
            alert("This ID Is Used By Someone")
          }
        })
        

      } else{
        localStorage.setItem('countdownSeconds', seconds.toString());
        localStorage.setItem('remainingSeconds', 15);
        window.location.href = `/qno?email=${email}`
      }
    })
  }


  const Payment = () =>{
    window.location.href='/payment'
  }


  return (
    <div>
      <Navibar />
    <div>
    {user.email ?
    <div>
      <Topn />
      {user.email === email &&
      <center>
        <div className='sel-cnt-01'>
          <form onSubmit={HandleSubmit}>

            {validd.valid === "Yes" ? <div><span className='sel-val-spn' >Best of Luck</span><br /><button className='btn-2' onClick={generateRandomWords} type="submit">Start</button></div> :
            <div className='sel-cnt-02'>
              <h2>Enter Transaction ID</h2><br />
              <input type='text' title='Enter Transaction ID' placeholder="Enter You'r Transaction ID" className='sel-trs-id' onChange={handleEmailChange} name='trID' required autoComplete='off' /><br />
              <button title='Click to start Game' className='btn-1' onClick={generateRandomWords} type="submit">Start</button>
            </div> }
          </form>
        </div>

        {validd.valid !== "Yes" &&
        <div className='sel-pym-th-01-cnt'>
          <button onClick={Payment} title='Payment' id='Payment'>Payment</button>
        </div>}
      </center>}
    </div>
    :
    <div>
    </div>
    }
    </div>
    </div>
  
  );
};

export default Hoc(Sel);