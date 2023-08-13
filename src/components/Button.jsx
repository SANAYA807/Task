import React from "react";

function Button({ name }) {
  return (
    <div>
      <button className="bg-blue-400 py-2 px-2 rounded-md text-white">
        {name}
      </button>
    </div>
  );
}

export default Button;
