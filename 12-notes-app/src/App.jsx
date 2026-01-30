import React from "react";
import { useState } from "react";

function App() {
  const [title, settitle] = useState("")
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

 const Submithandler = (e) => {
   e.preventDefault();
   console.log(title,details);

   const CopyTask = [...task];
   CopyTask.push({title,details})

   settask(CopyTask)

   settitle('')
   setdetails('')
 
 };

 const deleteNote = (idx)=>{
   const CopyTask = [...task];
   console.log(CopyTask[idx]);
   CopyTask.splice(idx,1)

   settask(CopyTask)
  
  
 }

  return (
    <div className="bg-black h-screen lg:flex">
      <form
        className="flex items-start flex-col gap-3 lg:w-1/2 p-10"
        onSubmit={(e) => {
          Submithandler(e);
        }}
      >
        <h1 className="text-3xl text-white font-bold">Your Details</h1>
        <input
          type="text"
          placeholder="Enter notes"
          className="text-white border rounded  w-full outline-none px-2 py-3"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Enter notes"
          className="text-white  border rounded w-full outline-none px-2 py-3 h-20"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />

        <button className="bg-white text-black px-5 py-3 rounded">
          Add note
        </button>

        {/* 
        <img
          className="w-52"
          src="https://www.pngall.com/wp-content/uploads/5/Sticky-Note-PNG-Pic.png"
          alt=""
        /> */}
      </form>

      <div className=" p-10 lg:border-l-2  lg:w-1/2 ">
        <h1 className="text-3xl text-white font-bold">Your Notes</h1>
        <div className="flex gap-5 flex-wrap mt-5 overflow-auto h-[90%] ">
        {task.map(function(elem,idx){
          return (
            <div
              key={idx}
              className="h-54 w-40 bg-white
          text-black rounded-2xl p-4 flex justify-between flex-col bg-[url('https://imgs.search.brave.com/b9nc5BMwJ963hopkarex8iyCPZDL5oVweOdhvT2icjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQ2Mi9zbWFs/bC9ibGFuay1zcGFj/ZS13aGl0ZS1zdGlj/a3ktbm90ZS1wbmcu/cG5n')] bg-cover"
            >
              <div>
                <h3 className="leading-tight text-2xl font-bold">
                  {elem.title}
                </h3>

                <p className="mt-3 leading-tight font-medium text-gray-500">
                  {elem.details}
                </p>
              </div>

              <button onClick={()=>{
                deleteNote(idx)
              }} className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 texr-xs rounded font-bold text-white">
                Delete
              </button>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
