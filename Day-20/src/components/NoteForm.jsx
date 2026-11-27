import Header from "./Header";
import NoteList from "./NoteList";

function NoteForm() {
  return (
    <div className="container">
      <Header />

      <div className="form-section">
        <h2>Create a New Note</h2>
        <p className="form-subtitle">
          Capture your ideas and important thoughts.
        </p>

        <div className="input-group">
          <label>Note Title</label>
          <input type="text" placeholder="Enter note title..." />
        </div>

        <div className="input-group">
          <label>Description</label>
          <textarea rows="4" placeholder="Write your note here..."></textarea>
        </div>

        <button className="create-btn">+ Create Note</button>
      </div>

      <NoteList />
    </div>
  );
}

export default NoteForm;
