

import React, { useContext } from "react";

import Logout from '../components/Signout'
import Login from '../components/login'
import Signup from '../components/SignUp'
import firebase from 'firebase/app'
import { useUser } from 'reactfire' ;


const LoginPage = () => {
  const user = useUser();
 

  ;
  
  
  return (
    < div className = "App" >
{
  
  user &&
   <Logout /> 
   
}

{
  !user &&
  <>
 
    <Login /> 
  </>
}
</ div >
    
  );
};

export default LoginPage;

