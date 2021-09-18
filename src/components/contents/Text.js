import React from "react";

const Text = (props) => {
  return (
      <div className="text-wrapper">
        <div className="text">
          {props.text}
        </div>
      </div>
  );
};

export default Text;