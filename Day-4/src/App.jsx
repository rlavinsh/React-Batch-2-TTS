import React from "react";
import ProfileCard from "./components/ProfileCard";
// function Greet() {
//   return <h1>React is a Library</h1>;
// }

// Pascal Case
const App = () => {
  return (
    <div className="parent">
      {/* <ProfileCard /> */}
      {/* <h1>Hello React</h1> */}
      {/* {greet()} */}
      {/* <Greet /> */}
      <ProfileCard
        imageUrl="https://plus.unsplash.com/premium_photo-1739786996060-2769f1ded135?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
        userName="Rahul"
        role="Java Developer"
      />
      <ProfileCard
        imageUrl="https://plus.unsplash.com/premium_photo-1739786996060-2769f1ded135?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
        userName="Ankit"
        role="Frontend Developer"
      />
      {/* <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard /> */}
    </div>
  );
};

export default App;
