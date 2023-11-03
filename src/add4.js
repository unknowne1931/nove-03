import React, { useState, useEffect, useContext } from 'react';
import Navibar from './navibar';
import { store2 } from './App';
import { useLocation } from 'react-router-dom';
import Hoc from './hoc';
import Topn from './topnme';


const MyForm4 = () => {

  const user = useContext(store2)

  const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    localStorage.setItem('email', email);

  const [formData, setFormData] = useState({
    qno:'',
    Question: '',
    img : '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch('http://localhost:5000/data/04', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        window.location.href =`/question/04?email=${email}`
      } else {
        alert("Data con't be ssaved")
      }
    } catch (error) {
        console.log(error)
    }
  };


  const [datta, setDatta] = useState([])

  const reactkey = process.env.REACT_APP_API_KEY

  useEffect(() =>{
    fetch(`http://localhost:5000/user/${email}?key=${reactkey}`)
    .then(res => res.json())
    .then(info => setDatta(info))
},[])

const Lstpg = () =>{
  window.location.href=`/question/04?email=${email}`
}
  return (
    <div>
      <Navibar />
      <Topn/>
      {datta.role === "admin" ?  
      <center>
        <button onClick={Lstpg} className='btn-admin-pnl-01'>Way Eng 04</button>
      {user.email === email ?  
    <form onSubmit={handleSubmit}>
      <h2>Way 04</h2>
      <div className='add-01-cnt'>
        <div className='add-02-cnt'>
          <span className='spn-01'>Question Number</span><br />
          <input className='in-put' type="number" name="qno" placeholder='Question Number' value={formData.qno} onChange={handleChange} required /><br />
        </div>
        <div className='add-02-cnt'>
          <span className='spn-01'>Question</span><br />
          <input className='in-put' type="text" name="Question" placeholder='Question' value={formData.Question} onChange={handleChange} required /><br />
        </div>
        <div className='add-02-cnt'>
          <span className='spn-01'>Image Link</span><br />
          <input className='in-put' type="link" name="img" placeholder='Image URL' onChange={handleChange} /><br />
        </div>
        <div className='add-02-cnt'>
          <span className='spn-01'>Option A</span><br />
          <input className='in-put' type="text" name="option1" placeholder='option 01' value={formData.option1} onChange={handleChange} required /><br />
        </div>
        <div className='add-02-cnt'>
          <span className='spn-01'>Option B</span><br />
          <input className='in-put' type="text" name="option2" placeholder='option 02' value={formData.option2} onChange={handleChange} required /><br />
        </div>
        <div className='add-02-cnt'>
          <span className='spn-01'>Option C</span><br />
          <input className='in-put' type="text" name="option3" placeholder='option 03' value={formData.option3} onChange={handleChange} required /><br />
        </div>
        <div className='add-02-cnt'>
          <span className='spn-01'>Option D</span> <br />
          <input className='in-put' type="text" name="option4" placeholder='option 04' value={formData.option4} onChange={handleChange} required /><br />
        </div>
        <div className='add-02-cnt'>
          <span className='spn-01'>Answer A B C D</span><br />
          <input className='in-put' type="text" name="answer" placeholder='Answer' value={formData.answer} onChange={handleChange} required /><br />
        </div>
        <button className='btn-1' type="submit">Submit</button>
      </div>
    </form>
    :
    <div></div>}
    </center>
    :
    <div>
    </div>}
    </div>
  );
};

export default Hoc(MyForm4);