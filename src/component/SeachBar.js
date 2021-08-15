import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui loading search">
        <div className="ui icon input">
          <h3 style={{ marginTop: "12px" }}> Car Search </h3>
          <input
            className="prompt"
            type="text"
            placeholder="Search for a car"
          />
        </div>
        <div className="results"></div>
      </div>
    );
  }
}

export default SearchBar;
