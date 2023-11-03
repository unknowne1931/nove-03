import React, { useEffect, useState } from 'react'
import Hoc from './hoc'
import { useLocation } from 'react-router-dom'
import Navibar from './navibar'
import Topn from './topnme'

const Elim = () => {

  const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const qno = queryParm.get('qno')
    const email = queryParm.get('email')
    const id = queryParm.get('id')
    localStorage.setItem('email', email);


    const [question, setQuestion] = useState([])
  const [wayy, setWay] = useState([])

  const reactkey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`http://localhost:5000/data/${qno}?key=${reactkey}`)
    .then(resp => resp.json())
    .then(datas => setQuestion(datas))

    fetch(`http://localhost:5000/way01/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(dat => {
      setWay(dat.wayy)
    })

    Elim()
  },[])


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
  

  const Elim = async (e) => {
    if(qno === "1"){
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

      
    }

    else if(qno === "2"){
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
    }

    else if(qno === "3"){
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
    }

    else if(qno === "4"){
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
    }

    else if(qno === "5"){
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
    }

    else if(qno === "6"){
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
    }

    else if(qno === "7"){
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
    }

    else if(qno === "8"){
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
    }

    else if(qno === "9"){
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
    }

    else if(qno === "10"){
    
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
    }
  }

  
  return (
    <div>
      <Navibar/>
      <center>
      <Topn />
        <div>
          <div>
            <h1 className='elim-div-cnt-01-h1-tg'>You'r Eliminated</h1>
            <div className='elim-div-cnt-alrt-img'>
              <img src='https://static.vecteezy.com/system/resources/previews/017/172/375/original/warning-message-concept-represented-by-exclamation-mark-icon-exclamation-symbol-in-circle-png.png' alt='alert Image' />
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default Hoc(Elim);
