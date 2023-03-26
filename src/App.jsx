import {Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navigation/Navbar";


import Home from "./pages/Home/Home";
import Announcement from "./components/Announcements/announcement";
import SignIn from "./pages/sign-in/sign-in";
import Register from "./pages/Register/register";


const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element= { <Announcement /> }>
      <Route path="/" element= { <Navbar /> }>
           <Route index element= { <Home /> } />
           <Route path="shop" element= { <Shop /> } />
           <Route path="sign-in" element= { <SignIn /> } />
           <Route path="register" element= { <Register /> } />
           
      </Route>
      </Route>
    </Routes>
  );
};

export default App;