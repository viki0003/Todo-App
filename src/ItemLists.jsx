import React from "react";
import "./styles.css";

const Ilists = (props) => {
  return (
    <React.Fragment>
      <li>
        <span
          className="remove-item"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Remove
        </span>
        {props.text}
      </li>
    </React.Fragment>
  );
};

export default Ilists;
