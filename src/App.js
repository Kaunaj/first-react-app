import React, { Component } from "react";
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

  render() {
    const { characters, openEditPopup, character, index } = this.state;
    // console.log({ characters, openEditPopup, character, index });
    return (
      <div className="container">
        <Table
          characters={characters}
          handleEditPopup={this.handleEditPopup}
          removeCharacter={this.removeCharacter}
        />
        <Form addCharacter={this.addCharacter} />
        {openEditPopup ? (
          <EditPopup
            character={character}
            handleEditPopup={this.handleEditPopup}
            index={index}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
