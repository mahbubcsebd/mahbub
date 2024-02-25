/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { RxEnvelopeClosed } from 'react-icons/rx';

const Contact = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const { firstName, lastName, email, phone, message } = form;

    const changeHandler = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitHandler = (e: any) => {
        e.preventDefault();

        console.log(form);
    };

    return (
        <div className="contact-section py-20">
            <div className="contact-area">
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-8">
                        <div className="col-span-4">
                            <div className="mb-12">
                                <p className="text-lg text-primary-main font-semibold mb-3">
                                    Get In Touch
                                </p>
                                <h2 className="text-4xl text-black dark:text-white font-bold">
                                    I'm Always Open To Discussing
                                </h2>
                                <p className="text-lg text-black dark:text-white font-normal pt-4 mb-8">
                                    Let's have a chat, tell me about your
                                    project and I'll give you some suggestions
                                </p>
                                <div className="flex gap-5 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-primary-main text-white grid place-items-center text-2xl">
                                        <FiPhone />
                                    </div>
                                    <div>
                                        <p className="text-xl text-black dark:text-white font-semibold mb-[6px]">
                                            Call Now
                                        </p>
                                        <p className="text-base text-black dark:text-white font-normal">
                                            +1 234 567 8900
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 mb-5">
                                    <div className="w-16 h-16 rounded-full bg-primary-main text-white grid place-items-center text-2xl">
                                        <RxEnvelopeClosed />
                                    </div>
                                    <div>
                                        <p className="text-xl text-black dark:text-white font-semibold mb-[6px]">
                                            Email
                                        </p>
                                        <p className="text-base text-black dark:text-white font-normal">
                                            youmail@domain.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 bg-[#111] p-8 rounded-lg border border-[#E7E8EC]">
                            <form onSubmit={submitHandler}>
                                <div className="grid grid-cols-12 gap-x-8 gap-y-5">
                                    <div className="col-span-6">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={changeHandler}
                                            className="px-[14px] py-[10px] bg-[#111] border border-[#E7E8EC] placeholder-[#CFD1D9] focus:outline-none focus:bg-[#111] focus:border-primary-main focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={changeHandler}
                                            className="px-[14px] py-[10px] bg-[#111] border border-[#E7E8EC] placeholder-[#CFD1D9] focus:outline-none focus:bg-[#111] focus:border-primary-main focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                                        />
                                    </div>
                                    <div className="col-span-12">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="youmail@domain.com"
                                            value={email}
                                            onChange={changeHandler}
                                            className="px-[14px] py-[10px] bg-[#111] border border-[#E7E8EC] placeholder-[#CFD1D9] focus:outline-none focus:bg-[#111] focus:border-primary-main focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                                        />
                                    </div>
                                    <div className="col-span-12">
                                        <input
                                            type="cell"
                                            name="phone"
                                            id="phone"
                                            placeholder="youmail@domain.com"
                                            value={phone}
                                            onChange={changeHandler}
                                            className="px-[14px] py-[10px] bg-[#111] border border-[#E7E8EC] placeholder-[#CFD1D9] focus:outline-none focus:bg-[#111] focus:border-primary-main focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                                        />
                                    </div>
                                    <div className="col-span-12">
                                        <textarea
                                            rows={5}
                                            name="message"
                                            id="message"
                                            placeholder="Leave us a message..."
                                            value={message}
                                            onChange={changeHandler}
                                            className="px-[14px] py-[10px] bg-[#111] border border-[#E7E8EC] placeholder-[#CFD1D9] focus:outline-none focus:bg-[#111] focus:border-primary-main focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                                        />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <button
                                        type="submit"
                                        className="w-full text-lg text-white font-semibold bg-primary-main px-8 py-4 border-1 border-primary-main rounded-lg"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
