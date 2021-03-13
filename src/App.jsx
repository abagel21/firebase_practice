import "./App.css";
import { auth } from "../src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./ChatRoom";
import SignIn from "./SignIn.jsx";

const SignOut = () => {
  return (
    auth.currentUser && (
      <button className="signOut" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>{user ? <SignOut /> : null}</header>
      {user ? <ChatRoom /> : <SignIn />}
    </div>
  );
}

export default App;
