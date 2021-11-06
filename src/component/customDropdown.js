import * as React from "react";
import {
  divDropdown,
  pDropdown,
  pDropdownHeading,
  pDropdownIcon,
  pDropdownButton,
  divDropdownOuter,
  divOptions,
  pOption,
  divOption
} from "./customDropdown.module.css";
import {useState} from "react";

const CustomDropdown = ({placeholder, title, icon, options, setInput}) => {
  const [selectedOption, setSelectedOption] = useState(placeholder);

  function toggleDropdown() {
    if (document.getElementById("dropdown-options").style.display === "none"
      || !document.getElementById("dropdown-options").style.display) {
      document.getElementById("dropdown-options").style.display = "block";
    } else {
      document.getElementById("dropdown-options").style.display = "none";
    }
  }

  return (
    <>
      <p className={pDropdownHeading}>{title}</p>
      <div className={divDropdown}>
        <p className={`material-icons ${pDropdownIcon}`}>{icon}</p>
        <div className={divDropdownOuter} onClick={toggleDropdown}>
          <p className={pDropdown}>{selectedOption}</p>
          <p className={`material-icons ${pDropdownButton}`}>expand_more</p>
        </div>
      </div>

      <div className={divOptions} id={"dropdown-options"}>
        {options.map(option => (
          <div className={divOption} onClick={() => {
            setSelectedOption(option);
            setInput(option);
            toggleDropdown();
          }}>
            <p className={pOption}>{option}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CustomDropdown;
