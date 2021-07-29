import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitleSpan">Login</span>
      <form className="loginForm">
        <label> Email</label>
        <input type="text" placeholder="Enter Your email..." />
        <label> Password</label>
        <input type="password" placeholder="Enter Your password..." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
