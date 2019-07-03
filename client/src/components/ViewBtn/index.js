import React from "react";
import './style.css';

function ViewBtn(props) {
  return (
    <a href={props.link} alt={props.title} {...props}>
      <button className="btn btn-primary view-btn">
        View
      </button>
    </a>
  );
}

export default ViewBtn;
