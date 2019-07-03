import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    
    <button className="btn btn-warning save-btn" {...props}>
      Save
    </button>
  );
}

export default SaveBtn;
