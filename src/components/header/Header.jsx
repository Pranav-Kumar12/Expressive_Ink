import './header.css'

export default function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleFirst">Blog it your way</span>
                <span class="headerTitleSecond">Expressive Ink</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/6843561/pexels-photo-6843561.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image_of_nature"/>
        </div>
    )
}