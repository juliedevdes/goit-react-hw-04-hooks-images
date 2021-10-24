import "./Searchbar.scss";
import PropTypes from "prop-types";

import { useState } from "react";

export default function Searchbar({ onSubmit }) {
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    setInputVal(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputVal);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={inputVal}
          onChange={handleInputChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
