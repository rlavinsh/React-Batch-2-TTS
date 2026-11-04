function UserCard() {
  return (
    <div className="user-card">
      <img className="user-image" src={""} alt={"Logo"} />

      <h2>{"Lavinsh Rathor"}</h2>

      <div className="user-details">
        <p>
          <strong>Gender:</strong> {"Male"}
        </p>

        <p>
          <strong>Email:</strong> {"lavinsh@gmail.com"}
        </p>

        <p>
          <strong>Phone:</strong> {123456789}
        </p>

        <p>
          <strong>Location:</strong> {"Gwalior"}, {"India"}
        </p>
      </div>

      <button>Change User</button>
    </div>
  );
}

export default UserCard;
