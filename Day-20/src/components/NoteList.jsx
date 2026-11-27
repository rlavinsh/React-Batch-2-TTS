function NoteList({ allNotes, setAllNotes }) {
  // console.log(allNotes);
  function handleDelte(id) {
    // console.log(id);
    allNotes = allNotes.filter((note) => {
      return note.id !== id;
    });
    setAllNotes(allNotes);
  }
  return (
    <div className="notes-section">
      <div className="section-heading">
        <h2>My Notes</h2>
        <span>Recent Notes</span>
      </div>

      <div className="notes-grid">
        {allNotes.map((note) => {
          return (
            <div className="note-card" key={note.id}>
              <h3>{note.title}</h3>

              <p>{note.description}</p>

              <div className="note-footer">
                <span>{new Date(note.createdAt).toLocaleString()}</span>

                <div className="note-actions">
                  <button className="edit-btn">Edit</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelte(note.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NoteList;
