import React from "react";

export default function SideBarItem({ name, active, handleClick }) {
  return (
    <button
      className={`sideBarItem ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
