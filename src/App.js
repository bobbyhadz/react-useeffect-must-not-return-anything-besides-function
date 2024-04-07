import './App.css';

import {useState, useEffect} from 'react';

function App() {
  const [users, setUsers] = useState([]);

  // 👇️ Notice that this function is no longer async
  useEffect(() => {
    // ✅ Define the async function here
    async function getUsers() {
      const response = await fetch('https://randomuser.me/api/');

      const data = await response.json();

      setUsers(data.results);
    }

    // 👇️ Call the function here
    getUsers();
  }, []);

  console.log(users);

  return (
    <div>
      {users.map(user => (
        <div key={user.id.value}>
          <h2>
            Name: {user.name.first} {user.name.last}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
