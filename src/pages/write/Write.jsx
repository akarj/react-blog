import "./Write.scss";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        sizes="(max-width: 767px) 100vw, (max-width: 432px) 400px, (max-height: 781px) 400px, (min-aspect-ratio: 3967/4959) calc((calc(100vh - 280px)) * 0.79996), calc(100vw - 32px)"
        src="https://images.unsplash.com/photo-1626444344029-5c680f7513c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
        alt="blue and white bird flying on green grass during daytime"
      ></img>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            className="writeInput"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
