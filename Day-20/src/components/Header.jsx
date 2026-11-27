function Header({ allNotes }) {
  return (
    <header className="header">
      <div>
        <h1>My Notes</h1>
        <p>Organize your thoughts, one note at a time.</p>
      </div>

      <div className="notes-count">
        <span className="count-number">{allNotes.length}</span>
        <span>Total Notes</span>
      </div>
    </header>
  );
}

export default Header;
