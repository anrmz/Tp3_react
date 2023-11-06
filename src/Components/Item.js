import React from "react";

export default function Item(props) {
  const textStyle = {
    textDecoration: props.completed ? "line-through" : "none",
  };

  return (
    <div>
      <li className="border d-flex justify-content-between align-item-center p-2 m-2">
        <div className="p-3" style={textStyle} onClick={props.toggleTodo}>
          {props.txt}
        </div>

        <button className="delete-button" onClick={props.delFunc}>
          Delete
        </button>
      </li>
    </div>
  );
}
