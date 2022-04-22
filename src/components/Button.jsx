import React from "react";

const Button = ({ text }) => {
 
  return (
    <div className="bg-btnColor mt-5 mx-3 py-3 font-extrabold cursor-pointer text-center rounded-md mb-5">
      <p className="text-white">{text}</p>
    </div>
  );
};

export default Button;
