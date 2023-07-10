import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  const user = true;
  return (
    <div className="top">
      <div className="navLeft">
        <i className="navIcon fa-brands fa-square-facebook"></i>
        <i className="navIcon fa-brands fa-square-twitter"></i>
        <i className="navIcon fa-brands fa-square-instagram"></i>
        <i className="navIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navListItem">
            {
                user ? ("LOGOUT") : <></>
            }
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Profile-Picture"
            className="profileImg"
          />
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
