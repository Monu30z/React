import React, { useState } from 'react';
import Products from './products';





function App() {
  var [a,b] =useState(0)
  return (
   <div>
    <Products naam="value" data={{age:23, name:"Monu"}}/>
   </div>
   
  
  )
}

export default App