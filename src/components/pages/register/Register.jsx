import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerPageTitle">Register</span>
      <form className="registerInfo">
        <label>Username</label>
        <input type="text" className="userNameInfo" placeholder="pranav12" />
        <label>Email</label>
        <input type="email" className="emailInfo" placeholder="abc@gmail.com" />
        <label>Password</label>
        <input type="password" className="passwordInfo" />
        <button className="submitRegisterInfo">Register</button>
      </form>
      <button className="registerPageLogin">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
