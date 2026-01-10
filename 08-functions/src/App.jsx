import React from 'react'

function App() {

  const pagescrooling =(val) =>{
    console.log('page scrooling at speed',val)
  }

  

  return (
   <div onWheel={(elem)=>{
    pagescrooling(elem.deltaY)
   }}>
    <div className="page1"></div>
    <div className="page2"></div>
    <div className="page3"></div>
   </div>
  );
}

export default App