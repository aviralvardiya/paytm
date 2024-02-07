import React from "react";

function InitialsIcon({user}) {
  return (
    <div className="h-12 w-12  bg-slate-300 rounded-full flex items-center justify-center">
      {user.firstName[0].toUpperCase()}
      {user.lastName[0].toUpperCase()}
    </div>
  );
}

export default InitialsIcon;
