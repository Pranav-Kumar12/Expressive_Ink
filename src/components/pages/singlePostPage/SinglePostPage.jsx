import SideBar from '../../sidebar/SideBar'
import SinglePost from '../../singlePost/SinglePost'
import './singlePostPage.css'

export default function SinglePostPage(){
    return (
        <div className='singlePostPage'>
            {/* Post will be here */}
            <SinglePost/>
            <SideBar/>
        </div>
    )
}