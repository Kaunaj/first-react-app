import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Manage</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  // console.log({ props });
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button
            className="edit"
            onClick={() => props.handleEditPopup(true, row, index)}
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={() => props.removeCharacter(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characters, handleEditPopup, removeCharacter } = this.props;
    return characters.length ? (
      <table>
        <TableHead />
        <TableBody
          characterData={characters}
          handleEditPopup={handleEditPopup}
          removeCharacter={removeCharacter}
        />
      </table>
    ) : (
      <p>No data to show</p>
    );
  }
}

export default Table;
