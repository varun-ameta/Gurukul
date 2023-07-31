import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="w-full h-full bg-white">
            <div className="mt-[20px] md:flex md:items-center md:justify-around md:mt-[50px] md:w-full">
                <div className="ml-[10px] md:ml[20px] md:w-[33.33%]">
                    <h2 className="text-[15px] font-semibold md:text-base">ABOUT GURUKUL</h2>
                    <p className="text-[13px] mt-[10px] leading-5 text-left md:text-base">Welcome to our cutting-edge learning platform, where knowledge knows no bounds. Discover a world of diverse courses, expert instructors, and interactive learning experiences. Ignite your curiosity, lives.</p>
                </div>
                <div className="mt-[20px] ml-[10px] md:mt-[50px] ">
                    <h2 className="text-[15px] font-semibold md:text-base">LINKS</h2>
                    <ul>
                    <Link to="/"><li className="text-[13px] mt-[10px] leading-5 text-left md:text-base md:hover:cursor-pointer">Home</li></Link>
                    <Link to="/"><li className="text-[13px] mt-[10px] leading-5 text-left md:text-base md:hover:cursor-pointer">Contact</li></Link>
                    <Link to="/"><li className="text-[13px] mt-[10px] leading-5 text-left md:text-base md:hover:cursor-pointer">Programs</li></Link>
                    <Link to="/terms"><li className="text-[13px] mt-[10px] leading-5 text-left md:text-base md:hover:cursor-pointer">Terms & Conditions</li></Link>
                    <Link to="/help"><li className="text-[13px] mt-[10px] leading-5 text-left md:text-base md:hover:cursor-pointer">Help</li></Link>
                    </ul>
                </div>
                <div className="mt-[20px] ml-[10px] md:mt-[-9px]">
                    <h2 className="text-[15px] font-semibold md:text-base">SUBSCRIBE</h2>
                    <p className="text-[13px] mt-[10px] leading-5 text-left md:text-base">Join us in this advancing journey and connect to amazing people <br/> in the world by just one click !</p>

                    <div className="mt-[20px]">
                        <input
                            className=" border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 p-1 w-[100] h-[40px] rounded-sm"
                            type="text"
                            name="subscribe"
                            placeholder="Email"
                        />
                        <button className="w-[100px] h-[40px] bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white rounded-sm md:hover:opacity-90">Subscribe</button>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-center mt-[50px]">
                <Link to="https://www.facebook.com"><div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[18px] mx-[12.5px] bg-[#1877f2] text-white md:w-[50px] md:h-[50px] md:hover:cursor-pointer md:hover:opacity-90">
                    <FaFacebookF size={20} /> 
                </div></Link>
                <Link to="https://www.instagram.com/dikshant_dak/"><div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[18px] mx-[12.5px] bg-[#E84C88] text-white md:w-[50px] md:h-[50px] md:hover:cursor-pointer md:hover:opacity-90">
                    <FaInstagram size={20} />
                </div></Link>
                <Link to="https://www.twitter.com"><div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[18px] mx-[12.5px] bg-[#1DA1F2] text-white md:w-[50px] md:h-[50px] md:hover:cursor-pointer md:hover:opacity-90">
                    <FaTwitter size={20} />
                </div></Link>
                <Link to="https://www.youtube.com"><div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[18px] mx-[12.5px] bg-[#c4302b] text-white md:w-[50px] md:h-[50px] md:hover:cursor-pointer md:hover:opacity-90">
                    <FaYoutube size={20} />
                </div></Link>
                <Link to="https://www.linkedin.com/in/dikshant-dak/"><div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[18px] mx-[12.5px] bg-[#0A66C2] text-white md:w-[50px] md:h-[50px] md:hover:cursor-pointer md:hover:opacity-90">
                    <FaLinkedin size={20} />
                </div></Link>
            </div>

            <div className="text-center mt-[50px] mb-[30px] text-[13px] leading-5 md:text-[15px]">
                <p className="font-semibold">Copyright ©2023 All rights reserved | Gurukul - by CodeXpress</p>
            </div>
        </div>
    )
}

export default Footer;
