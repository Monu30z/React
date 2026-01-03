import React from 'react'
import Card from './component/Card';

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Monu"
        age={18}
        img="https://images.unsplash.com/photo-1766921466771-29bd27bf2d4e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Ram"
        age={28}
        img="https://images.unsplash.com/photo-1767398284852-84ac6051d1c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Aman"
        age={23}
        img="https://plus.unsplash.com/premium_vector-1741423989978-e35f01532dcf?q=80&w=422&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

export default App