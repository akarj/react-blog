import "./Post.scss";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        sizes="(max-width: 767px) 100vw, (max-width: 532px) 500px, (max-height: 530px) 500px, (min-aspect-ratio: 3169/1584) calc((calc(100vh - 280px)) * 2.00063), calc(100vw - 32px)"
        src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
        alt="aerial photography of mountains and near trees during daytime"
      ></img>

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>

      <div className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat
        omnis nihil error voluptatibus aperiam qui sed recusandae eveniet
        assumenda asperiores consectetur quos, minus facere quia cum, ut iusto
        possimus. Error voluptatem nulla tempora debitis asperiores pariatur
        dignissimos fugiat quod minima nesciunt iste explicabo laboriosam ipsum
        suscipit facilis, ex esse. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat
        omnis nihil error voluptatibus aperiam qui sed recusandae eveniet
        assumenda asperiores consectetur quos, minus facere quia cum, ut iusto
        possimus. Error voluptatem nulla tempora debitis asperiores pariatur
        dignissimos fugiat quod minima nesciunt iste explicabo laboriosam ipsum
        suscipit facilis, ex esse. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat
        omnis nihil error voluptatibus aperiam qui sed recusandae eveniet
        assumenda asperiores consectetur quos, minus facere quia cum, ut iusto
        possimus. Error voluptatem nulla tempora debitis asperiores pariatur
        dignissimos fugiat quod minima nesciunt iste explicabo laboriosam ipsum
        suscipit facilis, ex esse.
      </div>
    </div>
  );
}
