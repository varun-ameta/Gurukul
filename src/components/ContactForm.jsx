import React, { useState } from 'react';

const ContactForm = () => {
    const [textareaValue, setTextareaValue] = useState('');

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    return (
        <div className="relative h-screen ">

            <div className="w-full max-w-[42.33%] pl-[15px] pr-[15px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-5xl font-semibold">Message Us</h1>
                <p className="mt-5 text-base">We want to hear from you! If you have any questions, feedback, or suggestions, please don't hesitate to contact us. You can message us as:</p>

                <div className="md:mt-9">
                    <div className="flex flex-wrap w-full box-border ">
                        <input
                            className="max-w-[40%] min-h-[1px] w-full h-[42px] p-2 text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            name="firstname"
                            type="text"
                            placeholder="First name"
                        />
                        <input
                            className="max-w-[40%] min-h-[1px] w-full h-[42px] p-2 text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ml-[15px]"
                            name="lastname"
                            type="text"
                            placeholder="Last name"
                        />
                    </div>
                    <div className="flex flex-col flex-wrap w-full box-border">

                        <input
                            className="max-w-[82.5%] min-h-[1px] w-full h-[42px] mt-6 p-2 text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            name="subject"
                            type="text"
                            placeholder="Subject"
                        />
                        <input
                            className="max-w-[82.5%] min-h-[1px] w-full h-[42px] mt-6 p-2 text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                        <textarea
                            className="max-w-[82.5%] min-h-[1px] w-full mt-6 p-2 text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            value={textareaValue}
                            onChange={handleTextareaChange}
                            rows={10}
                            placeholder="Write your message here"
                        />
                    </div>
                    <button className="mt-6 w-[30%] h-[50px] bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white rounded-3xl md:hover:cursor-pointer hover:opacity-90">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
