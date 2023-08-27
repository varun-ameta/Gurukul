import React, { useState } from 'react';
import { Link } from "react-router-dom";
import flutterimage from "../assets/SVG Images/top-view-business-contract-form-with-coffee-eyeglasses-car-calculator-pen-with-magnifying-glass-wooden-background.jpg";
import User from "../assets/First/User.png";
import Footer from "../components/Footer";

function TermCondition() {
    const [open, setOpen] = useState(false);
    const Menu = ["Profile", "Support", "Settings", "Log out"]
    return (
        <>
            <header className="w-full h-full ">

                <div className="absolute top-0 left-0 w-full h-[260px] md:h-[649px] text-black text-xl font-bold">
                    <div className="flex w-full h-[80px] items-center justify-around">
                        <div className="logo">
                        <Link to='/'><h2>GURUKUL</h2></Link>
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

            <div className='rounded w-full p-10 flex flex-col items-center mt-[100px] justify-center'>
                <div >
                    <img src={flutterimage} alt='Flutter development' className='w-[550px] h-[350px] outline-1 outline-offset-1' />
                </div>
                <div className='font-bold text-2xl mb-2 text-center'>
                    <h1 className="text-2xl font-semibold mt-[15px]">Terms and conditions</h1>
                    <p className='text-gray-600 text-[15px] font-light text-left mt-[20px]'>
                        Welcome to Gurukul! These Terms and Conditions (the "Terms") govern your use of the learning platform and its associated services, features, and content (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using the Platform.
                        <br />

                        Use of the Platform:

                        <br />
                        1. Eligibility: You must be at least 18 years old or the age of majority in your jurisdiction to access and use the Platform. If you are accessing the Platform on behalf of an organization or entity, you represent and warrant that you have the authority to bind them to these Terms.
                        <br />
                        2. Account Registration: To access certain features of the Platform, you may be required to create an account. You must provide accurate and complete information during the registration process and keep your account information up-to-date. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        <br />
                        <br />
                        User Content:
                        <br />
                        1. You may have the opportunity to contribute content to the Platform, such as comments, questions, or other materials ("User Content"). By submitting User Content, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, display, reproduce, modify, adapt, publish, distribute, and create derivative works from your User Content.
                        <br />
                        Platform Content:
                        <br />
                        1. All materials, including text, graphics, images, videos, software, and any other content made available through the Platform ("Platform Content") are the property of the Platform or its licensors and protected by intellectual property laws.

                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default TermCondition;
