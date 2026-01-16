import React from 'react'

function App() {

  const Submithandler = (e)=>{
    e.preventDefault()
    console.log("form submit")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        Submithandler(e)
      }}>
        <input type="text" 
        placeholder='Enter ypur name' 
        onChange={(e)=>{
          console.log(e.target.value)
        }}
        
        />
        <button>Submit</button> 
      </form>
    </div>
  )
}

export default App