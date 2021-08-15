import React from "react";

class SearchBar extends React.Component {
  state = { search: "" };
  onInputChange = (event) => {
    this.setState({ seacrh: event.target.value });
  };

  render() {
    return (
      <div className="ui loading search">
        <div className="ui icon input">
          <h3 style={{ marginTop: "12px" }}> Car Search </h3>
          <input
            className="prompt"
            type="text"
            value={this.state.seacrh}
            onChange={this.onInputChange}
            placeholder="Search for car"
          />
        </div>
        <div className="results"></div>
      </div>
    );
  }
}

export default SearchBar;
