import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ipp3, store2 } from './App'
import Navibar from './navibar'
import axios from 'axios'
import Hoc from './hoc'
import Topn from './topnme'



const Varia8 = () => {

  //timer from here

  const initialSeconds = parseInt(localStorage.getItem('remainingSeconds'), 10) || 15;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(false);

  const startTimer = () => {
    setRunning(true);
  };

  // Function to reset the timer
  const resetTimer = () => {
    setRunning(false);
    setSeconds(15);
    localStorage.setItem('remainingSeconds', 15);
  };



  const Exit = () =>{
    axios.post("http://localhost:5000/eleminate",{email, IP, qno, way})
          .then(res => {
            if(res.data.Status ==="OK") {
              window.location.href=`/fired?qno=${qno}&email=${email}&id=${wayy._id}`
            } else{
              alert("You Had Fired From Us, But You Have 2nd Chance due to Technical error")
            }
          })
  }

  //...timer 

  const IP = useContext(ipp3)
  const valid = useContext(store2)

  const [question, setQuestion] = useState([])
  const [wayy, setWay] = useState([])
  const way = wayy.way
  const [value1 , setValue1] = useState('A')
  const [value2 , setValue2] = useState('B')
  const [value3 , setValue3] = useState('C')
  const [value4 , setValue4] = useState('D')

  const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const qno = queryParm.get('qno')
    const email = queryParm.get('email')
    localStorage.setItem('email', email);

    const reactkey = process.env.REACT_APP_API_KEY

  useEffect(() => {

    startTimer()

    fetch(`http://localhost:5000/data/08/${qno}?key=${reactkey}`)
    .then(resp => resp.json())
    .then(datas => setQuestion(datas))

    fetch(`http://localhost:5000/way01/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(data => setWay(data))

    fetch(`http://localhost:5000/validd/${email}?key=${reactkey}`)
      .then(res => res.json())
      .then(ipadr => setDatta(ipadr))


    fetch(`http://localhost:5000/lang/get/${email}?key=${reactkey}`)
      .then(res => res.json())
      .then(data => setLang(data))


      fetch(`http://localhost:5000/way/${email}?key=${reactkey}`)
      .then(res => res.json())
      .then(info => setDattta(info))
  
      //timer

    let intervalId;

    if (running && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          localStorage.setItem('remainingSeconds', newSeconds);
          return newSeconds;
        });
      }, 1000); // Update the timer every 1000ms (1 second)
    }

    return () => {
      clearInterval(intervalId);
    };
    //timer

  }, [running, seconds])




  localStorage.setItem('countdownSeconds', seconds.toString());


  if(seconds === 0){
    Exit()
  }else if(seconds > 15){
    Exit()
  }

  ///timer

  
    const [dattta, setDattta] = useState([])

  const[datta, setDatta] = useState([])
  const [lang, setLang] = useState([])


  const [Good , setGood] = useState({
    Good : "Yes"
  })

  const Block = async (e) => {
    axios.post("http://localhost:5000/vall4/08",{value4, qno})
  }


  const [qno1 , setQno1] = useState({
    qno1: "True",
  })

  const [qno2 , setQno2] = useState({
    qno2: "True",
  })

  const [qno3 , setQno3] = useState({
    qno3: "True",
  })

  const [qno4 , setQno4] = useState({
    qno4: "True",
  })

  const [qno5 , setQno5] = useState({
    qno5: "True",
  })

  const [qno6 , setQno6] = useState({
    qno6: "True",
  })

  const [qno7 , setQno7] = useState({
    qno7: "True",
  })

  const [qno8 , setQno8] = useState({
    qno8: "True",
  })

  const [qno9 , setQno9] = useState({
    qno9: "True",
  })

  const [qno10 , setQno10] = useState({
    qno10: "True",
  })
  

  const True = async (e) => {
    if(qno === "1"){
        const response = await fetch(`http://localhost:5000/way01/put/${wayy._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(qno1),
        });
        
        if (response.ok) {
          console.log('Resource updated successfully');
          window.location.href = `/one?qno=2&email=${email}`
        } else {
          console.error('Failed to update resource');
        }

      
    }

    else if(qno === "2"){
        const response = await fetch(`http://localhost:5000/way01/put/${wayy._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(qno2),
        });

        if (response.ok) {
          console.log('Resource updated successfully');
          window.location.href = `/one?qno=3&email=${email}`
        } else {
          console.error('Failed to update resource');
        }
    }

    else if(qno === "3"){
      const response = await fetch(`http://localhost:5000/way01/put/${wayy._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(qno3),
        });

        if (response.ok) {
          console.log('Resource updated successfully');
          window.location.href = `/one?qno=4&email=${email}`
        } else {
          console.error('Failed to update resource');
        }
    }

    else if(qno === "4"){
      const response = await fetch(`http://localhost:5000/way01/put/${wayy._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(qno4),
        });

        if (response.ok) {
          console.log('Resource updated successfully');
          window.location.href = `/one?qno=5&email=${email}`
        } else {
          console.error('Failed to update resource');
        }
    }

    else if(qno === "5"){
      const response = await fetch(`http://localhost:5000/way01/put/${wayy._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(qno5),
        });

        if (response.ok) {
          console.log('Resource updated successfully');
          window.location.href = `/one?qno=6&email=${email}`
        } else {
          console.error('Failed to update resource');
        }
    }

    else if(qno === "6"){
      const response = await fetch(`http://localhost:5000/way01/put/${wayy._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(qno6),
        });

        if (response.ok) {
          console.log('Resource updated successfully');
          window.location.href = `/one?qno=7&email=${email}`
        } else {
          console.error('Failed to update resource');
        }
    }

    else if(qno === "7"){
      const response = await fetch(`http://localhost:5000/way01/put/${wayy._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(qno7),
        });

        if (response.ok) {
          console.log('Resource updated successfully');
          window.location.href = `/one?qno=8&email=${email}`
        } else {
          console.error('Failed to update resource');
        }
    }

    else if(qno === "8"){
      const response = await fetch(`http://localhost:5000/way01/put/${wayy._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(qno8),
        });

        if (response.ok) {
          console.log('Resource updated successfully');
          window.location.href = `/one?qno=9&email=${email}`
        } else {
          console.error('Failed to update resource');
        }
    }

    else if(qno === "9"){
      const response = await fetch(`http://localhost:5000/way01/put/${wayy._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(qno9),
        });

        if (response.ok) {
          console.log('Resource updated successfully');
          window.location.href = `/one?qno=10&email=${email}`
        } else {
          console.error('Failed to update resource');
        }
    }

    else if(qno === "10"){
      const response = await fetch(`http://localhost:5000/way01/put/${wayy._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(qno10),
        });

        if (response.ok) {
          window.location.href=  `/congrats?qno=1&email=${email}&id=${wayy._id}`
          console.log('Resource updated successfully');
        } else {
          console.error('Failed to update resource');
        }
    }
  }
  

  const Submitt1 = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/vall1/08",{value1, qno})
    .then(res => {
      if(res.data.Status === "200") {
        True()
      }
      else{
        axios.post("http://localhost:5000/eleminate",{email, IP, qno, way})
          .then(res => {
            if(res.data.Status ==="OK") {
              Block()
              window.location.href=`/fired?qno=${qno}&email=${email}&id=${wayy._id}`
            } else{
              alert("You Had Fired From Us, But You Have 2nd Chance due to Technical error")
            }
          })
      }
    }).catch(err => console.log(err))
  }

  const Submitt2 = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/vall2/08",{value2, qno})
    .then(res => {
      if(res.data.Status === "200") {
        True()
      }
      else{
        axios.post("http://localhost:5000/eleminate",{email, IP, qno, way})
          .then(res => {
            if(res.data.Status ==="OK") {
              Block()
              window.location.href=`/fired?qno=${qno}&email=${email}&id=${wayy._id}`
            } else{
              alert("You Had Fired From Us, But You Have 2nd Chance due to Technical error")
            }
          })
      }
    }).catch(err => console.log(err))
  }

  const Submitt3 = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/vall3/08",{value3, qno})
    .then(res => {
      if(res.data.Status === "200") {
        True()
      }
      else{
        axios.post("http://localhost:5000/eleminate",{email, IP, qno, way})
          .then(res => {
            if(res.data.Status ==="OK") {
              Block()
              window.location.href=`/fired?qno=${qno}&email=${email}&id=${wayy._id}`
            } else{
              alert("You Had Fired From Us, But You Have 2nd Chance due to Technical error")
            }
          })
      }
    }).catch(err => console.log(err))
  }

    const Submitt4 = (e) => {
      e.preventDefault();
      axios.post("http://localhost:5000/vall4/08",{value4, qno})
      .then(res => {
        if(res.data.Status === "200") {
          True()
        }else{
          axios.post("http://localhost:5000/eleminate",{email, IP, qno, way})
          .then(res => {
            if(res.data.Status ==="OK") {
              Block()
              window.location.href=`/fired?qno=${qno}&email=${email}&id=${wayy._id}`
            } else{
              alert("You Had Fired From Us, But You Have 2nd Chance due to Technical error")
            }
          })
        }
      }
        ).catch(err => console.log(err))
    }


  return(
    <div>
      {seconds === 0 &&
      <Navibar /> }
        <Topn />
      {wayy.qno1 === "Yes" ?
      <div>
        <center>
          <h2>You Are Out Now </h2>
        </center>
      </div>
      :
      <div>
      {valid.email ? 
      <center>
        {question.map((data) => {
          return(
            <div key={data.id}>
              {lang.Lang === "English" && <div>
              {valid.email === email &&
              <div>
                <p>Time remaining: {seconds} seconds</p>
                {datta.valid === "Yes" && <div>
              <h2  name="qno">Question No : {data.qno}</h2>
              {dattta.way === "8" &&
              <h2  name="question" className='hom-01-h2'>{data.Question}</h2>
              }
              {data.img !== "" &&
              <div>
                <div className='que-img-i-thnk'>
                  <img src={data.img} alt='img'/>
                </div>
              </div>
              }
              {dattta.way === "8" &&
              <div className='que-01-cont'>  
                <form onSubmit={Submitt1}>
                  <button onClick={resetTimer} onChange={(e) => setValue1(e.target.value)} type='submit' className='hom-btn1' name='value' >{data.option1}</button>
                </form>
                <form onSubmit={Submitt2} >
                  <button onClick={resetTimer} onChange={(e) => setValue2(e.target.value)} type='submit' className='hom-btn1' name='value' >{data.option2}</button>
                </form></div>}
                {dattta.way === "8" &&
                <div className='que-01-cont'>
                  <form onSubmit={Submitt3} >
                    <button onClick={resetTimer} onChange={(e) => setValue3(e.target.value)} type='submit' className='hom-btn1' name='value' >{data.option3}</button>
                  </form>
                  <form onSubmit={Submitt4} >
                    <button onClick={resetTimer} onChange={(e) => setValue4(e.target.value)}  type='submit' className='hom-btn1' name='value' >{data.option4}</button>
                  </form>
                </div>}
                </div>}
                </div>}
              </div>}
            </div>
          )
        })}
      </center>
      :
      <div>
        
      </div>
        }</div>
        }
    </div>
  )
    
}

export default Hoc(Varia8);