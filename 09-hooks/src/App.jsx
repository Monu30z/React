
import React, { useState } from 'react'


function App() {

  // const [num, setnum] = useState(0)

  const [num, setnum] = useState({user:"Monu" , age:20})

  const btnClicked = ()=>{
    // const Newuser = {...num}
    // Newuser.user = "Aman"
    // Newuser.age = 21
    // setnum(Newuser)

    setnum(prev =>({...prev,age:50}))
  }





  // const [num, setnum] = useState([10,20,30])

  //   const btnClicked = ()=>{
  //   const newNum = [...num] 
  //   newNum.push(99)
  //   console.log(newNum)
  //   setnum(newNum)
  // }
  return (
   
    <div>
    {/* <h1>{num}</h1> */}
    {/* <button onClick={()=>setnum(num+1)}>Increase</button>
    <button onClick={()=>setnum(num-1)}>Decrease</button>
    <button onClick={()=>setnum(num+5)}>Jump by 5</button> */}

    <h1>{num.user} , {num.age}</h1>
    <button onClick={btnClicked}>click</button>

    {/* <h1>{num}</h1>
    <button onClick={btnClicked}>click</button>  */}
    </div>
  )
}

export default App