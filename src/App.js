import React, { Component } from "react";
import axios from "axios";
import Table from "./components/Table";
import Form from "./components/Form";
import EditPopup from "./components/EditPopup";

class App extends Component {
  state = {
    characters: [],
    openEditPopup: false,
    character: null,
    index: null,
  };

  addCharacter = (character) => {
    // trim all values in character
    Object.keys(character).forEach((key) => {
      character[key] = character[key].trim();
    });
    this.setState({
      characters: [...this.state.characters, character],
    });
  };

  handleEditPopup = (openEditPopup, character, index = null) => {
    const { characters } = this.state;
    // trim all values in character
    Object.keys(character).forEach((key) => {
      character[key] = character[key].trim();
    });
    // console.log(
    //   "handleEditPopup called",
    //   openEditPopup,
    //   character,
    //   index,
    //   this.state
    // );
    if (index !== null) {
      characters.splice(index, 1, character);
    }
    this.setState({
      characters: characters,
      openEditPopup: openEditPopup,
      character: character,
      index: index,
    });
    // console.log("handleEditPopup result", this.state);
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((element, i) => i !== index),
    });
  };

  handleFetch = () => {
    const requestBody = { title: "Axios POST Request Example" };
    axios
      .post("https://reqres.in/api/articles", requestBody)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  render() {
    const { characters, openEditPopup, character, index } = this.state;
    // console.log({ characters, openEditPopup, character, index });
    return (
      <div className="container">
        {/* <h1>Available data</h1>
        <Table
          characters={characters}
          handleEditPopup={this.handleEditPopup}
          removeCharacter={this.removeCharacter}
        />
        <h1>Add new data</h1>
        <Form addCharacter={this.addCharacter} />
        {openEditPopup ? (
          <EditPopup
            character={character}
            handleEditPopup={this.handleEditPopup}
            index={index}
          />
        ) : null} */}
        <h1>Fetch data with Axios</h1>
        <button onClick={this.handleFetch}>Fetch</button>
      </div>
    );
  }
}

export default App;
