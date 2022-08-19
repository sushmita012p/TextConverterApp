import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to uppercase", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="mt-2">Text details</h2>
        {/* <p>
          {text.trim().split(" ").length} words and {text.trim().length}{" "}
          characters
        </p> */}
        {/* <p>{text.split(" ").filter((y) => (y!=="")).length} words and {text.length} characters</p> */}

         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textarea above to preview :"}
        </p>
      </div>
    </>
  );
}
