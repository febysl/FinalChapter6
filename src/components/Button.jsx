import React from "react";

export const Button = ({ handleLogout }) => {
  return (
    <div className="flex gap-5">
      <button
        onClick={() => handleLogout()}
        className="w-32 h-10 rounded-full border-5 border-red-600 bg-red-600 text-white"
      >
        Logout
      </button>
    </div>
  );
};
