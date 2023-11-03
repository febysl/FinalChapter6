import React, { useState } from "react";

export const ProfilePopup = ({ username, email, closePopup }) => {
  return (
    <div className="display">
      <div className="content">
        <h2 className="flex justify-center items-center text-2xl font-semibold mb-4 mt-4">User Profile</h2><hr/>
        <div className="mb-4">
        <p>Username : {username}</p>
        <p>Email : {email}</p>
        </div>
        <div className="flex justify-center items-center mb-2">
        <button className=" font-semibold" onClick={closePopup}>Close</button>
        </div>
      </div>
    </div>
  );
};