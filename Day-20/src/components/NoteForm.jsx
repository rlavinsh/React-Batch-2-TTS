import { useState } from "react";
import Header from "./Header";
import NoteList from "./NoteList";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  // console.log("length", allNotes.length);
  // console.log(allNotes);

  function createNote(e) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return alert("Please enter the details");
    }

    const myNote = {
      id: crypto.randomUUID(),
      title,
      description,
      createdAt: Date.now(),
    };

    setAllNotes([...allNotes, myNote]);

    setTitle("");
    setDescription("");

    // console.log(myNote);
  }

  return (
    <div className="container">
      <Header allNotes={allNotes} />

      <div className="form-section">
        <h2>Create a New Note</h2>
        <p className="form-subtitle">
          Capture your ideas and important thoughts.
        </p>

        <form onSubmit={createNote}>
          <div className="input-group">
            <label>Note Title</label>
            <input
              type="text"
              placeholder="Enter note title..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              rows="4"
              placeholder="Write your note here..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <button className="create-btn">+ Create Note</button>
        </form>
      </div>

      <NoteList allNotes={allNotes} setAllNotes={setAllNotes} />
    </div>
  );
}

export default NoteForm;
