import React from "react";
import firebase from "firebase";
import { auth } from "./firebase";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <button className="signIn" onClick={signInWithGoogle}>
      Log in with Google
    </button>
  );
};

SignIn.propTypes = {};

export default SignIn;
