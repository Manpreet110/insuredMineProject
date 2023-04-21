import React, { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [users, setUsers] = useState( ['Gina Williams', 'Jake Williams', 'Jamie John', 'John Doe', 'Jeff Stewart', 'Paula M. Keith']); // array of users


  // Function to handle text area input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);

    // Check for '@' symbol to show/hide user dropdown
    if (value.includes("@")) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

 
  const handleUserClick = (user) => {
    // Set the selected user in state
    setSelectedUser(user);
    // Hide the dropdown
    setShowDropdown(false);
  };

  // Function to handle adding a note
  const handleAddNote = () => {
    if (inputValue.trim() === "") return;
    const note = { user: selectedUser, note: inputValue.trim() };
    setNotes([...notes, note]);
    setInputValue("");
    setSelectedUser("");
  };

  // Function to handle resetting notes
  const handleResetNotes = () => {
    setNotes([]);
    setInputValue("");
    setSelectedUser("");
  };

  return (
    <div>
      <h1>Notes App</h1>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        style={{ border: "2px solid orange"  }}
      />
      {showDropdown && (
        <div>
          <h3>Users</h3>
          {users.map((user) => (
            <li
              key={user}
              onClick={() => handleUserClick(user)}
              style={{
                cursor: "pointer",
                fontWeight: selectedUser === user ? "bold" : "normal",
              }}
            >
              {user}
            </li>
          ))}
        </div>
      )}
      <br/>
      <button onClick={handleAddNote} style={{backgroundColor:'orange'}}>Add Note</button>
      <button onClick={handleResetNotes}style={{backgroundColor:'orange'}}>Reset Notes</button>
      <h2>Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <span style={{ fontWeight: "bold" }}>{note.user}: </span>
            {note.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
