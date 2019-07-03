import React from "react";

export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ lPadding, size, children }) {
  let classes = '';
  classes = lPadding ? `pl-${lPadding}` : '';
  classes = classes + (size ? ` col-${size}` : '');

  return (
    
    <div
      className={classes.trim()}
    >
      {children}
    </div>
  );
}
