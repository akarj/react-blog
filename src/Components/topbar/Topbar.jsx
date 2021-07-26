import "./topbar.scss";

export default function Topbar() {
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
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOG OUT</li>
          </ul>
        </nav>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 811px) 334px, (min-aspect-ratio: 3744/5616) calc((calc(100vh - 310px)) * 0.666667), calc(100vw - 32px)"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
          alt="closeup photography of woman smiling"
        ></img>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
