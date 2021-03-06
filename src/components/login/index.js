import React, { useState } from 'react'
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
import firebase from 'firebase/app'
import { Link } from "react-router-dom";
// import './Signup.css' ;\
import { Button, Divider, Form, Grid, Segment,Message } from 'semantic-ui-react'



var provider = new firebase.auth.GithubAuthProvider();
const githubSignin = () => {


  firebase.auth().signInWithPopup(provider)

    .then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;

      console.log(token)
      console.log(user)
    }).catch(function (error) {
      //  setMessage(error.message)



      console.log(error.code)
      console.log(error.message)
    });
  //  window.location.replace("./");
}





const Login = () => {
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  // User State
  const [user, setUser] = useState({
    email: '',
    password: '',
    error: '',
  });

  // onChange function
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: '',
    })
  };

  // Import firebase
  const firebase = useFirebaseApp();

  // Submit function (Log in user)
  const handleSubmit = e => {
    // eslint-disable-next-line no-unused-vars
    let name = "";
    e.preventDefault();
    // Log in code here.
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(result => {
        console.log(result)
        if (!result.user.emailVerified) {
          setUser({
            ...user,
            error: 'Please verify your email before to continue',
          })
          firebase.auth().signOut();

        }
        if (result.operationType === "signIn") {
          name = result.user.displayName



          window.location.replace("./");


        }


      })
      .then(result => {
       


      }

      )
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setIsSuccess(false)
        setMessage(errorMessage)
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          
          alert(errorMessage);
        }

        // Update the error
        setUser({
          ...user,
          error: error.message,
        })
      }
      )

  }

  return (


    <>

      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form onSubmit={handleSubmit}>
              <Form.Input
                type="text"
                placeholder="Email"
                name="email"
                className='email'
                icon='user'
                iconPosition='left'
                label='email'

                onChange={handleChange}
              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='password'
                type='password'
                placeholder="Password"
                name="password" c
                className='password'
                onChange={handleChange}
              />

              <Button content='Login' primary type='submit' />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Link to='./signup'>
            <Button primary content='Sign up' icon='signup' size='big' className="signup"  />
            </Link>
            <Button secondary content='Github' icon='github' size='big' onClick={githubSignin} />

          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
      {message &&
                <Message
                    header={isSuccess ? "Success Message" : "Warning message"}
                    content={message}
                    className={isSuccess ? ["bg-success", "text-white"] : ["bg-danger", "text-white"]} />}


    </>
  )

};

export default Login;