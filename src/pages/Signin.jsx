import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <div className="SignInDiv">
      <div className="SignInContainer">
        <h1 className="Signin" style={{ color: "#001f3f" }}>
          Sign In
        </h1>
        <div className="GoogleButton">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
