import NavBar from "./components/navbar/NavBar";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import ProfileSettings from "./components/pages/profileSettings/ProfileSettings";
import Register from "./components/pages/register/Register";
import SinglePostPage from "./components/pages/singlePostPage/SinglePostPage";
import Write from "./components/pages/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  const user=true;
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/register" element={user ? <Home/> : <Register/>} />
        <Route exact path="/login" element={user ? <Home/> : <Login/>} />
        <Route exact path="/profile" element={user ? <ProfileSettings/> : <Register/>} />
        <Route exact path="/write" element={user ? <Write/> : <Register/>} />
        <Route exact path="/post/:postId" element={<SinglePostPage/>} />
      </Routes>
    </Router>
  );
}
export default App;
