import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = ({ setToken, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("client");
    setToken("");
    setIsLoggedIn(false);
    navigate("/");
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
