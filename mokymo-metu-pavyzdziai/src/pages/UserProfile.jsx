import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const documents = [
  { id: 1, name: "Doc 1" },
  { id: 2, name: "Doc 2" },
];

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((resp) => resp.json())
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      Tema dabar yra: {theme}
      <button onClick={toggleTheme}>Pakeisti tematika</button>
      <br />
      User profile page for user {userId}
      <h1>{user.name}</h1>
      <button>Go to first document</button>
      {documents.map((doc) => (
        <div key={doc.id}>
          <Link to={`/users/${userId}/documents/${doc.id}`}>{doc.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
