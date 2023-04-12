import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
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

  return (
    <div className="AccountDiv">
      <h1 className="AccountText">Account</h1>
      <p className="WelcomeText">{user?.displayName}</p>
      <button onClick={handleSignOut} className="logoutButton">
        Logout
      </button>
      <div className="App" style={{ height: "100%" }}>
        {inCall ? (
          <VideoCall setInCall={setInCall} />
        ) : (
          <Button onClick={() => setInCall(true)}>Join Call</Button>
        )}
      </div>
    </div>
  );
};

export default Account;
