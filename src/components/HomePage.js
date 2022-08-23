import React from "react";
import "../App.css";
export default function FetchNews(props) {
  return (
    <div
      className="container mt-4"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 className="homepage text-left">Welcome to the text converter app</h1>
    </div>
  );
}
