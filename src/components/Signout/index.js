import React from 'react' ;
import { useFirebaseApp } from 'reactfire' ;
import 'firebase/auth'
import { useUser } from 'reactfire' ;
import { Card, Icon, Image,Button } from 'semantic-ui-react'

const Logout = () => {
  const user = useUser();
  // Import firebase
  let creationtime=user.metadata.creationTime
  let lastsigntime=user.metadata.lastSignInTime
  let verified=user.emailVerified+''

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
    </>
  )
};
 
export default Logout;