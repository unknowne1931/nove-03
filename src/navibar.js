import React, { useContext, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import staWro from './images/staWro.png'
import axios from 'axios'
import { store2 } from './App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad ,faRightFromBracket, faRightToBracket,faWonSign,faHouse, faExclamation,faUser, faPlay,faBars} from '@fortawesome/free-solid-svg-icons'

const Navibar = () => {

  const user = useContext(store2)

  
  const logout =() => {
    axios.get(`http://localhost:5000/logout?key=${reactkey}`)
    .then(res => {
      if(res.data === "Success")
      localStorage.removeItem('emaill');
      localStorage.removeItem('name');
      localStorage.removeItem('unam');
      localStorage.removeItem('picture');
      window.location.href='/login'
    }).catch(err => console.log(err))
  }

    const[datta, setData] = useState([]) 

    const email = localStorage.getItem('email');

    const reactkey = process.env.REACT_APP_API_KEY
    
    useEffect(() =>{
      fetch(`http://localhost:5000/user/${email}?key=${reactkey}`)
      .then(res => res.json())
      .then(dat => setData(dat))
    },[])

    const [menuStatus, setMenuStatus] = useState('closed');

    const reveal = () => {
      const menu = document.getElementById('menu');
      if (menuStatus === 'closed') {
        menu.style.display = 'block';
        setMenuStatus('open');
      } else {
        menu.style.display = 'none';
        setMenuStatus('closed');
      }
    };

    const [mmenuStatus, setMmenuStatus] = useState('closed');

    const Reveal = () => {
      const menu = document.getElementById('menuuu');
      if (mmenuStatus === 'closed') {
        menu.style.display = 'block';
        setMmenuStatus('open');
      } else {
        menu.style.display = 'none';
        setMmenuStatus('closed');
      }
    };

  return (
    <div>
      {user.email && 
      <div className="menuu">
      <FontAwesomeIcon className='menu-fntaws' icon={faBars} onClick={reveal} name={menuStatus === 'closed' ? 'menu-outline' : 'add'} />
      <div className="links" id="menu">
        <Link to='/' name="Home" className='navi-br-lnk-1'><FontAwesomeIcon icon={faHouse} /></Link>
        <Link to={`/profile?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faUser} /></Link>
        <Link to={`/select?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faPlay} /></Link>
        <Link to='/winpage' className='navi-br-lnk-1'><FontAwesomeIcon icon={faWonSign} /></Link>
        {datta.role !== "admin" && <Link onClick={logout} className='navi-br-lnk-1'  ><FontAwesomeIcon icon={faRightFromBracket} /></Link> }                      
        {datta.role === "admin"&& <div>
        <Link to={`/admin?email=${user.email}`} className='navi-br-lnk-1' ><FontAwesomeIcon icon={faGamepad} /></Link>
        <Link onClick={logout} className='navi-br-lnk-1'  ><FontAwesomeIcon icon={faRightFromBracket} /></Link>
        </div>}
      </div>
      </div>
      }
      
      <center>
      
      
        <div className='navi-cnt'>
          {datta.role !== "admin" &&
        <div className='tp-img-cnt-01'>
          <Link to='/'>
          <img className='logo-img' src={staWro} alt='Logo' />
          </Link>
        </div>
        }


            {
              user.email ? 

              <div  >
                <div className='navi-cnt-lnk'>

                <div className='navi-br-lnk-cnt-min'>
                <div className='navi-br-lnk-div'><Link to='/' className='navi-br-lnk'>Home</Link><br /></div>
                
                 <div className='navi-br-lnk-div'><Link to={`/select?email=${user.email}`} className='navi-br-lnk'>Play</Link><br /> </div>
                
                 <div className='navi-br-lnk-div'><Link to={`/profile?email=${user.email}`} className='navi-br-lnk'>Profile</Link> <br /> 
                 </div>

                 <div className='navi-br-lnk-div'><Link to='/winpage' className='navi-br-lnk'>Winners</Link> <br /> 
                 </div>

                
                 <div className='navi-br-lnk-div'><Link to='/terms' className='navi-br-lnk'>Terms</Link> <br /> 
                 </div>


                 {datta.role !== "admin" && <button onClick={logout} className='nav-br-bttn-01'  ><FontAwesomeIcon icon={faRightFromBracket} /></button>}  
                
                </div>

                <div className='navi-br-lnk-cnt-min-icon'>
                <div className='tp-img-cnt-01-adm-icon'>
                      <Link to='/'>
                        <img className='logo-img' src={staWro} alt='Logo' />
                      </Link>
                    </div>
                <div className='navi-br-lnk-div'><Link to='/' className='navi-br-lnk'><FontAwesomeIcon icon={faHouse} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/select?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faPlay} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/profile?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faUser} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to='/winpage' className='navi-br-lnk'><FontAwesomeIcon icon={faWonSign} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to='/terms' className='navi-br-lnk'><FontAwesomeIcon icon={faExclamation} /></Link><br /></div>
                {datta.role !== "admin" && <button onClick={logout} className='nav-br-bttn-01'  ><FontAwesomeIcon icon={faRightFromBracket} /></button>}
                </div>

                {datta.role === "admin" && <div className='navi-br-lnk-cnt-min-icon'>

                <div className='navi-br-lnk-div'>
                  <Link to={`/admin?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faGamepad} /></Link><br />
                </div>
                
                {datta.role === "admin" && <button onClick={logout} className='nav-br-bttn-01'  ><FontAwesomeIcon icon={faRightFromBracket} /></button>}
                </div>
                  }
                


                  {datta.role === "admin" ? 
                  <div className='navi-br-lnk-cnt-min'>
                    <div className='tp-img-cnt-01-adm'>
                      <Link to='/'>
                        <img className='logo-img' src={staWro} alt='Logo' />
                      </Link>
                    </div>
                      <div className='navi-br-lnk-div'>
                        <Link to={`/admin?email=${email}`} className='navi-br-lnk'>Panel</Link><br />
                      </div>
                      

                      <button onClick={logout} className='nav-br-bttn-01'  ><FontAwesomeIcon icon={faRightFromBracket} /></button>
  
                  
                  </div>
                  
                  :
                  
                  <div></div>
                  }
                </div>

                
              </div>
              :

            <div>
                <div className='navi-br-out-icn-not'>
                  <div className='navi-br-lnk-div'>
                    <Link to='/' className='navi-br-lnk'>Home</Link><br />
                  </div>
                  <div className='navi-br-lnk-div'>
                    <Link to='/login' className='navi-br-lnk'>Login</Link>
                  </div>
                  <div className='navi-br-lnk-div'>
                    <Link to='/terms' className='navi-br-lnk'>Terms</Link>
                  </div>
                </div>
                <div className="menuu">
                  <FontAwesomeIcon className='menu-fntaws1' icon={faBars} onClick={Reveal} name={mmenuStatus === 'closed' ? 'menu-outline' : 'add'} />
                  <div className="links" id="menuuu">
                    <Link to='/' name="Home" title='Home' className='navi-br-lnk-1'><FontAwesomeIcon icon={faHouse} /></Link>
                    <Link to='/login' name="Login" title='Login' className='navi-br-lnk-1'><FontAwesomeIcon icon={faRightToBracket} /></Link>
                    <Link to='/terms' name="Terms" title='Terms and Condition' className='navi-br-lnk-1'><FontAwesomeIcon icon={faExclamation} /></Link>
                    
                  </div>
                </div>
              
            </div>
            }

        </div>
      </center>
    </div>
  )

  
}



export default Navibar
