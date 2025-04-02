import { useState } from "react";
import SignInForm from "./Connexion";
import SignUpForm from "./Enregistrement";
import "./PageLogin.css";

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true); // Track which form to show

  return (
    <div className="auth-container">
      <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>

      <div className="auth-buttons">
        <button onClick={() => setIsSignIn(true)}>Sign In</button>
        <button onClick={() => setIsSignIn(false)}>Sign Up</button>
      </div>

      {isSignIn ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}

export default AuthPage;
