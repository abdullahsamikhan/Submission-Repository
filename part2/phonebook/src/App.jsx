import "./App.css";
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", contact: 923123 }]);
  const [newName, setNewName] = useState("");
  const [newContact, setNewContact] = useState();

  const addName = (e) => {
    e.preventDefault();
    const existingName = persons.find(
      (person) => JSON.stringify(person) === JSON.stringify({ name: newName })
    );
    
    
    if (existingName) {
      alert(`${newName} is already added to the phonebook.`);
      return;
    }
    const nameObject = {
      name: newName,
      contact: newContact
    };
    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewContact("");
    console.log("object", nameObject);
  };
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };
  const handleContact = (e) => {
    setNewContact(e.target.value);
    console.log(e.target.value);
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name:{" "}
          <input type="text" onChange={handleNameChange} value={newName} />
        </div>
        <div>
          Number:{" "}
          <input type="text" onChange={handleContact} value={newContact} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <>
            <p >
              {person.name} : {person.contact}
            </p>
           
          </>
        );
      })}
    </div>
  );
};

export default App;
