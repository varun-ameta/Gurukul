import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import CardCarousel from '../components/CardCarousel';
import { FaAward } from "react-icons/fa"
import { LiaUniversitySolid } from "react-icons/lia"
import { RiDoubleQuotesL } from "react-icons/ri"
import HeaderImage from "../assets/First/image-asset.jpeg";
import ProgramImage1 from "../assets/SVG Images/undraw_Youtube_tutorial.png";
import ProgramImage2 from "../assets/SVG Images/undraw_Teaching_re_g7e3.png";
import ProgramImage3 from "../assets/SVG Images/undraw_learning_sketching_nd4f.png";
// import BannerImg from "../assets/SVG Images/undraw_online_stats_0g94 1.png";
import TestimonialImage1 from "../assets/First/client-amartya.jpg";
import TestimonialImage2 from "../assets/First/client-param.jpg";
import TestimonialImage3 from "../assets/First/client-jainam.jpg";
import TestimonialImage4 from "../assets/First/client-amaan.jpg";
import SelectImage from "../assets/First/person_transparent.png.webp";

const Home = () => {
    return (
        <>

            <header className="w-full h-full ">
                <img src={HeaderImage} alt="" className="bg-cover h-[260px] w-full md:h-[815px]" />
                <div className="absolute top-0 left-0 w-full h-[260px] md:h-[815px] bg-gradient-to-b from-[#434343] to-[#1f1b1b] opacity-80"></div>
                <div className="absolute top-0 left-0 w-full h-[260px] md:h-[815px] text-white text-xl font-bold">
                    <div className="flex w-full h-[80px] items-center justify-around">
                        <div className="logo">
                            {/* <img src={Logo} alt="Logo" /> */}
                            <Link to='/'><h2>GURUKUL</h2></Link>
                        </div>

                        <ul className="flex text-sm font-normal">
                            <Link><li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg hover:text-black hover:text-xl">Home</li></Link>
                            <Link to="/about"><li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg hover:text-black hover:text-xl">About</li></Link>
                            <Link to="/Courses"><li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg hover:text-black hover:text-xl">Courses</li></Link>
                            <Link to="/Contact"><li className="mx-[10px] cursor-pointer hover:opacity-90 text-lg hover:text-black hover:text-xl">Contact Us</li></Link>
                        </ul>

                        <div className="">
                            <Link to="/register"><button className="md:w-[90px] md:h-[40px] bg-black rounded-xl md:mr-[35px] text-white font-medium text-[15px]
                        hover:opacity-80 hover:bg-white hover:text-black">Register</button></Link>
                            <Link to="/login"><button className="md:w-[90px] md:h-[40px] bg-black rounded-xl text-white font-medium text-[15px] hover:opacity-80 hover:bg-white hover:text-black ">Log in</button></Link>
                        </div>
                    </div>

                    <div className="md:flex md:items-center md:justify-center md:mt-[250px]">
                        <div className="leading-5 mt-[12px] text-center md:ml-[100px] md:p-3 md:leading-[30px]">
                            <h1 className="text-[15px] md:text-6xl md:text-center">LEARN FROM THE EXPERTS</h1>
                            <p className="text-[12px] mt-[10px] md:text-center font-normal md:text-[25px] md:leading-8 md:mt-[18px]
                            ">Elevate Your Knowledge, Unleash Your Potential - <br />Discover, Learn, Grow - Your Path to Success</p>
                            <Link to="/register">
                                <button className="w-[100px] h-[30px] text-[10px] md:w-[180px] md:h-[60px] bg-black mt-[20px] rounded-xl md:text-[18px] md:mt-[25px] md:hover:opacity-80">Start Learning</button>
                            </Link>
                        </div>
                        {/* <img src={BannerImg} alt="" className="hidden md:block md:w-[800px] md:h-[500px] " /> */}
                    </div>
                </div>

            </header>

            <div className="h-[380px] bg-gradient-to-r from-[#434343] to-[#1f1b1b]">
                <h1 className="text-white text-center text-5xl font-semibold pt-24">Courses</h1>
            </div>
            <CardCarousel />

            <div className="mt-28">
                <div className="text-center">
                    <h1 className="text-5xl text-black font-semibold">Our Programs</h1>
                    <p className="text-black text-lg mt-5">Our learning platform offers a wide range of courses, from beginner to advanced levels, in a variety of subjects. We believe <br /> that everyone should have access to quality education, regardless of their location or background. That's <br /> why our courses are available to anyone with an internet connection.</p>
                </div>
                <div className="flex items-center justify-center mt-[60px]">
                    <img src={ProgramImage1} alt="" className="w-full h-[600px]" />
                    <div className="mr-8 mt-[-50px]">
                        <h2 className="text-3xl">We Are Excellent In Education</h2>
                        <p className="text-lg mt-5">We are Excellent Education, a learning platform that provides high-quality, affordable, and flexible education to anyone with an internet connection.</p>
                        <div className="flex items-center mt-5">
                            <FaAward className="bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white rounded-full w-6 h-6 p-1" size={20} />
                            <p className="ml-3">22,931 Yearly Graduates</p>
                        </div>
                        <div className="flex items-center mt-5">
                            <LiaUniversitySolid className="bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white rounded-full w-6 h-6 p-1" size={20} />
                            <p className="ml-3">150 Universities Worldwide</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-[30px]">
                    <div className="ml-40">
                        <h2 className="text-3xl">Strive for Excellence</h2>
                        <p className="text-lg mt-5">Striving for excellence is a mindset that can help you achieve your goals and live a fulfilling life.</p>
                        <div className="flex items-center mt-5">
                            <FaAward className="bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white rounded-full w-6 h-6 p-1" size={20} />
                            <p className="ml-3">22,931 Yearly Graduates</p>
                        </div>
                        <div className="flex items-center mt-5">
                            <LiaUniversitySolid className="bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white rounded-full w-6 h-6 p-1" size={20} />
                            <p className="ml-3">150 Universities Worldwide</p>
                        </div>
                    </div>
                    <img src={ProgramImage2} alt="" className="w-full h-[600px]" />
                </div>

                <div className="flex items-center justify-center mt-[30px]">
                    <img src={ProgramImage3} alt="" className="w-[800px] h-[600px] ml-5" />
                    <div className="mr-8 mt-[-50px]">
                        <h2 className="text-3xl">A Wide Variety Of Courses</h2>
                        <p className="text-lg mt-5">A good learning platform should offer a wide variety of courses, from beginner <br /> to advanced levels, in a variety of subjects</p>
                        <div className="flex items-center mt-5">
                            <FaAward className="bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white rounded-full w-6 h-6 p-1" size={20} />
                            <p className="ml-3">22,931 Yearly Graduates</p>
                        </div>
                        <div className="flex items-center mt-5">
                            <LiaUniversitySolid className="bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white rounded-full w-6 h-6 p-1" size={20} />
                            <p className="ml-3">150 Universities Worldwide</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 h-full text-center pb-10 bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white">
                <h1 className="text-5xl font-semibold pt-10">Testimonial</h1>
                <h3 className="text-3xl mt-5">What Our Clients Say</h3>
                <div className="mt-4 ml-36 mr-20">

                    <div className="flex items-center justify-center mt-6">
                        <div className="border-black">
                            <img src={TestimonialImage1} alt="" className="w-16 h-16 rounded-full" />
                        </div>
                        <div className="ml-6 text-left ">
                            <h4 className="text-lg font-semibold">Amartya Panwar</h4>
                            <div className="flex mt-2">
                                <RiDoubleQuotesL />
                                <p className="ml-2 text-lg">I really like this learning platform. The content is high-quality and the instructors are engaging. I've learned a lot and <br /> I feel like I'm making good progress.</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-center mt-6 ml-[-70px]">
                        <div className="border-black">
                            <img src={TestimonialImage2} alt="" className="w-16 h-16 rounded-full" />
                        </div>
                        <div className="ml-6 text-left ">
                            <h4 className="text-lg font-semibold">Paramveer Singh Rathore</h4>
                            <div className="flex mt-2">
                                <RiDoubleQuotesL size={22} />
                                <p className="ml-2 text-lg">This learning platform is okay. The content is good and the instructors are knowledgeable. I would definitely <br /> recommend  this platform to others.</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-center mt-6 ml-[160px]">
                        <div className="border-black">
                            <img src={TestimonialImage3} alt="" className="w-16 h-16 rounded-full" />
                        </div>
                        <div className="ml-6 text-left ">
                            <h4 className="text-lg font-semibold">Jainam Jain</h4>
                            <div className="flex mt-2">
                                <RiDoubleQuotesL />
                                <p className="ml-2 text-lg">I've been using this learning platform for a few months now and I'm really impressed. The content is high-quality and the instructors are very knowledgeable</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-center mt-6 ml-[-80px]">
                        <div className="border-black">
                            <img src={TestimonialImage4} alt="" className="w-16 h-16 rounded-full" />
                        </div>
                        <div className="ml-6 text-left ">
                            <h4 className="text-lg font-semibold">Deepanshu Kumawat</h4>
                            <div className="flex mt-2">
                                <RiDoubleQuotesL />
                                <p className="ml-2 text-lg">Solid service. These guys are knowledgeable and professional. I will definitely come back with my Highlander</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-6 ">
                <h1 className="text-5xl text-black font-semibold mt-24 text-center">Why Choose Us</h1>
                <div className="flex items-center justify-center mt-12">
                    <div className="flex flex-col w-[350px] h-full p-4 shadow-[0_4px_8px_0px_rgba(0,0,0,0.9)] bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white">
                        <div className="flex items-center p-5">
                            <FaAward size={20} className="rounded-full bg-white text-black w-8 h-8 p-1" />
                            <p className="text-base ml-4">22,931 Yearly Graduates</p>
                        </div>
                        <div className="flex items-center p-5">
                            <LiaUniversitySolid size={20} className="rounded-full bg-white text-black w-8 h-8 p-1" />
                            <p className="text-base ml-4">150 Universities Worldwide</p>
                        </div>
                        <div className="flex items-center p-5">
                            <FaAward size={20} className="rounded-full bg-white text-black w-8 h-8 p-1" />
                            <p className="text-base ml-4">Top Professionals in The World</p>
                        </div>
                        <div className="flex items-center p-5">
                            <LiaUniversitySolid size={20} className="rounded-full bg-white text-black w-8 h-8 p-1" />
                            <p className="text-base ml-4">Expand Your Knowledge</p>
                        </div>
                        <div className="flex items-center p-5">
                            <FaAward size={20} className="rounded-full bg-white text-black w-8 h-8 p-1" />
                            <p className="text-base ml-4">Best Online Teaching Assistant Courses</p>
                        </div>
                        <div className="flex items-center p-5">
                            <LiaUniversitySolid size={20} className="rounded-full bg-white text-black w-8 h-8 p-1" />
                            <p className="text-base ml-4">Best Teachers</p>
                        </div>
                    </div>
                    <img src={SelectImage} alt="" className="md:max-w-[720px] md:h-[690px]" />
                </div>
            </div>

            <ContactForm />
            <Footer />
        </>

    )
}

export default Home;
