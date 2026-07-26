import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then((response) => {
      setUser(response.data.data);
    });
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {user.map((u) => {
          return <li key={u.id}>{u.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
