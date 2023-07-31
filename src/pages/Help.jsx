import React, { useState } from 'react';
import { Link } from "react-router-dom";
import User from "../assets/First/User.png";
import Footer from "../components/Footer";

function Help() {
    const [open, setOpen] = useState(false);
    const Menu = ["Profile", "Support", "Settings", "Log out"]
    return (
        <>
            <header className="w-full h-full ">

                <div className="absolute top-0 left-0 w-full h-[260px] md:h-[649px] text-black text-xl font-bold">
                    <div className="flex w-full h-[80px] items-center justify-around">
                        <div className="logo">
                            <h2>GURUKUL</h2>
                        </div>
                        <ul className="flex text-base font-normal">
                            <Link to="/dashboard"><li className="mx-[10px] cursor-pointer hover:opacity-90">DashBoard</li></Link>
                            <Link to="/about"><li className="hidden lg:block mx-[10px] cursor-pointer hover:opacity-90">About</li></Link>
                            <Link to="/Courses"><li className="mx-[10px] cursor-pointer hover:opacity-90">Courses</li></Link>
                            {/* <Link to="/dashboard"><li className="mx-[10px] cursor-pointer hover:opacity-90">Dashboard</li></Link> */}
                            <Link to="/contact"><li className="mx-[10px] cursor-pointer hover:opacity-90">Contact Us</li></Link>
                        </ul>
                        <div className='relative'>
                            <img onClick={() => setOpen(!open)} src={User} alt='user' className='h-10 w-10 object-cover border-4 border-gray-400 rounded-full cursor-pointer mt-[5px] bg-white ' />
                            {
                                open && (<div className='bg-white p-2 w-50 shadow-lg absolute text-black'>
                                    <ul>
                                        {Menu.map((menu) => (
                                            <li onClick={() => setOpen(false)} className='p-1 text-sm cursor-pointer rounded hover:bg-gray-300' key={menu}>{menu}</li>
                                        ))}
                                    </ul>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-zinc-400 mt-[120px] h-[80vh]">
                <div className="container mt-4">
                    <div className="flex justify-center">
                        <div className="w-full md:w-9/12">
                            <div className="card p-4 mt-3 bg-gray-200">
                                <h3 className="mt-5 text-center text-xl">
                                    Hi! How can we help you?
                                </h3>
                                <div className=" flex justify-center px-5 mt-4">
                                    <div className="search w-full sm:w-64 bg-white px-4 py-2 rounded-lg">
                                        <input
                                            type="text"
                                            className="border-0 outline-none bg-transparent w-full caret-transparent text-black placeholder-gray-400 focus:placeholder-opacity-0 transition-width"
                                            placeholder="Search..."
                                            name=""
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 px-4 mb-5">
                                    <div className="card-inner p-3 flex flex-col items-center bg-white border border-gray-300 rounded-lg cursor-pointer transition-transform hover:scale-110">
                                        <img src="https://i.imgur.com/Mb8kaPV.png" width="50" />
                                        <div className="text-center mt-2 mg-text text-sm">
                                            <span>Account</span>
                                        </div>
                                    </div>
                                    <div className="card-inner p-3 flex flex-col items-center bg-white border border-gray-300 rounded-lg cursor-pointer transition-transform hover:scale-110">
                                        <img src="https://i.imgur.com/ueLEPGq.png" width="50" />
                                        <div className="text-center mt-2 mg-text text-sm">
                                            <span>Payments</span>
                                        </div>
                                    </div>
                                    <div className="card-inner p-3 flex flex-col items-center bg-white border border-gray-300 rounded-lg cursor-pointer transition-transform hover:scale-110">
                                        <img src="https://i.imgur.com/D0Sm15i.png" width="50" />
                                        <div className="text-center mt-2 mg-text text-sm">
                                            <span>Product</span>
                                        </div>
                                    </div>
                                    <div className="card-inner p-3 flex flex-col items-center bg-white border border-gray-300 rounded-lg cursor-pointer transition-transform hover:scale-110">
                                        <img src="https://i.imgur.com/Z7BJ8Po.png" width="50" />
                                        <div className="text-center mt-2 mg-text text-sm">
                                            <span>Chat</span>
                                        </div>
                                    </div>
                                    <div className="card-inner p-3 flex flex-col items-center bg-white border border-gray-300 rounded-lg cursor-pointer transition-transform hover:scale-110">
                                        <img src="https://i.imgur.com/YLsQrn3.png" width="50" />
                                        <div className="text-center mt-2 mg-text text-sm">
                                            <span>Penalties</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Help;
