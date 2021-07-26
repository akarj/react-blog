import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitlesSm">React & Node</span>
          <span className="headerTitlesLg">Blog</span>
        </div>
        <img
          className="headerImg"
          sizes="(max-width: 767px) 100vw, (max-width: 532px) 500px, (max-height: 656px) 500px, (min-aspect-ratio: 4592/3448) calc((calc(100vh - 280px)) * 1.33179), calc(100vw - 32px)"
          src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
          alt="macro photography of drop of water on top of green plant"
        />
      </div>
    </div>
  );
}
