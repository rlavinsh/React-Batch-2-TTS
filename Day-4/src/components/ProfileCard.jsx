import React from "react";

const ProfileCard = (userData) => {
  console.log(userData);

  return (
    <div className="card">
      <img src={userData.imageUrl} alt="avatar" />
      <h2>{userData.userName}</h2>
      <h3>{userData.role}</h3>
      <button className="btn">View Profile</button>
    </div>
  );
};

export default ProfileCard;
