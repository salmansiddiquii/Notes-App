import React, { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  function handleSubmit(event){
    event.preventDefault();
    if(input.trim() === '') return;
    setNotes([...notes, input]);
    setInput('');
  }
  function handleDelete(event){
    const noteText = event.target.parentElement.firstChild.textContent;
    const filteredNotes = notes.filter((note) => note !== noteText);
    setNotes(filteredNotes);
  }
  return (
    <div className='container'>
      <h1>Welcome to Personal Notes App</h1>
      <form onSubmit={handleSubmit}>
        <input className='noteInput' type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your note here" />

        <button className='btn' type="submit">Add Note</button>
      </form>

      <h2>Your Notes:</h2>
      <div className='notesContainer'> 
      <ul>
        {notes.map((note, index)=>{
          return <li className='note' key={index}><span>{note}</span> <button onClick={handleDelete}>Remove</button></li>
        })}
        
      </ul>
      </div>

    </div>
  )
}

export default App

