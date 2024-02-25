/* eslint-disable react/no-unescaped-entities */

import quote from '@/assets/images/icons/quote.svg';
import testimonial1 from '@/assets/images/testimonial-1.png';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from 'react-icons/hi2';

const Testimonials = () => {
    return (
        <div className="testimonial-section py-20">
            <div className="testimonial-area">
                <div className="container">
                    <div className="grid justify-center items-center text-center mb-12">
                        <p className="text-lg text-primary-main font-semibold mb-3">
                            Client’s Testimonial
                        </p>
                        <h2 className="text-4xl text-black dark:text-white font-bold">
                            My Satisfied Clients Say
                        </h2>
                    </div>
                    <div className="testimonial-wrapper relative">
                        <Image
                            className="absolute right-8 top-8 z-10"
                            src={quote}
                            alt="quote icon"
                        />
                        <div className="absolute right-8 bottom-8 z-10 flex items-center gap-3">
                            <button className="w-[70px] h-[50px] grid place-items-center border border-[#5E6066] rounded-md text-2xl">
                                <HiMiniArrowLongLeft />
                            </button>
                            <button className="w-[70px] h-[50px] grid place-items-center border border-[#5E6066] rounded-md text-2xl">
                                <HiMiniArrowLongRight />
                            </button>
                        </div>
                        <div className="single-testimonial flex items-center gap-8 border border-[#5E6066] p-10 bg-[#111] rounded-[40px]">
                            <div>
                                <div>
                                    <Image
                                        src={testimonial1}
                                        alt="testimonial1"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="w-5/6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaStar className="text-lg text-[#FFC107]" />
                                        <FaStar className="text-lg text-[#FFC107]" />
                                        <FaStar className="text-lg text-[#FFC107]" />
                                        <FaStar className="text-lg text-[#FFC107]" />
                                        <FaStar className="text-lg text-[#FFC107]" />
                                    </div>
                                    <div>
                                        <p className="text-3xl text-primary-main font-bold mb-3">
                                            “Innovation and excellence in
                                            development”
                                        </p>
                                        <p className="text-lg text-black dark:text-white font-normal mb-3 leading-relaxed">
                                            Tech websites need elegance and
                                            innovation for reputation and
                                            investment. Clean Ui, modern design,
                                            and great performance from these
                                            folks. They solved problems and
                                            understood frameworks well. User
                                            activity surged! Strongly recommend.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl text-black dark:text-white font-bold mb-2">
                                            Robert R. White
                                        </h3>
                                        <p className="text-lg text-black dark:text-white font-normal">
                                            Artisan Shop Owner
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
