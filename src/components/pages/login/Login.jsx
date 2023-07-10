import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginPageTitle">Login</span>
      <form className="loginInfo">
        <label>Username</label>
        <input
          type="text"
          className="userNameInfo"
          placeholder="pranav12"
        />
        <label>Email</label>
        <input
          type="email"
          className="emailInfo"
          placeholder="abc@gmail.com"
        />
        <label>Password</label>
        <input type="password" className="passwordInfo" />
        <button className="submitLoginInfo">Login</button>
      </form>
      <button className="loginPageRegister">Register</button>
    </div>
  );
}
