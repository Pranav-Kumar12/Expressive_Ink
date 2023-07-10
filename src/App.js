import NavBar from "./components/navbar/NavBar"
import Home from "./components/pages/home/Home"
import Login from "./components/pages/login/Login";
import ProfileSettings from "./components/pages/profileSettings/ProfileSettings";
import Register from "./components/pages/register/Register";
import SinglePostPage from "./components/pages/singlePostPage/SinglePostPage";
import Write from "./components/pages/write/Write";
function App() {
  return (
    <>
      <NavBar/>
      <Register/>
    </>
  );
}
export default App;
