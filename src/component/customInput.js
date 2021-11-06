import * as React from "react";
import {divInput, inputStyle, pInputHeading, pInputIcon} from "./customInput.module.css";

const CustomInput = ({placeholder, title, icon, setInput}) => {
  return (
    <>
      <p className={pInputHeading}>{title}</p>
      <div className={divInput}>
        <p className={`material-icons ${pInputIcon}`}>{icon}</p>
        <input
          className={inputStyle}
          placeholder={placeholder}
          onChange={event => setInput(event.target.value)}
        />
      </div>
    </>
  );
}

export default CustomInput;
