import React from 'react'
import Rightcard from './RIghtcard';

function RightContent() {
  return <div className="h-full p-6 w-2/3 flex flex-nowrap gap-2.5 overflow-x-auto">
    <Rightcard/>
    <Rightcard/>
    <Rightcard/>
    <Rightcard/>
    <Rightcard/>
  </div>;
}

export default RightContent