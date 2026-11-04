import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";
function App() {
  return (
    <div className="app">
      <h1>Random User</h1>
      <p>Discover a random person</p>

      <UserCard />
    </div>
  );
}

export default App;
