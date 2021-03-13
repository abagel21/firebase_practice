import React, { Fragment } from "react";
import { auth } from "./firebase";

const ChatMessage = ({ message: { text, uid, photoURL } }) => {
  const isMine = uid === auth.currentUser.uid;
  return (
    <Fragment>
      <div className={`message ${isMine ? "sent" : "received"}`}>
        <img src={photoURL} alt="The user's profile" />
        <p>{text}</p>
      </div>
    </Fragment>
  );
};

ChatMessage.propTypes = {};

export default ChatMessage;
