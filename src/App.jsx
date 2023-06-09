import { useState, useEffect } from "react";
import {
  Navbar,
  Login,
  Register,
  Home,
  Welcome,
  Post,
  SignOut,
} from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUsers } from "./api/api.js";

function App() {
  const [users, setUsers] = useState({});
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const client = localStorage.getItem("client");

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUsers());
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Navbar client={client} />

      <Routes>
        {client === "true" ? (
          <>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/post" element={<Post user={user} />} />
            <Route
              path="/signout"
              element={
                <SignOut
                  setToken={setToken}
                  setIsLoggedIn={setIsLoggedIn}
                  setUser={setUser}
                />
              }
            />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={
                <Login
                  setToken={setToken}
                  setIsLoggedIn={setIsLoggedIn}
                  setUser={setUser}
                />
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
