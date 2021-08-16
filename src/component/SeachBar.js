import React from "react";

class SearchBar extends React.Component {
  state = { search: "" };

  // Always use arrow functions for event handlers -> its always points to the current instance of class.
  onInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  // Note in class we use -> this.props.xyz and in functional component -> props.xyz

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit}>
          <div className="ui loading search">
            <div className="ui icon input">
              <h3 style={{ marginTop: "12px" }}> Car Search </h3>
              <input
                className="prompt"
                type="text"
                value={this.state.search}
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
                placeholder="Search for car"
              />
            </div>
            <div className="results"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
