import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginPageTitle">Login</span>
      <form className="loginInfo">
        <label>Email</label>
        <input
          type="email"
          className="emailInfo"
          placeholder="abc@gmail.com"
        />
        <label>Password</label>
        <input type="password" className="passwordInfo" />
        <button className="submitLoginInfo">
          <Link className="link" to="/">Login</Link>
        </button>
      </form>
      <button className="loginPageRegister">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  );
}
