import "./Register.scss";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitleSpan">Create Account</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="Enter Your username..." />
        <label> Email</label>
        <input type="text" placeholder="Enter Your email..." />
        <label> Password</label>
        <input type="password" placeholder="Enter Your password..." />
        <button className="registerButton">Register</button>
      </form>
      <button className="loginButton">Login</button>
    </div>
  );
}
