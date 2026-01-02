import React, { useState } from 'react'

function Products({naam, data}) {
  const [a,b] = useState(false);
  return (
    <>
   <div className="main">
    <h2 className={`${a== false ? "change1" : "change2"}`}>{a===false ? "Hello" : "WellCome"}</h2>
    <button onClick={()=>{b(!a)}}>Change</button>
   </div>

    </>
  )
}

export default Products;