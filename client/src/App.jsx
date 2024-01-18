import "./App.css";
import { useState } from "react";
import appFirebase from "./credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "./views/home/Home";
import LoginForm from "./components/loginForm/LoginForm";

const auth = getAuth(appFirebase);

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  });

  return <div>{user ? <Home userEmail={user.email} /> : <LoginForm />}</div>;
}

export default App;
