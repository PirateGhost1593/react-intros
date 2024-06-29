import React, {UseContext} from 'react';
import { UserContext } from './ComponentA.jsx';

function ComponentD(){

  const user = UseContext(UserContext);
  
  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default ComponentD