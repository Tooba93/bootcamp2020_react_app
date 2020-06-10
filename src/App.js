import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
  return <div> 
          Hello World form App.js updated {name} {age -10} 
          <br/>
<Hello>  firstName={name}</Hello>
    </div>
}

export default App;
