import React from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";

function BackButton() {
  return (
    <div className="flex items-center">
      <button onClick={() => window.history.back()} className="text-4xl text-slate-950 hover:text-blue-400 transition-colors">
        <FaCircleArrowLeft /> 
      </button>
    </div>
  );
}

export default BackButton;