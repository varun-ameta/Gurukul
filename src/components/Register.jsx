import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
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
            <div className="">

                <div className="flex w-full h-[80px] items-center justify-around bg-[#cfcfcf]">
                    <div className="logo">
                        {/* <img src={Logo} alt="Logo" /> */}
                        <h2 className="font-semibold text-2xl">GURUKUL</h2>
                    </div>

                    <ul className="flex text-sm font-normal">
                        <Link to="/"><li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg">Home</li></Link>
                        <Link to="/about"><li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg">About</li></Link>
                        <Link to="/Courses"><li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg">Courses</li></Link>
                        <Link to="/"><li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg">Contact Us</li></Link>
                    </ul>               <div className="">
                        <Link to="/register"><button className="md:w-[90px] md:h-[40px] bg-gradient-to-r from-[#434343] to-[#1f1b1b] rounded-xl md:mr-[35px] text-white font-medium text-[15px]
                        hover:opacity-80">Register</button></Link>
                        <Link to="/login"><button className="md:w-[90px] md:h-[40px] bg-gradient-to-r from-[#434343] to-[#1f1b1b] rounded-xl text-white font-medium text-[15px] hover:opacity-80">Log in</button></Link>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-[90vh] p-16 bg-[#cfcfcf]">
                    <div className="flex flex-col ml-[35px] w-[50%] max-w-[500px]">
                        <h1 className="text-3xl font-semibold">GURUKUL</h1>
                        <h2 className="text-left mt-[20px] leading-[22px] text-[#252525]">Experience hassle-free <br /> Transaction</h2>
                        <p className="text-left mt-[20px] leading-[30px] text-[#252525]">Streamline transaction with DigiPay, a seamless <br /> digital wallet. Simplify payments and embrace the <br /> future of cashless transaction with our secure and <br /> user-friendly platform using e-Rupi</p>
                    </div>

                    <div className="flex flex-col items-center w-[450px] ml-[60px] p-2 h-[500px] rounded-[10px] text-white tracking-normal">
                        <div className="flex flex-col justify-center">
                            <h1 className="mx-[12px] text-black text-[30px]  text-center mb-[15px] font-semibold">Register</h1>
                            <input
                                className="mb-[15px] w-full h-[50px] shadow-md pl-[15px] text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ml-[15px] rounded-2xl"
                                type="text"
                                name="name"
                                // onChange={(e) => setName(e.target.value)}
                                // id="name"
                                placeholder="Full Name"
                                required
                            />
                            <input
                                className="mb-[15px] w-full h-[50px] shadow-md pl-[15px] text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ml-[15px] rounded-2xl"
                                type="email"
                                name="email"
                                // onChange={(e) => setName(e.target.value)}
                                // id="name"
                                placeholder="Email"
                                required
                            />
                            <input
                                className="mb-[15px] w-full h-[50px] shadow-md pl-[15px] text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ml-[15px] rounded-2xl"
                                type="number"
                                name="phone"
                                // onChange={(e) => setName(e.target.value)}
                                // id="name"
                                placeholder="Phone"
                                required
                            />
                            <input
                                className="mb-[15px] w-full h-[50px] shadow-md pl-[15px] text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ml-[15px] rounded-2xl"
                                type="text"
                                name="password"
                                // onChange={(e) => setName(e.target.value)}
                                // id="name"
                                placeholder="Password"
                                required
                            />
                            <input
                                className="mb-[15px] w-full h-[50px] shadow-md pl-[15px] text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ml-[15px] rounded-2xl"
                                type="text"
                                name="confirm-password"
                                // onChange={(e) => setName(e.target.value)}
                                // id="name"
                                placeholder="Confirm Password"
                                required
                            />
                            <div className="w-full h-[30px] flex items-center justify-center">
                                <input className="mr-[5px]"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="text-[15px] text-center text-[#252525] font-semibold">
                                    I accept the Terms and Conditions
                                </label>
                            </div>


                            <Link to="/login" className="flex items-center justify-center no-underline">
                                <button className="w-[80%] mt-[10px] rounded-[30px] bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white text-[16px] -tracking-tighter cursor-pointer p-[15px] hover:opacity-90">REGISTER</button>
                            </Link>
                            {/* {showDetailsModal && <DetailsModal closeModal={closeDetailsModal} />} */}


                            <Link to="/login">
                                <h3 className="text-[#252525] text-[12px] font-semibold underline mt-[18px] text-center cursor-pointer">Already have an account? Login</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default CompanyRegister
