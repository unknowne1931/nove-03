import React,{ useState, useEffect, createContext} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MyForm from './add'
import Hom from './hm'
import axios from 'axios'
import Home from './home'
import Elim from './elim'
import Profile from './profile'
import Sel from './sel'
import Way from './way'
import Way1 from './way1'
import Varia from './lnn1'
import MyForm2 from './add2'
import Error from './error'
import Ques02 from './questions2'
import Varia2 from './lnn2'
import MyForm3 from './add3'
import Ques03 from './question3'
import Varia3 from './lnn3'
import MyForm4 from './add4'
import Ques04 from './question4'
import Varia4 from './Lnn4'
import MyForm5 from './add5'
import Ques05 from './question05'
import Varia5 from './lnn5'
import MyForm6 from './add6'
import Ques06 from './question06'
import Varia6 from './lnn6'
import MyForm7 from './add7'
import Ques07 from './question7'
import Varia7 from './lnn7'
import MyForm8 from './add8'
import Ques08 from './question8'
import Varia8 from './lnn8'
import Won from './won'
import Trid from './trid'
import Gamecnt from './gamecnt'
import Winpage from './winpage'
import Bottompg from './botton'
import Prizecheck from './prizecheck'
import Addprizes from './addprizes'
import Prizeslst from './prizeslst'
import Paymnt from './paymnt'
import Login from './login'
import DeleteButton from './del1'
import DeleteButton2 from './del2'
import DeleteButton3 from './del3'
import DeleteButton4 from './del4'
import DeleteButton5 from './del5'
import DeleteButton6 from './del6'
import DeleteButton7 from './del7'
import DeleteButton8 from './del8'
import Clainre from './clainre'
import Terms from './terms'
import Wayka2 from './wayka2'
import Kanva1 from './kanq/lnkan.js'
import Kanva2 from './kanq/lnkan2.js'
import Kanva3 from './kanq/lnkan3'
import Kanva4 from './kanq/lnkan4'
import Kanva5 from './kanq/lnkan5'
import Kanva6 from './kanq/lnkan6'
import Kanva7 from './kanq/lnkan7'
import Kanva8 from './kanq/lnkan8'
import Add1 from './kannada/add1'
import Add2 from './kannada/add2'
import Add3 from './kannada/add3'
import Add4 from './kannada/add4'
import Add5 from './kannada/add5'
import Add6 from './kannada/add6'
import Add7 from './kannada/add7'
import Add8 from './kannada/add8'
import Adminbr from './adminbr'
import Kansh1 from './kannquesh/kansh1'
import Kansh2 from './kannquesh/kansh2'
import Kansh3 from './kannquesh/kansh3'
import Kansh4 from './kannquesh/kansh4'
import Kansh5 from './kannquesh/kansh5'
import Kansh6 from './kannquesh/kansh6'
import Kansh7 from './kannquesh/kansh7'
import Kansh8 from './kannquesh/kansh8'
import Kandel1 from './kandel/kandel1'
import Kandel2 from './kandel/kandel2'
import Kandel3 from './kandel/kandel3'
import Kandel4 from './kandel/kandel4'
import Kandel5 from './kandel/kandel5'
import Kandel6 from './kandel/kandel6'
import Kandel7 from './kandel/kandel7'
import Kandel8 from './kandel/kandel8'
import Starlst from './starlst'
import Cupon from './cupon'
import Addcoupon from './addcoupon'
import Cnfcoin from './cnfcoin'




export const ipp3 = createContext();
export const store = createContext();
export const store2 = createContext();
export const role = createContext(); 
export const time = createContext();
export const pcmobile = createContext();

const App = () => {

  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [ipadr, setIPaddr] = useState([]);
  
  axios.defaults.withCredentials = true;

    useEffect(()=> {
        fetch(`http://localhost:5000?key=${reactkey}`)
        .then(datta => datta.json())
        .then(datas => setData(datas))
        .catch(error => console.error("Data not foundd ", error))

        fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(ipadr => setIPaddr(ipadr.ip))

        axios.get(`http://localhost:5000/valid?key=${reactkey}`)
      .then(user => {
        setUser(user.data);
      })
      .catch(err => console.log(err))      

    },[])

    const reactkey = process.env.REACT_APP_API_KEY

  return (
    <div>
      <store.Provider value={[data, setData]}>
      <store2.Provider value={user}>
        <ipp3.Provider value={ipadr} >
      <BrowserRouter>
      <Routes>

        <Route path='/star/data' element={<Starlst/>}/>

        <Route path='/kand/del1' element={<Kandel1/>}/>
        <Route path='/kand/del2' element={<Kandel2/>}/>
        <Route path='/kand/del3' element={<Kandel3/>}/>
        <Route path='/kand/del4' element={<Kandel4/>}/>
        <Route path='/kand/del5' element={<Kandel5/>}/>
        <Route path='/kand/del6' element={<Kandel6/>}/>
        <Route path='/kand/del7' element={<Kandel7/>}/>
        <Route path='/kand/del8' element={<Kandel8/>}/>

        <Route path='/kand/01' element={<Kansh1/>}/>
        <Route path='/kand/02' element={<Kansh2/>}/>
        <Route path='/kand/03' element={<Kansh3/>}/>
        <Route path='/kand/04' element={<Kansh4/>}/>
        <Route path='/kand/05' element={<Kansh5/>}/>
        <Route path='/kand/06' element={<Kansh6/>}/>
        <Route path='/kand/07' element={<Kansh7/>}/>
        <Route path='/kand/08' element={<Kansh8/>}/>

        <Route path='/admin' element={<Adminbr/>}/>
        <Route path='/kanna' element={<Kanva1/>}/>
        <Route path='/kanna/02' element={<Kanva2 />} />
        <Route path='/kanna/03' element={<Kanva3 />} />
        <Route path='/kanna/04' element={<Kanva4 />} />
        <Route path='/kanna/05' element={<Kanva5 />} />
        <Route path='/kanna/06' element={<Kanva6 />} />
        <Route path='/kanna/07' element={<Kanva7 />} />
        <Route path='/kanna/08' element={<Kanva8 />} />
      <Route path='/addkan' element={<Add1/>}/>
      <Route path='/addkan2' element={<Add2/>}/>
      <Route path='/addkan3' element={<Add3/>}/>
      <Route path='/addkan4' element={<Add4/>}/>
      <Route path='/addkan5' element={<Add5/>}/>
      <Route path='/addkan6' element={<Add6/>}/>
      <Route path='/addkan7' element={<Add7/>}/>
      <Route path='/addkan8' element={<Add8/>}/>
      <Route path='/two' element={<Wayka2 />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/clainre' element={<Clainre />} />
      <Route path='/delet8' element={<DeleteButton8/>} />
      <Route path='/delet7' element={<DeleteButton7/>} />
      <Route path='/delet6' element={<DeleteButton6/>} />
      <Route path='/delet5' element={<DeleteButton5/>} />
      <Route path='/delet4' element={<DeleteButton4/>} />
      <Route path='/delet3' element={<DeleteButton3/>} />
        <Route path='/delet2' element={<DeleteButton2/>}/>
        <Route path='/delet' element={<DeleteButton/>}/>
        <Route path='/payment' element={<Paymnt/>}/>
        <Route path='/rewards' element={<Prizeslst />}/>
        <Route path='/addgif' element={<Addprizes />} />
        <Route path='/prize' element={<Prizecheck />} />
        <Route path='/bottom' element={<Bottompg/>}/>
        <Route path='/winpage' element={<Winpage />} />
        <Route path='/game' element={<Gamecnt />} />
        <Route path='/tranid' element={<Trid />} />
        <Route path='/congrats' element={<Won />} />
        <Route path='/gameon' element={<Varia />} />
        <Route path='/gameon/02' element={<Varia2 />} />
        <Route path='/gameon/03' element={<Varia3 />} />
        <Route path='/gameon/04' element={<Varia4 />} />
        <Route path='/gameon/05' element={<Varia5 />} />
        <Route path='/gameon/06' element={<Varia6 />} />
        <Route path='/gameon/07' element={<Varia7 />} />
        <Route path='/gameon/08' element={<Varia8 />} />
        <Route path='/select' element={<Sel />} />
        <Route path='/coin' element={<Cupon/>}/>
        <Route path='/addcoin' element={<Addcoupon/>}/>
        <Route path='/one' element={<Way1 />} /> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/qno' element={<Way />} />
        <Route path='/profile' element={<Profile />} />
        <Route path= '/cnfcoin' element={<Cnfcoin/>}/>
        <Route path='/question' element={<Hom/>} />
        <Route path='/question/02' element={<Ques02 />} />
        <Route path='/question/03' element={<Ques03 />} />
        <Route path='/question/04' element={<Ques04 />} />
        <Route path='/question/05' element={<Ques05 />} />
        <Route path='/question/06' element={<Ques06 />} />
        <Route path='/question/07' element={<Ques07 />} />
        <Route path='/question/08' element={<Ques08 />} />
        <Route path='/fired' element={<Elim />} />
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<MyForm />} />
        <Route path='/add2' element={<MyForm2 />} />   
        <Route path='/add3' element={<MyForm3 />}  />  
        <Route path='/add4' element={<MyForm4 />}  /> 
        <Route path='/add5' element={<MyForm5 />}  />
        <Route path='/add6' element={<MyForm6 />}  /> 
        <Route path='/add7' element={<MyForm7 />}  />  
        <Route path='/add8' element={<MyForm8 />}  />  
        <Route path='*' element={<Error />} />  
      </Routes>
      </BrowserRouter>
      </ipp3.Provider>
      </store2.Provider>
      </store.Provider>
    </div>
  )
}

export default App;
