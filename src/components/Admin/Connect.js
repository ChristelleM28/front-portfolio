import React from 'react';
import Admin from "./Admin";

function Connect({setConnected}) {
  return (
    <div>
      <Admin setConnected={setConnected}/>
    </div>
  )
}

export default Connect