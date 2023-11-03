import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Hoc from './hoc';
import Navibar from './navibar';
import { ipp3 } from './App';
import axios from 'axios';
import Topn from './topnme';
import Winn from './images/winstamp.png'

const Won = () => {


  const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    const id = queryParm.get('id')
    localStorage.setItem('email', email);

    const IP = useContext(ipp3);

    const [verify, setVerify] = useState([])

    const[count, setCount] = useState([])

    const no = count.dataLength+1

    const[prize, setPrize] = useState([]);
    const[prize5, setPrize5] = useState([]);
    const[prize4, setPrize4] = useState([]);
    const[prize3, setPrize3] = useState([]);
    const[prize2, setPrize2] = useState([]);
    const[prize1, setPrize1] = useState([]);
    const[starget , setStarget] = useState([]);
    const[cnfvl, setCnfvl] = useState([]);
    const [datta, setDatta] = useState([]);
    const[ wondt, setWondt] = useState([]);
    const[subm, setSubm] = useState(false)

    const reactkey = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        fetch(`http://localhost:5000/gif/data/${no}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setDatta(info))

        fetch(`http://localhost:5000/won/data/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setWondt(info))

    },[])

    useEffect(() => {
      fetch(`http://localhost:5000/way01/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setVerify(info))

        fetch(`http://localhost:5000/won/data/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => {
          setCnfvl(info)
        })

        fetch(`http://localhost:5000/star/tot/one/get/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setStarget(info))

        fetch(`http://localhost:5000/winnn/length?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setCount(info))

        fetch(`http://localhost:5000/prize/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setPrize(info))

        fetch(`http://localhost:5000/prize/05/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setPrize5(info))

        fetch(`http://localhost:5000/prize/04/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setPrize4(info))

        fetch(`http://localhost:5000/prize/03/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setPrize3(info))

        fetch(`http://localhost:5000/prize/02/data?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setPrize2(info))

        axios.get(`http://localhost:5000/prize/01/data?key=${reactkey}`)
        .then(res =>{
          setPrize1(res.data)
        })
        .catch(err => console.log(err))

        fetch(`http://localhost:5000/user/${email}?key=${reactkey}`)
        .then(res => res.json())
        .then(info => setData(info))

        WOnem();
    }, [])

    const [data, setData] = useState([])
    const username = data.username;    

    const [qno1 , setQno1] = useState({
      qno1: "Yes",
    })
  
    const [qno2 , setQno2] = useState({
      qno2: "Out",
    })
  
    const [qno3 , setQno3] = useState({
      qno3: "Out",
    })
  
    const [qno4 , setQno4] = useState({
      qno4: "Out",
    })
  
    const [qno5 , setQno5] = useState({
      qno5: "Out",
    })
  
    const [qno6 , setQno6] = useState({
      qno6: "Out",
    })
  
    const [qno7 , setQno7] = useState({
      qno7: "Out",
    })
  
    const [qno8 , setQno8] = useState({
      qno8: "Out",
    })
  
    const [qno9 , setQno9] = useState({
      qno9: "Out",
    })
  
    const [qno10 , setQno10] = useState({
      qno10: "Out",
    })

    const email1 = email;
      const gifno = datta.gifno;
      const gifname = datta.gifname;
      const gifdisc = datta.gifdisc;
      const gifimgurl = datta.gifimgurl;
      const giftime = datta.giftime;
      const rank = wondt.rank;

    const Submitt = (e) =>{
      {datta.map((user) =>{
        const email1 = email;
      const gifno = user.gifno;
      const gifname = user.gifname;
      const gifdisc = user.gifdisc;
      const gifimgurl = user.gifimgurl;
      const giftime = user.giftime;
      const rank = wondt.rank;
      e.preventDefault();
      axios.post("http://localhost:5000/gif/data/gifno",{rank})
      .then(res =>{
          if(res.data.Status === "BAD"){
            axios.post('http://localhost:5000/gif/won/data',{gifno, gifname,gifdisc, giftime, email1, gifimgurl,rank})
          .then(res => {
            if(res.data.Status === "OK"){
              window.location.location=`/prize?email=${email}&no=${rank}`
            }
            else{
              alert("Something Went Wrong")
            }
          })
        }
        else{
          window.location.location=`/profile?email=${email}`
        }
      })
    })}
    }
    
  
    const Elim1 = async (e) => {
      const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno1),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim2 = async (e) => {
      const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno2),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim3 = async (e) => {
      const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno3),
          });
           
          if (response.ok) {            
              const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim4 = async (e) => {
      const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno4),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim5 = async (e) => {
      const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno5),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim6 = async (e) => {
      const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno6),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim7 = async (e) => {
      const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno7),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim8 = async (e) => {
      const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno8),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim9 = async (e) => {
      const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno9),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim10 = async (e) => {
      const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno10),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://localhost:5000/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    function Run(){
      window.location.href=`/fired?email=${email}&id=${id}`
    }

    function WOnem(){
      axios.post('http://localhost:5000/won/id/check',{email})
      .then(res =>{
        if(res.data.Status === "OK"){
          setValtru(false);
          const no = wondt.rank;
          axios.post('http://localhost:5000/won/no/win/data',{no})
          .then(res =>{
            if(res.data.Status === "OK"){
              setTruee(false);
              axios.post("http://localhost:5000/gif/data/gifno",{rank})
              .then(res =>{
                if(res.data.Status === "OK"){
                  setSubm(false)
                }else{
                  setSubm(true)
                }
              })
            }else{
              setTruee(true);
            }
          })
          
        }else{
          setValtru(true);
        }
      })
    }

    function Won(){
      axios.post('http://localhost:5000/won/id/check',{email})
      .then(res => {
        if(res.data.Status === "OK"){
          const no = wondt.rank;
          window.location.href = `/prize?email=${email}&no=${no}`
        }
        else{
          const rank = count.dataLength+1;
          axios.post(`http://localhost:5000/won/rank/check`,{rank})
          .then(res =>{
            if(res.data.Status === "OK"){
              const rank = count.dataLength+2;
              axios.post("http://localhost:5000/won/match", {email , IP, rank})
              .then(res =>{   
                if(res.data.Status === "OK"){
                  Star();
                }else{
                  alert("something went wrong")
                }
              })
              window.location.reload();
            }else{
              const rank = count.dataLength+1;
              axios.post("http://localhost:5000/won/match" ,{email , IP, rank})
              .then(res => {
                if(res.data.Status === "OK"){
                  window.location.reload();
                }else{
                  alert("something went wrong")
                }
              })
            }
          })
        }
      })
    }

    const [valtru, setValtru] = useState(true);
    const [truee, setTruee] = useState(false);

    const Star = () =>{
      window.location.reload();
      const no = wondt.rank;
      {prize.map((user,i) =>{
        if(no <= user.total){
          const no = wondt.rank;
          axios.post("http://localhost:5000/won/no/win/data",{no})
          .then(res =>{
            if(res.data.Status === "BAD"){
              const star = "0"
              axios.post("http://localhost:5000/winnn",{email, IP, star, no, username})
              .then(res =>{
              if(res.data.Status === "OK"){
                window.location.reload();
              }
              })
            }else{
              window.location.reload();
            }
          })
        }else{
          Star5()
        }
      })}
    }

    const Star5 = () =>{
      const no = wondt.rank;
      {prize5.map((user,i) =>{
        if(no <= user.total){
          axios.post("http://localhost:5000/won/no/win/data",{no})
          .then(res =>{
            if(res.data.Status === "BAD"){
              const star = "5"
              axios.post("http://localhost:5000/winnn",{email, IP, star, no, username})
              .then(res =>{
              if(res.data.Status === "OK"){
                Add5()
              }
              }) 
            }else{
              window.location.reload();
            }
          })
        }else{
          Star4()
        }
      })}
    }
    const Add5 = () =>{
      axios.post("http://localhost:5000/chek/star",{email})
      .then(res=>{
        if(res.data.Status === "OK"){
          {starget.map((user) =>{
            const stars = parseInt(user.stars) + 5
            axios.put(`http://localhost:5000/star/tot/put/${user._id}`,{stars})
            .then(res => {
              if(res.data.Status === "OK"){
                window.location.reload();            
              }
            })
          })}
        }else{
          const stars = "5"
          axios.post("http://localhost:5000/star/tot", {email, stars})
          .then(res =>{
            if(res.data.Status === "OK"){
              window.location.reload();
            }else{
              alert("something went")
            }
          })
        }
      })      
    }

    const Star4 = () =>{
      const no = wondt.rank;
      {prize4.map((user,i) =>{
        if(no <= user.total){
          axios.post("http://localhost:5000/won/no/win/data",{no})
          .then(res =>{
            if(res.data.Status === "BAD"){
              const star = "4"
              axios.post("http://localhost:5000/winnn",{email, IP, star, no, username})
              .then(res =>{
              if(res.data.Status === "OK"){
                Add4()
              }
              }) 
            }else{
              window.location.reload();
            }
          })
        }
        else{
          Star3()
        }

      })}
    }
    const Add4 = () =>{
      axios.post("http://localhost:5000/chek/star",{email})
      .then(res=>{
        if(res.data.Status === "OK"){
          {starget.map((user) =>{
            const stars = parseInt(user.stars) + 4
            axios.put(`http://localhost:5000/star/tot/put/${user._id}`,{stars})
            .then(res => {
              if(res.data.Status === "OK"){
                window.location.reload();
              }
            })
          })}
        }else{
          const stars = "4"
          axios.post("http://localhost:5000/star/tot", {email, stars})
          .then(res =>{
            if(res.data.Status === "OK"){
              window.location.reload();
            }else{
              alert("something went")
            }
          })
        }
      })
    }


    const Star3 = () =>{
      const no = wondt.rank;
      {prize3.map((user,i) =>{
        if(no <= user.total){
          axios.post("http://localhost:5000/won/no/win/data",{no})
          .then(res =>{
            if(res.data.Status === "BAD"){
              const star = "3"
              axios.post("http://localhost:5000/winnn",{email, IP, star, no, username})
              .then(res =>{
              if(res.data.Status === "OK"){
                Add3()
              }
              }) 
            }else{
              window.location.reload();
            }
          })
        }else{
          Star2()
        }
      })}
    }
    const Add3 = () =>{
      axios.post("http://localhost:5000/chek/star",{email})
      .then(res=>{
        if(res.data.Status === "OK"){
          {starget.map((user) =>{
            const stars = parseInt(user.stars) + 3
            axios.put(`http://localhost:5000/star/tot/put/${user._id}`,{stars})
            .then(res => {
              if(res.data.Status === "OK"){
                window.location.reload();
              }
            })
          })}
        }else{
          const stars = "3"
          axios.post("http://localhost:5000/star/tot", {email, stars})
          .then(res =>{
            if(res.data.Status === "OK"){
              window.location.reload();
            }else{
              alert("something went")
            }
          })
        }
      })      
    }

    const Star2 = () =>{
      const no = wondt.rank;
      {prize2.map((user,i) =>{
        if(no <= user.total){
          axios.post("http://localhost:5000/won/no/win/data",{no})
          .then(res =>{
            if(res.data.Status === "BAD"){
              const star = "2"
              axios.post("http://localhost:5000/winnn",{email, IP, star, no, username})
              .then(res =>{
              if(res.data.Status === "OK"){
                Add2()
              }
              }) 
            }else{
              window.location.reload();
            }
          })
        }else{
          Star1()
        }
      })}
    }
    const Add2 = () =>{
      axios.post("http://localhost:5000/chek/star",{email})
      .then(res=>{
        if(res.data.Status === "OK"){
          {starget.map((user) =>{
            const stars = parseInt(user.stars) + 2
            axios.put(`http://localhost:5000/star/tot/put/${user._id}`,{stars})
            .then(res => {
              if(res.data.Status === "OK"){
                window.location.reload();
              }
            })
          })}
        }else{
          const stars = "2"
          axios.post("http://localhost:5000/star/tot", {email, stars})
          .then(res =>{
            if(res.data.Status === "OK"){
              window.location.reload();
            }else{
              alert("something went")
            }
          })
        }
      })      
    }

    const Star1 = () =>{
      const no = wondt.rank;
      {prize1.map((user,i) =>{
        if(no <= user.total){
          axios.post("http://localhost:5000/won/no/win/data",{no})
          .then(res =>{
            if(res.data.Status === "BAD"){
              const star = "1"
              axios.post("http://localhost:5000/winnn",{email, IP, star, no, username})
              .then(res =>{
              if(res.data.Status === "OK"){
                Add1()
              }
              }) 
            }else{
              window.location.reload();
            }
          })
        }else{
          window.location.reload()
        }
      })}
    }
    const Add1 = () =>{
      axios.post("http://localhost:5000/chek/star",{email})
      .then(res=>{
        if(res.data.Status === "OK"){
          {starget.map((user) =>{
            const stars = parseInt(user.stars) + 1
            axios.put(`http://localhost:5000/star/tot/put/${user._id}`,{stars})
            .then(res => {
              if(res.data.Status === "OK"){
                window.location.reload();
              }
            })
          })}

        }else{
          const stars = "1"
          axios.post("http://localhost:5000/star/tot", {email, stars})
          .then(res =>{
            if(res.data.Status === "OK"){
              window.location.reload();
            }else{
              alert("something went")
            }
          })
        }
      })      
    }


    /* */
  return (
    <div>
      <Navibar />
      {verify.qno10 === "Yes" ?  
      <div>
        <center>
        <h2>You Are Out Now </h2>
        </center>
      </div>
      :
      <div>
        <Navibar />
        <Topn/>
      <center>
        <h1 className='win-cnt-un-01-h1'> You Won The Match</h1>

        {verify.qno1 === "false" && Elim1()}
        {verify.qno1 === "Out" && Elim1()}
        {verify.qno2 === "false" && Elim2()}
        {verify.qno2 === "Out" && Elim2()}
        {verify.qno3 === "false" && Elim3()}
        {verify.qno3 === "Out" && Elim3()}
        {verify.qno4 === "false" && Elim4()}
        {verify.qno4 === "Out" && Elim4()}
        {verify.qno5 === "false" && Elim5()}
        {verify.qno5 === "Out" && Elim5()}
        {verify.qno6 === "false" && Elim6()}
        {verify.qno6 === "Out" && Elim6()}
        {verify.qno7 === "false" && Elim7()}
        {verify.qno7 === "Out" && Elim7()}
        {verify.qno8 === "false" && Elim8()}
        {verify.qno8 === "Out" && Elim8()}
        {verify.qno9 === "false" && Elim9()}
        {verify.qno9 === "Out" && Elim9()}
        {verify.qno10 === "false" && Elim10()}
        {verify.qno10 === "Out" && Elim10()}
        {verify.qno1 === "Yes" && Run()}
        {verify.qno1 === "True" && <div>

          {valtru && <button onClick={Won} className='btn-1' > Verify Answers </button> }

          {subm && <button onClick={Submitt} className='btn-1'> Claim Reward </button> }

          {truee && <button onClick={Star} className='btn-1'>Finish</button> }

          <div className='won-cnt-01-div-may-be-04-cnt-04-img'>
          <img src={Winn} alt='img'/>
          </div>
          </div>
          
          }
      </center>
      </div>
      }
    </div>
  )
}

export default Hoc(Won)