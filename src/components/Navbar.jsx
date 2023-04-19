import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Navbar">
      <img
        className="navbar-text"
        src={require("../images/PSEUDOSTARTER.png")}
      />
      {user?.displayName ? (
        <ul className="navList">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="calButtonNav">Home</li>
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <li className="calButtonNav">Calendar</li>
          </Link>
          <Link to="/account" style={{ textDecoration: "none" }}>
            <li className="accButtonNav">Account</li>
          </Link>
          <li className="logoutButtonNav" onClick={handleSignOut}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="SignInRedirect" to="/signin">
          <button className="signinButtonNav">Sign in</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
