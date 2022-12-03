import React from "react";
import "./MainContent.css";

export default function MainContent(props) {
  return (
    <div className="container">
      <div className="main-content">{props.children}</div>
    </div>
  );
}
