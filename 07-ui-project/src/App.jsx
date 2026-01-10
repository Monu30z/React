
import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

function App() {
  let user = [
    {
      num: 1,
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lable: "satisfied",
    },
    {
      num: 1,
      img: "https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lable: "Happy",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lable: "Happy",
    },
    {
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lable: "Happy",
    },
  ];
  return (
    <div>
      <Section1 user={user} />
      <Section2  />
    </div>
  );
}

export default App