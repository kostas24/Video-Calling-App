import { React, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Button } from "@mui/material";
import VideoCall from "../VideoCall";

const Account = () => {
  const [inCall, setInCall] = useState(false);
  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  return (
    <div className="AccountDiv">
      <h1 className="AccountText" style={{ fontSize: "34px" }}>
        Account
      </h1>
      <img style={{ borderRadius: "50%" }} src={user?.photoURL} alt="Profile" />
      <p>User: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      <div className="App" style={{ height: "100%" }}>
        {inCall ? (
          <VideoCall setInCall={setInCall} />
        ) : (
          <Button onClick={() => setInCall(true)}>Join Call</Button>
        )}
      </div>
      <button onClick={handleSignOut} className="logoutButton">
        Logout
      </button>
    </div>
  );
};

export default Account;
