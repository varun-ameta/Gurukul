import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import "./companyRegister.scss";
// import Logo from "../../../assets/logo1.png";

const CompanyRegister = () => {
    const [isChecked, setIsChecked] = useState(false);

    // const [showDetailsModal, setShowDetailsModal] = useState(false);

    // const openDetailsModal = () => {
    //     setShowDetailsModal(true);
    //     // document.querySelector('.registration-page').classList.add('blur');
    // };

    // const closeDetailsModal = () => {
    //     setShowDetailsModal(false);
    // };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>
            <div className="flex w-full h-[80px] items-center justify-around bg-[#cfcfcf]">
                <div className="logo">
                    {/* <img src={Logo} alt="Logo" /> */}
                    <h2 className="font-semibold text-2xl">GURUKUL</h2>
                </div>

                <ul className="flex text-sm font-normal">
                    <Link to="/">
                        <li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg">
                            About
                        </li>
                    </Link>
                    <Link to="/Courses">
                        <li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg">
                            Courses
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg">
                            Contact Us
                        </li>
                    </Link>
                </ul>

                <div className="">
                    <Link to="/register">
                        <button
                            className="md:w-[90px] md:h-[40px] bg-gradient-to-r from-[#434343] to-[#1f1b1b] rounded-xl md:mr-[35px] text-white font-medium text-[15px]
                        hover:opacity-80"
                        >
                            Register
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="md:w-[90px] md:h-[40px] bg-gradient-to-r from-[#434343] to-[#1f1b1b] rounded-xl text-white font-medium text-[15px] hover:opacity-80">
                            Log in
                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-center w-full h-[90vh] p-16 bg-[#cfcfcf]">
                <div className="flex flex-col ml-[35px] w-[50%] max-w-[500px]">
                    <h1 className="text-3xl font-semibold">GURUKUL</h1>
                    <h2 className="text-left mt-[20px] leading-[22px] text-[#252525]">
                        Welcome Back !
                    </h2>
                    <p className="text-left mt-[20px] leading-[30px] text-[#252525]">
                        Enter Your Details to Login to your Gurukul account
                    </p>
                </div>

                <div className="flex flex-col items-center w-[400px] ml-[60px]  h-[400px] justify-center shadow-md rounded-[10px] text-white tracking-normal">
                    <div className="flex flex-col justify-center">
                        <h1 className="mx-[12px] text-black text-[30px]  text-center mb-[30px] font-semibold">
                            Login
                        </h1>

                        <input
                            className="mb-[15px] w-[300px] h-[50px] shadow-md pl-[15px] text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ml-[15px] rounded-2xl"
                            type="email"
                            name="email"
                            // onChange={(e) => setName(e.target.value)}
                            // id="name"
                            placeholder="Email"
                            required
                        />

                        <input
                            className="mb-[15px] w-[300px] h-[50px] shadow-md pl-[15px] text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ml-[15px] rounded-2xl"
                            type="text"
                            name="password"
                            // onChange={(e) => setName(e.target.value)}
                            // id="name"
                            placeholder="Password"
                            required
                        />

                        <Link
                            to="/dashboard"
                            className="flex items-center justify-center no-underline"
                        >
                            <button className="w-[80%] mt-[15px] rounded-[30px] bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white text-[16px] -tracking-tighter cursor-pointer p-[15px] hover:opacity-90">
                                Login
                            </button>
                        </Link>
                        {/* {showDetailsModal && <DetailsModal closeModal={closeDetailsModal} />} */}

                        <Link to="/register">
                            <h3 className="text-[#252525] text-[12px] font-semibold underline mt-[15px] text-center cursor-pointer">
                                Don't have an account? Register
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CompanyRegister;
