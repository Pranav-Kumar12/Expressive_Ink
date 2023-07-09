import "./navbar.css"

export default function NavBar(){
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
                    <li className="navListItem">HOME</li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">CONTACT</li>
                    <li className="navListItem">WRITE</li>
                    <li className="navListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="navRight">
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Profile-Picture" className="profileImg"/>
                <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}