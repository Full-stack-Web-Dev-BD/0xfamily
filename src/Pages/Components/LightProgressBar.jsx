import React from "react";

const LightProgressBar = () => {
  return (
    <div className="=LightProgressBar">
      <div
        className="progress"
        style={{
          height: "5px",
          background: "#bdbdbd",
        }}
      >
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "25%", backgroundColor:'#99a2ff' }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default LightProgressBar;
