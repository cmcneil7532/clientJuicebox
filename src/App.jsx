import { useState, useEffect } from "react";
import { Navbar, Login, Register, Home } from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUsers } from "./api/api.js";

function App() {
  const [users, setUsers] = useState({});
  const [token, setToken] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUsers());
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
