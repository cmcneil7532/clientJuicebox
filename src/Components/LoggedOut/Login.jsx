import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";

const Login = ({ setToken, setIsLoggedIn, setUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      username,
      password,
    };
    try {
      const { token, user } = await loginUser(userObj);
      if (token) {
        localStorage.setItem("client", true);
        setToken(token);
        setIsLoggedIn(true);
        setUsername("");
        setPassword("");
        navigate("/welcome");
        setUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Please Login!</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-secondary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
