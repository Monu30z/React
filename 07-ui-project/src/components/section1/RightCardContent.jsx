import React from 'react'

function RightCardContent(props) {
  console.log(props.lable)
  return (
    <div className=" absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center ">
        {props.id+1}
      </h2>
      <div>
        <p className="text-lg leading-normal text-white mb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius placeat
          suscipit quidem quo exercitationem officiis!
        </p>

        <div className="flex justify-between items-center">
          <button className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-full">
            {props.lable}
          </button>
          <button className="bg-blue-600 text-white font-semibold px-3 py-2 rounded-full">
            <i className="ri-arrow-right-long-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent