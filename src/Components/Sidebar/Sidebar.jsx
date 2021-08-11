import { useEffect, useState } from "react";
import axios from "axios";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem" id="titleInfoDiv">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          //   className="topImg"
          sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 811px) 334px, (min-aspect-ratio: 3744/5616) calc((calc(100vh - 310px)) * 0.666667), calc(100vw - 32px)"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
          alt="closeup photography of woman smiling"
        ></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ab
          natus? Quam vitae aut unde delectus, voluptates quis sapiente eaque
          beatae sit adipisci fugit eligendi! Iste, quas nostrum blanditiis
          quaerat eius quidem eum nam odit doloribus tenetur eos illo nemo
          officia, cumque molestias praesentium necessitatibus natus, ullam
          voluptas error maxime.
        </p>
      </div>
      <div className="sidebarItem" id="categoryInfoDiv">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((category) => (
            <Link
              to={`/?cat=${category.name}`}
              className="link"
              key={category._id}
            >
              <li className="sidebarListItem" key={category._id}>
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem" id="socialMediaIconDiv">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-f"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
          <i className="sidebarIcon fab fa-behance"></i>
        </div>
      </div>
    </div>
  );
}
