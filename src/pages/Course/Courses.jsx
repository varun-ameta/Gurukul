import React, { useState } from 'react';
import Webimage from "../../assets/SVG Images/18407473_5995345.jpg";
import Appimage from "../../assets/SVG Images/10354235_4428861.jpg";
import AIimage from "../../assets/SVG Images/robot-handshake-human-background-futuristic-digital-age.jpg";
import Dataimage from "../../assets/SVG Images/undraw_All_the_data_re_hh4w.png";
import Cloud from "../../assets/SVG Images/undraw_Cloud_hosting_7xb1.png";
import DataScienceimage from "../../assets/SVG Images/6195525_3156627.jpg"
import User from "../../assets/First/User.png";
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';


const Courses = () => {
    const [open, setOpen] = useState(false);
    const Menu = ["Profile", "Support", "Settings", "Log out"]
    return (
        <>
            <header className="w-full h-full">

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
            
            <div className='text-6xl font-bold text-center py-10 mt-14'>Courses</div>
            <hr className='w-1/5 mx-auto' />
            <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-2 justify-items-center">
                <div className="py-10">
                    <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                        <img src={Webimage} alt='Web Development' className='w-full' />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>
                                Web Development
                            </div>
                            <p className='text-gray-600 font-light leading-5'>Web development is the creation and maintenance of websites or web applications using programming languages like HTML, CSS, and JavaScript to ensure functionality, interactivity, and accessibility on the internet.</p>
                            <Link to="/Web"><button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded hover:animate-bounce">Explore</button></Link>
                        </div>
                    </div>
                </div>

                <div className="py-10">
                    <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                        <img src={Appimage} alt='App Development' className='w-full' />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>
                                App Development
                            </div>
                            <p className='text-gray-600 font-light leading-5'>App development is the process of creating, designing, and maintaining mobile applications for smartphones and tablets, ensuring functionality, performance, and user experience on specific operating systems like iOS...</p>
                            <Link to="/App"><button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded hover:animate-bounce">Explore</button></Link>
                        </div>
                    </div>
                </div>

                <div className="py-10">
                    <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                        <img src={Cloud} alt='Cloud Coumputing' className='w-full' />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>
                                Cloud Computing
                            </div>
                            <p className='text-gray-600 font-light leading-5'>Cloud computing refers to the delivery of computing services over the internet on a pay-as-you-go basis. Instead of running software or storing data on local devices or servers, cloud computing allows users to access and utilize resources, such as servers, storage, databases, networking...</p>
                            <Link to="/Cloud"><button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded hover:animate-bounce">Explore</button></Link>
                        </div>
                    </div>
                </div>


                <div className="py-10">
                    <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                        <img src={Dataimage} alt='Data Analytics' className='w-full' />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>
                                Data Analytics
                            </div>
                            <p className='text-gray-600 font-light leading-5'>Data analytics refers to the process of examining, cleansing, transforming, and modeling data to uncover patterns, insights, and trends. It involves using statistical techniques and algorithms to derive meaningful information that can guide business...</p>
                            <Link to="/Data"><button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded hover:animate-bounce">Explore</button></Link>
                        </div>
                    </div>
                </div>


                <div className="py-10">
                    <div className='rounded overflow-hidden shadow-lg max-w-sm '>
                        <img src={AIimage} alt='AI-ML' className='w-full' />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>
                                AI-ML
                            </div>
                            <p className='text-gray-600 font-light leading-5'>AI-ML, or Artificial Intelligence and Machine Learning, involves developing algorithms and models that enable computers to learn from data, make predictions, and perform tasks that typically require human intelligence...</p>
                            <Link to="/AI"><button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded hover:animate-bounce">Explore</button></Link>
                        </div>
                    </div>
                </div>


                <div className="py-10">
                    <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                        <img src={DataScienceimage} alt='Data Science' className='w-full' />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>
                                Data Science
                            </div>
                            <p className='text-gray-600 font-light leading-5'>Data science is a multidisciplinary field that involves extracting insights and knowledge from structured and unstructured data through scientific methods, processes, algorithms, and systems. It combines various disciplines, including statistics, mathematics...</p>
                            <Link to="/Dscience"><button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-black hover:border-transparent rounded hover:animate-bounce">Explore</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
            <Footer />
        </>
    )
}

export default Courses

