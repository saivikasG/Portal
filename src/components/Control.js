import React from 'react'
import { Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function Control() {
  
  let history=useHistory();
  


  return (
    <div>
      <Button type="submit" variant="outline-primary" onClick={()=>history.push('/login')}> User</Button>
      <Button type="submit" variant="outline-primary" onClick={()=>history.push('/login')}> Admin</Button>
      
    </div>
  )
}

export default Control
