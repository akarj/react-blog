import "./SinglePost.scss";

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          sizes="(max-width: 767px) 100vw, (max-width: 532px) 500px, (max-height: 615px) 500px, (min-aspect-ratio: 3543/2372) calc((calc(100vh - 280px)) * 1.49368), calc(100vw - 32px)"
          src="https://images.unsplash.com/photo-1415650328328-1909c4ceabdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
          alt="waterfalls surrounded by green trees during daytime"
        ></img>
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Gojo Satoru</b>
          </span>
          <span className="singlePostDate">1 Hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae esse
          beatae quam quo praesentium sunt laborum laboriosam, iure alias a
          doloremque dolorem, optio, quisquam nulla placeat ad modi asperiores
          obcaecati. Architecto delectus earum a voluptatem eos assumenda
          aperiam officiis vel repellat, doloremque ullam adipisci debitis
          maxime accusantium est dolore. Consequatur vel repellat omnis
          laboriosam, molestias sint quod est maiores cum assumenda voluptate!
          Doloribus excepturi illum harum dignissimos eius magni non velit ea
          corrupti sequi! Enim vero consectetur repellat fuga. Tempora
          reprehenderit commodi asperiores, ducimus cum ad et eos? Iusto
          blanditiis exercitationem dolore totam animi dicta, tempora incidunt
          ipsum sint vel. <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum in hic
          debitis aperiam sit ullam tempora possimus amet odio officiis
          molestiae eos, velit distinctio quis magnam quibusdam quasi animi
          consequatur id et! Ea, aperiam illum ratione eum iure recusandae earum
          architecto quisquam hic dolor optio numquam omnis non suscipit facere.{" "}
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          voluptate iusto saepe quas est soluta sint architecto. Blanditiis
          voluptas officia veritatis et ex? Velit, vero doloremque. At aut
          voluptatum officia odit placeat magnam corrupti, autem magni error
          fugit corporis impedit, maiores dolores beatae, doloribus ratione.
        </p>
      </div>
    </div>
  );
}
