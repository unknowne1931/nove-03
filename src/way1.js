import React, {useState, useEffect, useContext} from 'react'
import { store2 } from './App'
import { useLocation } from 'react-router-dom'
import Hoc from './hoc'
import Topn from './topnme'


const Way1 = () => {

    const user = useContext(store2)
    const [datta, setDatta] = useState([])
    const [waay01 , setTrue] = useState([])
    const [question, setQuestion] = useState([])

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const qno = queryParm.get('qno')
    const email = queryParm.get('email')



    const reactkey = process.env.REACT_APP_API_KEY

  useEffect(() =>{
    fetch(`http://localhost:5000/way/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(info => setDatta(info))

    fetch(`http://localhost:5000/way01/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(data => setTrue(data))


    fetch(`http://localhost:5000/data/${qno}?key=${reactkey}`)
    .then(resp => resp.json())
    .then(datas => setQuestion(datas))

},[])

if(datta.way === "1"){


  if(waay01.qno1 === "false"){
      window.location.href=`/gameon?qno=1&email=${email}`
  }
  else if(waay01.qno2 === "false"){
      window.location.href=`/gameon?qno=2&email=${email}`
  }
  else if(waay01.qno3 === "false"){
      window.location.href=`/gameon?qno=3&email=${email}`
  }
  else if(waay01.qno4 === "false"){
      window.location.href=`/gameon?qno=4&email=${email}`
  }
  else if(waay01.qno5 === "false"){
      window.location.href=`/gameon?qno=5&email=${email}`
  }
  else if(waay01.qno6 === "false"){
    window.location.href=`/gameon?qno=6&email=${email}`
  }
  else if(waay01.qno7 === "false"){
    window.location.href=`/gameon?qno=7&email=${email}`
  }
  else if(waay01.qno8 === "false"){
    window.location.href=`/gameon?qno=8&email=${email}`
 }
 else if(waay01.qno9 === "false"){
  window.location.href=`/gameon?qno=9&email=${email}`
}
else if(waay01.qno10 === "false"){
  window.location.href=`/gameon?qno=10&email=${email}`
} else if(waay01.qno10 === "True"){
  window.location.href=`/congrats?email=${email}&id=${waay01._id}`
}


}

else if(datta.way === "2"){
  
  if(waay01.qno1 === "false"){
    window.location.href=  `/gameon/02?qno=1&email=${email}`
}
else if(waay01.qno2 === "false"){
    window.location.href= `/gameon/02?qno=2&email=${email}`
}
else if(waay01.qno3 === "false"){
    window.location.href= `/gameon/02?qno=3&email=${email}`
}
else if(waay01.qno4 === "false"){
    window.location.href= `/gameon/02?qno=4&email=${email}`
}
else if(waay01.qno5 === "false"){
    window.location.href= `/gameon/02?qno=5&email=${email}`
}

else if(waay01.qno6 === "false"){
  window.location.href= `/gameon/02?qno=6&email=${email}`
}
else if(waay01.qno7 === "false"){
  window.location.href= `/gameon/02?qno=7&email=${email}`
}
else if(waay01.qno8 === "false"){
  window.location.href= `/gameon/02?qno=8&email=${email}`
}
else if(waay01.qno9 === "false"){
  window.location.href= `/gameon/02?qno=9&email=${email}`
}

else if(waay01.qno10 === "false"){
  window.location.href= `/gameon/02?qno=10&email=${email}`
} 
else if(waay01.qno10 === "True"){
  window.location.href=`/congrats?email=${email}&id=${waay01._id}`
}

}


else if(datta.way === "3"){
  
  if(waay01.qno1 === "false"){
    window.location.href=`/gameon/03?qno=1&email=${email}`
}
else if(waay01.qno2 === "false"){
    window.location.href=`/gameon/03?qno=2&email=${email}`
}
else if(waay01.qno3 === "false"){
    window.location.href=`/gameon/03?qno=3&email=${email}`
}
else if(waay01.qno4 === "false"){
    window.location.href=`/gameon/03?qno=4&email=${email}`
}
else if(waay01.qno5 === "false"){
    window.location.href=`/gameon/03?qno=5&email=${email}`
}

else if(waay01.qno6 === "false"){
  window.location.href=`/gameon/03?qno=6&email=${email}`
}
else if(waay01.qno7 === "false"){
  window.location.href=`/gameon/03?qno=7&email=${email}`
}
else if(waay01.qno8 === "false"){
  window.location.href=`/gameon/03?qno=8&email=${email}`
}
else if(waay01.qno9 === "false"){
  window.location.href=`/gameon/03?qno=9&email=${email}`
}
else if(waay01.qno10 === "false"){
  window.location.href=`/gameon/03?qno=10&email=${email}`
}
else if(waay01.qno10 === "True"){
  window.location.href=`/congrats?email=${email}&id=${waay01._id}`
}

}


else if(datta.way === "4"){
  
  if(waay01.qno1 === "false"){
    window.location.href=`/gameon/04?qno=1&email=${email}`
}
else if(waay01.qno2 === "false"){
    window.location.href=`/gameon/04?qno=2&email=${email}`
}
else if(waay01.qno3 === "false"){
    window.location.href=`/gameon/04?qno=3&email=${email}`
}
else if(waay01.qno4 === "false"){
    window.location.href=`/gameon/04?qno=4&email=${email}`
}
else if(waay01.qno5 === "false"){
    window.location.href=`/gameon/04?qno=5&email=${email}`
}
else if(waay01.qno6 === "false"){
  window.location.href=`/gameon/04?qno=6&email=${email}`
}
else if(waay01.qno7 === "false"){
  window.location.href=`/gameon/04?qno=7&email=${email}`
}
else if(waay01.qno8 === "false"){
  window.location.href=`/gameon/04?qno=8&email=${email}`
}
else if(waay01.qno9 === "false"){
  window.location.href=`/gameon/04?qno=9&email=${email}`
}
else if(waay01.qno10 === "false"){
  window.location.href=`/gameon/04?qno=10&email=${email}`
}
else if(waay01.qno10 === "True"){
  window.location.href=`/congrats?email=${email}&id=${waay01._id}`
}

}

else if(datta.way === "5"){
  
  if(waay01.qno1 === "false"){
    window.location.href=`/gameon/05?qno=1&email=${email}`
}
else if(waay01.qno2 === "false"){
    window.location.href=`/gameon/05?qno=2&email=${email}`
}
else if(waay01.qno3 === "false"){
    window.location.href=`/gameon/05?qno=3&email=${email}`
}
else if(waay01.qno4 === "false"){
    window.location.href=`/gameon/05?qno=4&email=${email}`
}
else if(waay01.qno5 === "false"){
    window.location.href=`/gameon/05?qno=5&email=${email}`
}
else if(waay01.qno6 === "false"){
  window.location.href=`/gameon/05?qno=6&email=${email}`
}
else if(waay01.qno7 === "false"){
  window.location.href=`/gameon/05?qno=7&email=${email}`
}
else if(waay01.qno8 === "false"){
  window.location.href=`/gameon/05?qno=8&email=${email}`
}
else if(waay01.qno9 === "false"){
  window.location.href=`/gameon/05?qno=9&email=${email}`
}
else if(waay01.qno10 === "false"){
  window.location.href=`/gameon/05?qno=10&email=${email}`
}

else if(waay01.qno10 === "True"){
  window.location.href=`/congrats?email=${email}&id=${waay01._id}`
}


}

else if(datta.way === "6"){
  
  if(waay01.qno1 === "false"){
    window.location.href=`/gameon/06?qno=1&email=${email}`
}
else if(waay01.qno2 === "false"){
    window.location.href=`/gameon/06?qno=2&email=${email}`
}
else if(waay01.qno3 === "false"){
    window.location.href=`/gameon/06?qno=3&email=${email}`
}
else if(waay01.qno4 === "false"){
    window.location.href=`/gameon/06?qno=4&email=${email}`
}
else if(waay01.qno5 === "false"){
    window.location.href=`/gameon/06?qno=5&email=${email}`
}
else if(waay01.qno6 === "false"){
  window.location.href=`/gameon/06?qno=6&email=${email}`
}
else if(waay01.qno7 === "false"){
  window.location.href=`/gameon/06?qno=7&email=${email}`
}
else if(waay01.qno8 === "false"){
  window.location.href=`/gameon/06?qno=8&email=${email}`
}
else if(waay01.qno9 === "false"){
  window.location.href=`/gameon/06?qno=9&email=${email}`
}
else if(waay01.qno10 === "false"){
  window.location.href=`/gameon/06?qno=10&email=${email}`
}

else if(waay01.qno10 === "True"){
  window.location.href=`/congrats?email=${email}&id=${waay01._id}`
}

}

else if(datta.way === "7"){
  
  if(waay01.qno1 === "false"){
    window.location.href=`/gameon/07?qno=1&email=${email}`
}
else if(waay01.qno2 === "false"){
    window.location.href=`/gameon/07?qno=2&email=${email}`
}
else if(waay01.qno3 === "false"){
    window.location.href=`/gameon/07?qno=3&email=${email}`
}
else if(waay01.qno4 === "false"){
    window.location.href=`/gameon/07?qno=4&email=${email}`
}
else if(waay01.qno5 === "false"){
    window.location.href=`/gameon/07?qno=5&email=${email}`
}
else if(waay01.qno6 === "false"){
  window.location.href=`/gameon/07?qno=6&email=${email}`
}
else if(waay01.qno7 === "false"){
  window.location.href=`/gameon/07?qno=7&email=${email}`
}
else if(waay01.qno8 === "false"){
  window.location.href=`/gameon/07?qno=8&email=${email}`
}
else if(waay01.qno9 === "false"){
  window.location.href=`/gameon/07?qno=9&email=${email}`
}
else if(waay01.qno10 === "false"){
  window.location.href=`/gameon/07?qno=10&email=${email}`
}

else if(waay01.qno10 === "True"){
  window.location.href=`/congrats?email=${email}&id=${waay01._id}`
}

}

else if(datta.way === "8"){
  
  if(waay01.qno1 === "false"){
    window.location.href=`/gameon/08?qno=1&email=${email}`
}
else if(waay01.qno2 === "false"){
    window.location.href=`/gameon/08?qno=2&email=${email}`
}
else if(waay01.qno3 === "false"){
    window.location.href=`/gameon/08?qno=3&email=${email}`
}
else if(waay01.qno4 === "false"){
    window.location.href=`/gameon/08?qno=4&email=${email}`
}
else if(waay01.qno5 === "false"){
    window.location.href=`/gameon/08?qno=5&email=${email}`
}
else if(waay01.qno6 === "false"){
  window.location.href=`/gameon/08?qno=6&email=${email}`
}
else if(waay01.qno7 === "false"){
  window.location.href=`/gameon/08?qno=7&email=${email}`
}
else if(waay01.qno8 === "false"){
  window.location.href=`/gameon/08?qno=8&email=${email}`
}
else if(waay01.qno9 === "false"){
  window.location.href=`/gameon/08?qno=9&email=${email}`
}
else if(waay01.qno10 === "false"){
  window.location.href=`/gameon/08?qno=10&email=${email}`
}

else if(waay01.qno10 === "True"){
  window.location.href=`/congrats?email=${email}&id=${waay01._id}`
}

}


  return (
    <div>
      <Topn/>
      {user.email ? 
      <div>
        <center>
        <h1 className='way-01'>Answer Verified</h1>
        <div>
          <div className='way01-cnt-01-img'>
            <img src='https://thumbs.dreamstime.com/b/green-verified-rubber-stamp-vector-illustration-isolated-white-background-90991065.jpg' alt='img'/>
          </div>
        </div>
        </center> 
      </div>
      : 
      <div></div>
      }
    </div>
  )
}

export default Hoc(Way1);
