import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = ({ setToken, setIsLoggedIn, setUser }) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("client");
    setUser({});
    setToken("");
    setIsLoggedIn(false);
    navigate("/home");
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={handleSignOut}>
        SignOut
      </button>
    </div>
  );
};

export default SignOut;
