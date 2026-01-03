import React from 'react'
import { Bookmark } from "lucide-react";

const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
          alt=""
        />
        <button>
          saved <Bookmark />
        </button>
      </div>
      <div className="center">
        <h3>
          Amazom <span>5 days ago</span>
        </h3>
        <h2>Senior UI/UX Designer</h2>
        <div>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$100/hr</h3>
          <p>Delhi, India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default Card