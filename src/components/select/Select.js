import React, { useState } from "react";
import "./Select.css";

export const Select = ({ options, setCategory, method, closeModal }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategory(selectedOption);
    closeModal();
  };

  return (
    <form className="select-container" onSubmit={handleSubmit}>
      <label htmlFor="category">Select a category:</label>
      <select
        className="select"
        id="category"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};
