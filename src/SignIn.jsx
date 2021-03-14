import React from "react";
import firebase from "firebase";
import { auth, firestore } from "./firebase";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((res) => {
      const user = res.user;
      firestore.runTransaction(async (transaction) => {
        const ref = firestore.collection("users").doc(user.uid);
        const currentUser = await transaction.get(ref);
        if (currentUser.exists) {
          // it is impossible to update a user in this application
        } else {
          const userDoc = {
            email: user.email,
            uid: user.uid,
          };
          transaction.set(ref, userDoc);
        }
      });
    });
  };
  return (
    <button className="signIn" onClick={signInWithGoogle}>
      Log in with Google
    </button>
  );
};

SignIn.propTypes = {};

export default SignIn;
