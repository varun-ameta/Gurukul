import React, { useState } from 'react';
import { Link } from "react-router-dom";
import flutterimage from "../assets/SVG Images/6195525_3156627.jpg";
import User from "../assets/First/User.png";
import Footer from "../components/Footer";

function About() {
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
                    <h1 className="text-2xl font-semibold">ABOUT US</h1>
                    <p className='text-gray-600 text-[15px] font-light text-center mt-[20px]'>
                        At Learning Platform, we are dedicated to providing high-quality
                        online courses to learners all around the world. Our mission is to
                        make education accessible to everyone, regardless of their
                        location or background.
                        With a team of expert instructors and a wide range of course
                        offerings, we strive to empower our learners with the knowledge
                        and skills they need to succeed in their careers and personal
                        development.We offer a vast selection of courses
                        across various disciplines, from academic subjects to practical
                        skills and beyond. Whether you're a student looking to excel in
                        your studies or a professional seeking to upskill, our
                        comprehensive course library has something for everyone.
                        Our courses are designed and delivered by
                        industry experts, educators, and professionals with extensive
                        experience in their respective fields. You can trust that you'll
                        receive top-quality instruction and valuable insights from leading
                        minds.Engage in interactive learning
                        experiences with multimedia-rich content, quizzes, and
                        assignments. Our platform encourages active participation,
                        fostering a deeper understanding of the subject matter.
                        Whether you're a beginner or an experienced professional, our
                        platform offers courses for all levels of learners. Our
                        user-friendly interface makes it easy to browse, enroll, and track
                        your progress in each course.
                    </p>
                </div>
            </div>



            <Footer />
        </>
    );
}

export default About;
