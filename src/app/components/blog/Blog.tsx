/* eslint-disable react/no-unescaped-entities */
import blog1 from '@/assets/images/blog-1.png';
import blog2 from '@/assets/images/blog-2.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

const Blog = () => {
    return (
        <div className="blog-section py-20">
            <div className="blog-area">
                <div className="container">
                    <div className="mb-12">
                        <p className="text-lg text-primary-main font-semibold mb-3">
                            My Blogs
                        </p>
                        <h2 className="text-4xl text-black dark:text-white font-bold">
                            My Latest Blog & Articles
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="single-blog flex items-center gap-8 border border-[#5E6066] bg-[#060606] px-6 py-8 rounded-[30px]">
                            <div>
                                <div className="w-[185px] h-[237px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={blog1}
                                        alt="blog1"
                                        className="w-full h-full rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <p className="text-base text-primary-main font-semibold">
                                    30 Jan 2024
                                </p>
                                <h2 className="text-lg text-black dark:text-white font-semibold">
                                    The Ultimate Guide to Responsive Web Design
                                </h2>
                                <p className="text-base text-black dark:text-[#CFD1D9] font-semibold">
                                    esponsive web design is an approach to web
                                    development that ensures a website's layout
                                    and content adapt.
                                </p>
                                <Link
                                    href="/"
                                    className="flex items-center font-semibold gap-2"
                                >
                                    Read More
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="single-blog flex items-center gap-8 border border-[#5E6066] bg-[#060606] px-6 py-8 rounded-[30px]">
                            <div>
                                <div className="w-[185px] h-[237px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={blog2}
                                        alt="blog 2"
                                        className="w-full h-full rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <p className="text-base text-primary-main font-semibold">
                                    30 Jan 2024
                                </p>
                                <h2 className="text-lg text-black dark:text-white font-semibold">
                                    Exploring the Power of JavaScript Libraries
                                    and Frameworks
                                </h2>
                                <p className="text-base text-black dark:text-[#CFD1D9] font-semibold">
                                    esponsive web design is an approach to web
                                    development that ensures a website's layout
                                    and content adapt.
                                </p>
                                <Link
                                    href="/"
                                    className="flex items-center font-semibold gap-2"
                                >
                                    Read More
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
