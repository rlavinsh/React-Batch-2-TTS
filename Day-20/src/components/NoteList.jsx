function NoteList() {
  return (
    <div className="notes-section">
      <div className="section-heading">
        <h2>My Notes</h2>
        <span>Recent Notes</span>
      </div>

      <div className="notes-grid">
        {/* Note Card 1 */}
        <div className="note-card">
          <h3>React Learning</h3>

          <p>
            Today I learned about React components, props and useState hook.
            Need to practice more examples.
          </p>

          <div className="note-footer">
            <span>27 Nov 2026, 12:24 PM</span>

            <div className="note-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </div>

        {/* Note Card 2 */}
        <div className="note-card">
          <h3>Project Ideas</h3>

          <p>
            Create a personal portfolio website using React and CSS. Add
            projects, skills and contact information.
          </p>

          <div className="note-footer">
            <span>26 Nov 2026, 05:30 PM</span>

            <div className="note-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </div>

        {/* Note Card 3 */}
        <div className="note-card">
          <h3>Daily Tasks</h3>

          <p>
            Complete HTML revision, practice JavaScript functions and learn
            React component structure.
          </p>

          <div className="note-footer">
            <span>25 Nov 2026, 10:15 AM</span>

            <div className="note-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteList;
