import React, { Fragment, useState } from "react";
import firebase from "firebase";
import { auth, firestore } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

const ChatRoom = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const addMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
  };
  return (
    <div className="roomWrapper">
      <div className="chatWrapper">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <form className="sendMessage" onSubmit={addMessage}>
        <input
          type="text"
          onChange={(e) => setFormValue(e.target.value)}
          value={formValue}
          placeholder="Send a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

ChatRoom.propTypes = {};

export default ChatRoom;
