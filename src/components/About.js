import React from "react";

export default function About(props) {

  let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor : props.mode ==='dark'?'#042743':'white',
  }

  return (
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed cum
              et error quidem doloribus at saepe repellat dolorem architecto
              quia ratione quibusdam veritatis, ipsum minus tempore velit natus
              placeat earum!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong>Reliable to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed cum
              et error quidem doloribus at saepe repellat dolorem architecto
              quia ratione quibusdam veritatis, ipsum minus tempore velit natus
              placeat earum!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatibility</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed cum
              et error quidem doloribus at saepe repellat dolorem architecto
              quia ratione quibusdam veritatis, ipsum minus tempore velit natus
              placeat earum!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }