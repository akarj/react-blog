import { Link } from "react-router-dom";
import "./Post.scss";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          sizes="(max-width: 767px) 100vw, (max-width: 532px) 500px, (max-height: 530px) 500px, (min-aspect-ratio: 3169/1584) calc((calc(100vh - 280px)) * 2.00063), calc(100vw - 32px)"
          src={post.photo}
          alt="aerial photography of mountains and near trees during daytime"
        ></img>
      )}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <span className="postCat">{category.name}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>

      <div className="postDesc">{post.desc} </div>
    </div>
  );
}
