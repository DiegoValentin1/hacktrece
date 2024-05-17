import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainCards from '../components/MainCards';
import RegisterScreen from '../public/RegisterScreen';
import LoginScreen from "../public/LoginScreen";
import DevicesScreen from "../components/DevisesScreen";
import ProfileScreen from "../components/ProfileScreen";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdDevicesOther } from "react-icons/md";
import { IoLeafOutline, IoLeaf  } from "react-icons/io5";
import MainCert from '../components/MainCert';

function AppRouter() {
    const [option, setOption] = useState(0);
    return (
        <Router>
            <div className='flex relative h-[100vh] w-[100vw] bg-[#e1e1e1] text-[#333]'>
                <div className='w-full h-full p-4'>
                    <Routes>
                        <Route path="/" element={<MainCards />} />
                        <Route path="/about" element={<>About</>} />
                        <Route path="/contact" element={<MainCert/>} />
                          <Route path="/register" element={<RegisterScreen/>} />
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/devices" element={<DevicesScreen/>}/>
          <Route path="/profile" element={<ProfileScreen/>}/>
                    </Routes>
                </div>
                <div className='grid absolute bottom-0 h-[10vh] w-full place-items-center grid-cols-3  bg-[#e4e4e4]'>
                    <Link to={'/'} onClick={()=>setOption(0)}>
                        {option !== 0 && <GoHome style={{ height: "50px", width: "40px" }} />}
                        {option === 0 && <GoHomeFill style={{height:"50px", width:"40px", color:"#fb8500"}}/>}
                    </Link>
                    <Link to={'/about'} onClick={()=>setOption(1)}>
                        {option !==1 && <MdDevicesOther style={{ height: "50px", width: "40px" }} />}
                        {option === 1 && <MdDevicesOther style={{ height: "50px", width: "40px", color:"#fb8500" }} />}
                    </Link>
                    <Link to={'/contact'} onClick={()=>setOption(2)}>
                        {option !==2 && <IoLeafOutline style={{ height: "50px", width: "40px" }} />}
                        {option ===2 && <IoLeaf style={{height:"50px", width:"40px", color:"#fb8500"}}/>}
                    </Link>
                </div>
            </div>
        </Router>
    );
}

export default AppRouter;
