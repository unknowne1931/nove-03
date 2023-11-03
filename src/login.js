import React, { useContext } from 'react';
import './forms.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { store2 } from './App';
import Navibar from './navibar';
import Topn from './topnme';

function Login() {
  
  const user = useContext(store2)
 
  const Login = () =>{
    const email = localStorage.getItem('emaill');
    axios.post("http://localhost:5000/google/loginn" , {email})
    .then(res => {
      if(res.data.Status === "OK"){
        axios.post('http://localhost:5000/api/check/nme')
        .then(res =>{
          if(res.data.Status === "BAD"){
            const username = localStorage.getItem("unam");
            const name = localStorage.getItem("name");
            const picture = localStorage.getItem("picture");
            axios.post('http://localhost:5000/userinfo',{name, username, email, picture})
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/profile?email=${email}`
              }else{
                window.location.reload();
              }
            })
          }else{
            window.location.href=`/profile?email=${email}`
          }
        })
      }else{
        alert("Something went wrong")
      }
    })
  }


  return(
    <div>
      <Navibar />
      <Topn/>
      {user.email ? 
    <div>
      <center>
        <h2>You'r In {user.email}</h2>
      </center>
    </div>
  :
      <center>
        <h2>Login</h2>
      <div className='logn-google-auth'>
      <GoogleOAuthProvider clientId="394761644679-jm801n0kjqp1ql2d85rfl6ilf63gks5a.apps.googleusercontent.com">
        <GoogleLogin
        onSuccess={credentialResponse => {
          const infoo = jwt_decode(credentialResponse.credential);
          localStorage.setItem('emaill', infoo.email);
          localStorage.setItem('name', infoo.name);
          localStorage.setItem('picture', infoo.picture);
          localStorage.setItem('unam', infoo.given_name);
          Login();
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
          }}
        />
        
      </GoogleOAuthProvider>
      </div>
      </center>}
    </div>
  )
}

export default Login;