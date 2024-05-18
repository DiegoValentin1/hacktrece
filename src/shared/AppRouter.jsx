import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainCards from '../components/MainCards';
import RegisterScreen from '../public/RegisterScreen';
import LoginScreen from "../public/LoginScreen";
import DevicesScreen from "../components/DevisesScreen";
import ProfileScreen from "../components/ProfileScreen";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdDevicesOther } from "react-icons/md";
import { IoLeafOutline, IoLeaf } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoLocationOutline, IoLocationSharp  } from "react-icons/io5";
import MainCert from '../components/MainCert';
import Location from '../components/Location';
import MainCash from '../components/MainCash';

function AppRouter() {
    const [option, setOption] = useState(0);
    return (
        <Router>
            {true ? 
            <div className='flex relative h-[100vh] w-[100vw] bg-[#e1e1e1] text-[#333]'>
                <div className='w-full h-full p-4'>
                    <Routes>
                        <Route path="/" element={<MainCards />} />
                        <Route path="/billing" element={<MainCash/>} />
                        <Route path="/contact" element={<MainCert />} />
                        <Route path="/register" element={<RegisterScreen />} />
                        <Route path="/devices" element={<DevicesScreen />} />
                        <Route path="/profile" element={<ProfileScreen />} />
                        <Route path="/location" element={<Location/>} />
                    </Routes>
                </div>
                <div className='grid fixed bottom-0 h-[7vh] w-full place-items-center grid-cols-5  bg-[#e4e4e4] opacity-90'>
                    <Link to={'/'} onClick={() => setOption(0)}>
                        {option !== 0 && <GoHome style={{ height: "30px", width: "30px" }} />}
                        {option === 0 && <GoHomeFill style={{ height: "30px", width: "30px", color: "#fb8500" }} />}
                    </Link>
                    <Link to={'/billing'} onClick={() => setOption(3)}>
                        {option !== 3 && <FaRegMoneyBillAlt style={{ height: "35px", width: "30px" }} />}
                        {option === 3 && <FaRegMoneyBillAlt style={{ height: "35px", width: "30px", color: "#fb8500" }} />}
                    </Link>
                    <Link to={'/devices'} onClick={() => setOption(1)}>
                        {option !== 1 && <MdDevicesOther style={{ height: "30px", width: "30px" }} />}
                        {option === 1 && <MdDevicesOther style={{ height: "30px", width: "30px", color: "#fb8500" }} />}
                    </Link>
                    <Link to={'/contact'} onClick={() => setOption(2)}>
                        {option !== 2 && <IoLeafOutline style={{ height: "30px", width: "30px" }} />}
                        {option === 2 && <IoLeaf style={{ height: "30px", width: "30px", color: "#fb8500" }} />}
                    </Link>
                    <Link to={'/location'} onClick={() => setOption(4)}>
                        {option !== 4 && <IoLocationOutline style={{ height: "30px", width: "30px" }} />}
                        {option === 4 && <IoLocationSharp  style={{ height: "30px", width: "30px", color: "#fb8500" }} />}
                    </Link>
                </div>
            </div> :
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                </Routes>
            }
        </Router>
    );
}

export default AppRouter;
