function UserCard({ user, onChangeUser }) {
  const fullName = `${user.name.first} ${user.name.last}`;

  return (
    <div className="user-card">
      <img className="user-image" src={user.picture.large} alt={fullName} />

      <h2>{fullName}</h2>

      <div className="user-details">
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>Location:</strong> {user.location.city},{" "}
          {user.location.country}
        </p>
      </div>

      <button onClick={onChangeUser}>Change User</button>
    </div>
  );
}

export default UserCard;
