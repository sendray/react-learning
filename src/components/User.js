const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h1>I am a functional component</h1>
      <h2>Name: {name}</h2>
      <h4>Location: {location}</h4>
    </div>
  );
};

export default User;
