import "./App.css";
import React from "react";
import unsplash from "./api/Unsplash";
import SearchBar from "./component/SeachBar";
import ImageList from "./component/ImageList";
class App extends React.Component {
  state = { images: [] };

  /* two ways to handle response -> async and other is promise -> .then((res)=>{console.log(res.data.results[0].urls.small);})
   */

  // without arrow function syn for async -> async onSearchSubmit(search){}

  onSearchSubmit = async (search) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: search },
    });

    console.log(res.data.results[0].urls.small);
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui conatiner" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/** here onSbumit is just a key:value -> it can be anything onFormSbumit, onSubmitEtc */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
