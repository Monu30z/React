import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState([]);

  const [index, setindex] = useState(1)
 

  const getdata = async ()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=28`);
   setUserData(response.data)
  
  }

  useEffect(function(){
    getdata()
  },[index])

  let printUserdata = (
    <h3 className="text-gray-400 text-2xl absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2">
      loading......
    </h3>
  );

  if(userData.length>0){
    printUserdata = userData.map(function(elem ,idx){
      return (
        <div>
          <a href={elem.url} target='_blank'>

          <div className="h-40 w-44 overflow-hidden bg-amber-50 rounded-xl">
            <img
              className="h-full w-full object-cover"
              src={elem.download_url}
              alt=""
              />
          </div>
            <h2 className='font-bold text-lg'>{elem.author}</h2>
              </a>
        </div>
      );
    })
  }
  return (
    <div className="h-screen text-white p-4 overflow-auto px-auto bg-[#333]">
     {/* <button 
     onClick={getdata}
     className="bg-green-600 px-5 py-3 m-10 rounded font-bold active:scale-95">Get data</button> */}
<h1 className='fixed bg-orange-500 p-4 text-black text-3xl rounded'>{index}</h1>
     <div className='flex flex-wrap gap-3'>
      {printUserdata}
     </div>

     <div className='w-full flex justify-center gap-4 items-center p-4'>
      <button 
    style={{opacity:index == 1 ? 0.5 : 1}}
      onClick={()=>{
        if(index>1){

          setindex(index-1)
          setUserData([])
        }
      }}
      
      className='bg-yellow-500 text-sm active:scale-95 text-black rounded px-4 py-2 curser-pointer font-semibold'>Prev</button>
      <h4> Page {index}</h4>
      <button 
      
      onClick={()=>{
        setUserData([])
        setindex(index+1)
      }}
      
      className='bg-yellow-500 text-sm active:scale-95 text-black rounded px-4 py-2 curser-pointer font-semibold'>Next</button>
     </div>
    </div>
  );
}

export default App