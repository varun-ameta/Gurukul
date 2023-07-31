import React from 'react';
// import Slider from 'react-slick';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Course1 from "../assets/Courses/1947431.webp";
import Course2 from "../assets/Courses/AIML.jpg";
import Course3 from "../assets/Courses/BlockChain.jpg";
import { FaUsers } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai"

const CardCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel className="ml-5 md:ml-40 md:mr-40 mt-[-150px] md:p-4"
            responsive={responsive}
            showDots={true}
            autoPlaySpeed={3000}
        >

            <div className="w-[280px] h-[280] md:w-full md:max-w-[340px] md:h-[455px] md:mx-auto my-4 text-left shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)]">
                <img src={Course1} alt="" className=" md:w-full md:h-[200px] object-cover md:hover:cursor-pointer" />
                <div className="flex justify-end mt-[-20px]">
                    <div className="flex items-center justify-center w-[55px] h-10 bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white">
                        <p className="mr-1">4 </p>
                        <AiFillStar />
                    </div>
                </div>
                <h4 className="mt-5 text-[13px] ml-3">4 Lessons / 12 Weeks</h4>
                <h2 className="mt-4 text-[20px] ml-3 font-semibold md:hover:cursor-pointer">ReactJS Complete BootCamp</h2>
                <p className="mt-4 text-[18px] ml-3">ReactJS is a front end javascript library which follows class and function...</p>
                <div className="border-t-2 border-gray-500 mt-12"></div>
                <div className="flex items-center justify-between ml-3 mr-3 mt-4">
                    <div className="flex">
                        <FaUsers />
                        <h6 className="text-[12px] mt-[3px] ml-2">2,193 learners</h6>
                    </div>
                    <div className="flex">
                        <BiSolidMessageDetail />
                        <p className="mt-[3px] ml-2 text-[12px]">2</p>
                    </div>
                </div>
            </div>
            <div className="w-[280px] h-[280] md:w-full md:max-w-[340px] md:h-[455px] md:mx-auto my-4 text-left shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)]">
                <img src={Course2} alt="" className="md:w-full md:h-[200px] object-cover md:hover:cursor-pointer" />
                <div className="flex justify-end mt-[-20px]">
                    <div className="flex items-center justify-center w-[55px] h-10 bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white">
                        <p className="mr-1">4 </p>
                        <AiFillStar />
                    </div>
                </div>
                <h4 className="mt-5 text-[13px] ml-3">4 Lessons / 12 Weeks</h4>
                <h2 className="mt-4 text-[20px] ml-3 font-semibold md:hover:cursor-pointer">Introduction To Machine Learning</h2>
                <p className="mt-4 text-[18px] ml-3">A course that will teach you how to build and train machine learning...</p>
                <div className="border-t-2 border-gray-500 mt-12"></div>
                <div className="flex items-center justify-between ml-3 mr-3 mt-4">
                    <div className="flex">
                        <FaUsers />
                        <h6 className="text-[12px] mt-[3px] ml-2">2,193 learners</h6>
                    </div>
                    <div className="flex">
                        <BiSolidMessageDetail />
                        <p className="mt-[3px] ml-2 text-[12px]">2</p>
                    </div>
                </div>
            </div>
            <div className="w-[280px] h-[280] md:w-full md:max-w-[340px] md:h-[455px] md:mx-auto my-4 text-left shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)]">
                <img src={Course3} alt="" className="w-full h-[200px] object-cover md:hover:cursor-pointer" />
                <div className="flex justify-end mt-[-20px]">
                    <div className="flex items-center justify-center w-[55px] h-10 bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white">
                        <p className="mr-1">4 </p>
                        <AiFillStar />
                    </div>
                </div>
                <h4 className="mt-5 text-[13px] ml-3">4 Lessons / 12 Weeks</h4>
                <h2 className="mt-4 text-[20px] ml-3 font-semibold md:hover:cursor-pointer">Artificial intelligence bootcamp</h2>
                <p className="mt-4 text-[18px] ml-3">A course that will teach you the fundametal of AI, from machine...</p>
                <div className="border-t-2 border-gray-500 mt-12"></div>
                <div className="flex items-center justify-between ml-3 mr-3 mt-4">
                    <div className="flex">
                        <FaUsers />
                        <h6 className="text-[12px] mt-[3px] ml-2">2,193 learners</h6>
                    </div>
                    <div className="flex">
                        <BiSolidMessageDetail />
                        <p className="mt-[3px] ml-2 text-[12px]">2</p>
                    </div>
                </div>
            </div>
            <div className="w-[280px] h-[280] md:w-full md:max-w-[340px] md:h-[455px] md:mx-auto my-4 text-left shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)]">
                <img src={Course1} alt="" className="w-full h-[200px] object-cover md:hover:cursor-pointer" />
                <div className="flex justify-end mt-[-20px]">
                    <div className="flex items-center justify-center w-[55px] h-10 bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white">
                        <p className="mr-1">4 </p>
                        <AiFillStar />
                    </div>
                </div>
                <h4 className="mt-5 text-[13px] ml-3">4 Lessons / 12 Weeks</h4>
                <h2 className="mt-4 text-[20px] ml-3 font-semibold md:hover:cursor-pointer">JavaScript Complete BootCamp</h2>
                <p className="mt-4 text-[18px] ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <div className="border-t-2 border-gray-500 mt-12"></div>
                <div className="flex items-center justify-between ml-3 mr-3 mt-4">
                    <div className="flex">
                        <FaUsers />
                        <h6 className="text-[12px] mt-[3px] ml-2">2,193 learners</h6>
                    </div>
                    <div className="flex">
                        <BiSolidMessageDetail />
                        <p className="mt-[3px] ml-2 text-[12px]">2</p>
                    </div>
                </div>
            </div>
            <div className="w-[280px] h-[280] md:w-full md:max-w-[340px] md:h-[455px] md:mx-auto my-4 text-left shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)]">
                <img src={Course1} alt="" className="w-full h-[200px] object-cover md:hover:cursor-pointer" />
                <div className="flex justify-end mt-[-20px]">
                    <div className="flex items-center justify-center w-[55px] h-10 bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white">
                        <p className="mr-1">4 </p>
                        <AiFillStar />
                    </div>
                </div>
                <h4 className="mt-5 text-[13px] ml-3">4 Lessons / 12 Weeks</h4>
                <h2 className="mt-4 text-[20px] ml-3 font-semibold md:hover:cursor-pointer">JavaScript Complete BootCamp</h2>
                <p className="mt-4 text-[18px] ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <div className="border-t-2 border-gray-500 mt-12"></div>
                <div className="flex items-center justify-between ml-3 mr-3 mt-4">
                    <div className="flex">
                        <FaUsers />
                        <h6 className="text-[12px] mt-[3px] ml-2">2,193 learners</h6>
                    </div>
                    <div className="flex">
                        <BiSolidMessageDetail />
                        <p className="mt-[3px] ml-2 text-[12px]">2</p>
                    </div>
                </div>
            </div>
            <div className="w-[280px] h-[280] md:w-full md:max-w-[340px] md:h-[455px] md:mx-auto my-4 text-left shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)]">
                <img src={Course1} alt="" className="w-full h-[200px] object-cover md:hover:cursor-pointer" />
                <div className="flex justify-end mt-[-20px]">
                    <div className="flex items-center justify-center w-[55px] h-10 bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white">
                        <p className="mr-1">4 </p>
                        <AiFillStar />
                    </div>
                </div>
                <h4 className="mt-5 text-[13px] ml-3">4 Lessons / 12 Weeks</h4>
                <h2 className="mt-4 text-[20px] ml-3 font-semibold md:hover:cursor-pointer">JavaScript Complete BootCamp</h2>
                <p className="mt-4 text-[18px] ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <div className="border-t-2 border-gray-500 mt-12"></div>
                <div className="flex items-center justify-between ml-3 mr-3 mt-4">
                    <div className="flex">
                        <FaUsers />
                        <h6 className="text-[12px] mt-[3px] ml-2">2,193 learners</h6>
                    </div>
                    <div className="flex">
                        <BiSolidMessageDetail />
                        <p className="mt-[3px] ml-2 text-[12px]">2</p>
                    </div>
                </div>
            </div>
            
            


        </Carousel>
    )
}

export default CardCarousel;
