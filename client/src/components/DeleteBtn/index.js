import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <button className="btn btn-danger delete-btn" {...props}>
      Delete
    </button>
  );
}

export default DeleteBtn;
