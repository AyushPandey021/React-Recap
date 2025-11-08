import React, { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // 🌟 Conditional Rendering
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-blue-500">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">User List</h1>
      <ul className="bg-white shadow-lg rounded-2xl p-6 w-96 space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="border-b last:border-none py-2 text-gray-700 hover:bg-gray-50 transition-all"
          >
            <strong>{user.name}</strong> <br />
            <span className="text-sm text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}





export default App
