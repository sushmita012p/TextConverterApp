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
        className="container row mt-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="text-left"> {props.heading} </h1>
        <div className="mb-3 col-4 mt-3">
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
        <div className="col-4 text-left mt-4">
          <button
            className="btn btn-info mx-1 my-1 text-white fw-bold"
          
            onClick={handleUpClick}
          >
            Convert to uppercase
          </button>
          <br></br>
          <button
            className="btn btn-info mx-1 my-1 text-white fw-bold"
            
            onClick={handleDownClick}
          >
            Convert to lowercase
          </button>
          <br></br>
          <button
            className="btn btn-info mx-1 my-1 text-white fw-bold"
           
            onClick={handleClearClick}
          >
            Clear text
          </button>
        </div>

        <div
          className="container col-4 mt-4"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h4 className="fw-bold"> Text Details : </h4>

          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <h4 className="fw-bold">Preview :</h4>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textarea to preview :"}
          </p>
        </div>
      </div>
    </>
  );
}
