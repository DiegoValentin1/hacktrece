import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainCards from "../components/MainCards";
import RegisterScreen from '../public/RegisterScreen';
import LoginScreen from "../public/LoginScreen";
import DevicesScreen from "../components/DevisesScreen";
import ProfileScreen from "../components/ProfileScreen";
function AppRouter() {
  return (
    <Router>
      <div className="flex relative h-[100vh] w-[100vw]">
        <Routes>
          <Route path="/" element={<MainCards />} />
          <Route path="/about" element={<>About</>} />
          <Route path="/contact" element={<>Contact</>} />
          <Route path="/register" element={<RegisterScreen/>} />
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/devices" element={<DevicesScreen/>}/>
          <Route path="/profile" element={<ProfileScreen/>}/>

        </Routes>
        <div className="grid absolute bottom-0 h-[10vh] w-full place-items-center grid-cols-3 border-t-2 border-[#333]">
          <div>asdasdasd</div>
          <div>asd</div>
          <div>asd</div>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
