import React from "react";
import RightCardContent from "./RightCardContent";

function Rightcard(props) {
  return (
    <div className="h-full w-70 bg-red-500 overflow-hidden shrink-0   relative rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent id={props.id} lable={props.lable} />
    </div>
  );
}

export default Rightcard;
