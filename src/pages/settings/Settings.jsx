import "./Settings.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Upate Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfPicDiv">
            <img
              className="settingsProfPicImg"
              sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 811px) 334px, (min-aspect-ratio: 3744/5616) calc((calc(100vh - 310px)) * 0.666667), calc(100vw - 32px)"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
              alt="closeup photography of woman smiling"
            />
            <label htmlFor="fileInput">
              <i className="settingsProfPicIcon fas fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Gojo Satoru" />
          <label>Email</label>
          <input type="email" placeholder="sixeyesholder@gojo.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
