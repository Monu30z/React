import React from "react";
import { useState } from "react";

function App() {

  const [title, settitle] = useState('Monu')
  const Submithandler = (e) => {
    e.preventDefault();
    console.log("form submit");
    settitle("")
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          Submithandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter ypur name"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
