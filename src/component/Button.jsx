import React from "react";

const Button = (props) => {
  return (
    <button className={props.class} id={props.id} onClick={props.click}>
      {props.text}
    </button>
  );
};

export default Button;
