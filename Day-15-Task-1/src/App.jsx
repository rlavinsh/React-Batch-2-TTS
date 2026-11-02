import React, { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [err, setErr] = useState("");
  async function getData() {
    try {
      setLoader(true);
      setErr("");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      if (!response.ok) {
        throw new Error("API fail ho gayi");
      }
      const data = await response.json();
      // console.log(data);
      setPosts([data]);
    } catch (error) {
      console.log("something went wrong", error.message);
      setErr(error.message);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loader) {
    return <h2>Loading Data...</h2>;
  }

  if (err) {
    return <h2>Error:{err}</h2>;
  }

  // console.log(posts[0]);

  return (
    <>
      <h1 align="center">All Posts</h1>
      <div className="parent">
        {posts[0].map((post) => {
          // console.log(post);

          return (
            <div className="card" key={post.id}>
              <h3>Title:{post.title}</h3>
              <p>description:{post.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
