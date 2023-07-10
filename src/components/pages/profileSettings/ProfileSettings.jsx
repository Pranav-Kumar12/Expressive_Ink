import "./profileSettings.css";
import SideBar from "../../sidebar/SideBar";
export default function ProfileSettings() {
  return (
    <div className="profileSettings">
      <div className="settingsWrapper">
        <div className="accountUpdateDelete">
          <span className="accountUpdate">Update Profile</span>
          <span className="accountDelete">Delete account</span>
        </div>
        <form className="profileSettingsForm">
          <label>Profile Picture</label>
          <div className="profileSettingsProfileImg">
            <img
              className="profilePicOrig"
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="profile picture"
            />
            <label htmlFor="fileInput">
              <i class="profileSettingsIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" className="newFileInput" />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Pranav" />
          <label>Email</label>
          <input type="email" placeholder="pranav123@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="profileSettingsSubmit">Update Settings</button>
        </form>
      </div>
      <SideBar />
    </div>

  );
}
