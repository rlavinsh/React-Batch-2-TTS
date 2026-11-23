import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchUser() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://randomuser.me/api/");

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await response.json();

      setUser(data.results[0]);
    } catch (err) {
      setError("User load nahi ho paya. Try again!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();

    fetchUser(controller.signal);

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, []);

  function handleChangeUser() {
    fetchUser();
  }

  return (
    <div className="app">
      <h1>Random User</h1>
      <p>Discover a random person</p>

      {loading && <p>Loading user...</p>}

      {error && (
        <div>
          <p>{error}</p>
          <button onClick={handleChangeUser}>Try Again</button>
        </div>
      )}

      {loading ? (
        <h1>{error}</h1>
      ) : (
        <UserCard user={user} onChangeUser={handleChangeUser} />
      )}

      {/* {!loading && user && !error && (
        <UserCard user={user} onChangeUser={handleChangeUser} />
      )} */}
    </div>
  );
}

export default App;
