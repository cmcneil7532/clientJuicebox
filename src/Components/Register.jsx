import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  //Submit form to create a new user
  const handleSubmit = async (event) => {
    event.preventDefault();
    const registerObj = {
      username: username,
      password: password,
      name: name,
      location: location,
    };

    try {
      const { token } = await createUser(registerObj);

      if (!token) {
        console.log("Error creating a new token!");
      } else {
        setLocation("");
        setName("");
        setPassword("");
        setUsername("");
        navigate("/login");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Create username
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
            Create password
          </label>
          <input
            type="text"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputLocation" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-secondary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
