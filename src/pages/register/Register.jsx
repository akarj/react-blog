import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const submitHandle = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
      console.log(res);
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
  };
  return (
    <div className="register">
      <span className="registerTitleSpan">Create Account</span>
      <form className="registerForm" onSubmit={submitHandle}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Your username..."
          className="registerInput"
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <label> Email</label>
        <input
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="text"
          className="registerInput"
          placeholder="Enter Your email..."
        />
        <label> Password</label>
        <input
          type="password"
          className="registerInput"
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="Enter Your password..."
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="loginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something Went wrong
        </span>
      )}
    </div>
  );
}
