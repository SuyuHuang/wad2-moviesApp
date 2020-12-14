import React from 'react' ;

import { useFirebaseApp } from 'reactfire' ;
import 'firebase/auth'
import { useUser } from 'reactfire' ;
import { Card, Icon, Image,Button } from 'semantic-ui-react'
let creationtime='Thu, 10 Dec 2020 22:45:14 GMT'
let lastsigntime='Sun, 13 Dec 2020 23:54:16 GMT'
let verified='true'
const Logout = () => {
  const user = useUser();
  if(user==null){
    user.metadata.creationTime=creationtime
    user.metadata.lastSignInTime=lastsigntime
 user.emailVerified=''+verified
  }
 if(user!=null){
  // Import firebase
 creationtime=user.metadata.creationTime
lastsigntime=user.metadata.lastSignInTime
 verified=user.emailVerified+''
 }
  const firebase = useFirebaseApp();
 
  // Log out function
  const handleClick = () => {
    firebase.auth().signOut();
    alert("You have successfully signed out")
    window.location.replace("./");
  }
 
  return (
 
    <>

    
 {user&&<div>
   < Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{user.displayName}</Card.Header>
      <Card.Meta>
        <span className='date'>{user.email}</span>
      </Card.Meta>
      <Card.Description>
       Joined by {creationtime}
      </Card.Description>
      <Card.Description>
       Last signed at {lastsigntime}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    
        <Icon name='mail' />
        
     
      {verified}
      
    </Card.Content>
  </Card>
       <Button type="button" onClick={handleClick}>Log Out</Button> 
     
       </div>}
  
    </>
  )
};
 
export default Logout;