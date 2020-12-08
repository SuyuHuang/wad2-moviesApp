import React, { useState } from 'react' ;
import { useFirebaseApp } from 'reactfire' ;
import 'firebase/auth'
import firebase from 'firebase/app'
import cmt from "../../contexts/UsernameContext"
import SiteHeader from "../../components/siteHeader"
import { Redirect } from 'react-router-dom';
// import './Signup.css' ;\



var provider = new firebase.auth.GithubAuthProvider();
const aaa=()=>{
  console.log("111")
}
        const githubSignin=()=> {
           firebase.auth().signInWithPopup(provider)

           .then(function(result) {
              var token = result.credential.accessToken;
              var user = result.user;

              console.log(token)
              console.log(user)
           }).catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;

              console.log(error.code)
              console.log(error.message)
           });
          //  window.location.replace("./");
        }

        function githubSignout(){
           firebase.auth().signOut()

           .then(function() {
              console.log('Signout successful!')
           }, function(error) {
              console.log('Signout failed')
           });
        }


 
const Login = () => {
  // User State
  const [user, setUser] = useState({
    email : '' ,
    password : '' ,
    error : '' ,
  });
 
  // onChange function
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error : '' ,
    })
  };
 
  // Import firebase
  const firebase = useFirebaseApp();
 
  // Submit function (Log in user)
  const handleSubmit = e => {
    let name="";
    e.preventDefault();
    // Log in code here.
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then( result => {
        console.log(result)
        if (!result.user.emailVerified) {
          setUser({
            ...user,
            error : 'Please verify your email before to continue' ,
          })
          firebase.auth().signOut();
          
        }
        if(result.operationType==="signIn"){
          name=result.user.displayName
  
         
           
          window.location.replace("./");
          

        }

      })
      .then(result=>{
        
       
        }

      )
      .catch( error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // Update the error
        setUser({
          ...user,
          error : error.message,
        })
      }
      )
      
  }
 
  return (
    
   
    <>
    
       <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" name="email" className='email' onChange={handleChange}/><br />
        <input type="password" placeholder="Password" name="password" className='password'onChange={handleChange}/><br />
        <button type="submit">Log in</button>
       


      </form>
      <button onClick = {githubSignin}>使用Github账号登录</button>
      <a href="/signup" className='signin'>sign up</a>
      {user.error && <h4>{user.error}</h4>}
    </>
  )
  
};
 
export default Login;