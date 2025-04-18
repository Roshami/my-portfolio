import NavButton from "../components/navButton";
import { FaHome, FaUser, FaLaptopCode } from "react-icons/fa";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { MdContactPhone } from "react-icons/md";
import { Route, Routes } from "react-router-dom";
import About from "./about";
import HomePage from "./homePage";
import Project from "./peoject";
import Skills from "./skills";
import Countact from "./contact";

export default function Home() {
    return (
        <div className="flex h-screen bg-tertiary relative">
            <h1 className="text-4xl text-white font-bold absolute top-4.5 left-65 transform -translate-x-1/2 max-sm:text-3xl max-sm:left-45 ">Roshami Thashmantha</h1>
            <div className="absolute top-0 left-0 h-full w-[11%] flex flex-col justify-center items-center">
                <div className="mt-[20%] max-sm:ml-[70%] max-md:ml-[70%]">
                    <NavButton icon={ FaHome } to={"/"} />
                    <NavButton icon={ FaUser } to={"/about"} />
                    <NavButton icon={ PiProjectorScreenChartFill } to={"/project"} />
                    <NavButton icon={ FaLaptopCode } to={"/skills"} />
                    <NavButton icon={ MdContactPhone } to={"/contact"} />
                </div>
            </div>
            <div className="bg-[#f5f5f5] flex w-[90%] h-[85%]  ml-[12%] mr-[2%] max-md:ml-[20%] mt-[6%] max-lg:mt-[8%] max-md:mt-[12%] max-sm:mt-[17%] rounded-4xl inset-shadow-sm inset-shadow-indigo-950/55 overflow-auto scrollbar p-[1%]">
            <Routes>
                <Route path="/*" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Countact />} />
            </Routes>
            </div>
        </div>
    )
}