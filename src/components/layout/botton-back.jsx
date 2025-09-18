import React from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";

function BackButton() {
  return (
    <div className="flex items-center">

      <button onClick={() => window.history.back()}>
        <FaCircleArrowLeft /> 
      </button>
    </div>
  );
}

export default BackButton;