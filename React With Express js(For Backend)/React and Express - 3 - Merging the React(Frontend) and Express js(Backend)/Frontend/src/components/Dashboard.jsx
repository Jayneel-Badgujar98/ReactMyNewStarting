// src/components/Dashboard.jsx
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const getUserInfo = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/api/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? <p>Welcome, {user.name}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
