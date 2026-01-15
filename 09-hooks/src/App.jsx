
import React from 'react'
import { useState } from 'react'

function App() {

let a = 20;
function changeA(){
 console.log(a)
  a=30
  console.log(a)
}
  return (
   
    <div>
     <h1>value of a is {a}</h1>
     <button onClick={changeA}>Click</button>
    </div>
  )
}

export default App