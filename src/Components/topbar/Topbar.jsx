import { Link } from "react-router-dom";
import "./topbar.scss";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topicons fab fa-facebook-f"></i>
        <i className="topicons fab fa-twitter"></i>
        <i className="topicons fab fa-instagram"></i>
        <i className="topicons fab fa-behance"></i>
      </div>
      <div className="topCenter">
        <nav className="Navigation">
          <ul className="NavBar">
            <li className="topListItem">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/about" className="link">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link">{user && "LOG OUT"}</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 811px) 334px, (min-aspect-ratio: 3744/5616) calc((calc(100vh - 310px)) * 0.666667), calc(100vw - 32px)"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            alt="closeup photography of woman smiling"
          ></img>
        ) : (
          <ul className="NavBar">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
