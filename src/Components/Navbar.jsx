import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import logo from '../assets/logo.png'
const Navbar = () => {
    const [theme, setTheme] = useState(false)
    return (
        <>
            <div className={`${theme ? 'bg-black text-white' : 'bg-white text-black'} px-6 shadow-2xl  flex justify-between items-center w-full h-17`}>
                <h1 className="text-xl md:text-4xl hover:scale-103 transition duration-500 cursor-pointer w-1/5 leading-3.5 md:leading-5 ">
                    <span className="text-blue-900 font-valty">Country</span><br />
                    <span className="text-green-500 ms-4 md:ms-7 font-valty">Explorer</span>
                </h1>

                <input className="w-1/2 border px-2 md:px-5 py-1.5 md:py-3 rounded-full " type="text" placeholder="Search Country by name..." />
                <button onClick={() => setTheme(!theme)} className={` md:w-1/5 flex items-center justify-center gap-1 md:gap-2 px-2 md:px-9 py-2 md:py-3 border bg-black text-white font-bold text-xs md:text-xl font-serif rounded-full hover:scale-103 transition duration-500  `}>{theme ? <MdOutlineDarkMode /> : <MdDarkMode />}   Theme</button>
            </div>
        </>
    )
}

export default Navbar