import React from 'react' ;
import { useFirebaseApp } from 'reactfire' ;
import 'firebase/auth'
import { useUser } from 'reactfire' ;
const Logout = () => {
  const user = useUser();
  // Import firebase

  const firebase = useFirebaseApp();
 
  // Log out function
  const handleClick = () => {
    firebase.auth().signOut();
    alert("You have successfully signed out")
    window.location.replace("./");
  }
 
  return (
    
    <>
    {/* <h1>user's email</h1>
    <h2>{user.email}</h2>
    <h1>user.emailVerified </h1>
    <h2>{user.emailVerified}</h2> */}
    {/* <h1>user.displayName </h1>
    <h2>{user.displayName}</h2> */}
       <button type="button" onClick={handleClick}>Log Out</button> 
    </>
  )
};
 
export default Logout;