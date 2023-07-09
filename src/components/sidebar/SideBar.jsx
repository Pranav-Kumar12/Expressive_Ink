import './sidebar.css'

export default function SideBar(){
    return(
        <div className='sidebar'>
            <div className="sideBarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sideImg"src={require("./pexels-victoria-rain-16890098.jpg")} alt="" />
                <p>
                    Another enthusiast on the journey of exploring.
                </p>
            </div>
            <div className="sideBarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    <li className="sidebarlistItem">Life</li>
                    <li className="sidebarlistItem">Music</li>
                    <li className="sidebarlistItem">Travelling</li>
                    <li className="sidebarlistItem">Sports</li>
                    <li className="sidebarlistItem">Tech</li>
                    <li className="sidebarlistItem">Cinema</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sideBarSocial">
                    <i className="sideBarIcon fa-brands fa-square-facebook"></i>
                    <i className="sideBarIcon fa-brands fa-square-twitter"></i>
                    <i className="sideBarIcon fa-brands fa-square-instagram"></i>
                    <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
                </div>
            </div>
        </div>
    )
}