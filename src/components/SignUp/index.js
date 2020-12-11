import React, { useState } from 'react' ;
import { useFirebaseApp } from 'reactfire' ;
import 'firebase/auth'
import { Form, Input ,Button} from 'semantic-ui-react'
import firebase from 'firebase/app';
console.log(firebase.apps.length)
const Signup = () => {

  // User State
  const [user, setUser] = useState({
    nickname : '' ,
    email : '' ,
    password : '' ,
    error : '' ,
  });
 

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error : '' ,
    })
  };

  const firebase = useFirebaseApp();

  // onChange function
const handleSubmit = async (e) => {
    e.preventDefault();
    // Sign up code here.
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then( result => {
        // Update the nickname
        result.user.updateProfile({
          displayName : user.nickname,
        });
 
        // URL of my website.
        const myURL = { url : 'http://localhost:3000/' }
 
        // Send Email Verification and redirect to my website.
        result.user.sendEmailVerification(myURL)
          .then( () => {
            setUser({
              ...user,
              verifyEmail : `Welcome ${user.nickname} . To continue please verify your email.` ,
            })
          })
          .catch( error => {
            setUser({
              ...user,
              error : error.message,
            })
          })
          window.location.replace("./login");
        // Sign Out the user.
        firebase.auth().signOut();
      }).catch( error => {
        // Update the error
        setUser({
          ...user,
          error : error.message,
        })
      })
}

 
  return (
    <>
       <h1>Sign up</h1>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Nickname" name="nickname" onChange={handleChange}/><br />
        <Input type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
        <Input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
        <Button type="submit">Sign Up</Button>
      </Form>
      {user.error && <h4>{user.error}</h4>}
    </>
  )
};
 
export default Signup;