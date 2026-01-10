import React from "react";
import Rightcard from "./Rightcard";
// import 'remixicon/fonts/remixicon.css'

function RightContent(props) {
  console.log(props)

  return (
    <div  id="Right" className="h-full p-6 w-2/3 flex flex-nowrap gap-2.5 overflow-x-auto">
     {props.user.map(function(elem,idx){
      return <Rightcard key={idx} id={idx} img={elem.img} lable={elem.lable} />;
     })}
    </div>
  );
}

export default RightContent;
