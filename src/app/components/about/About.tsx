/* eslint-disable react/no-unescaped-entities */

import aboutMe from '@/assets/images/about-me.png';
import Image from 'next/image';

const About = () => {
    return (
        <div className="about-me py-20">
            <div className="about-me-area">
                <div className="container">
                    <div className="grid grid-cols-12 gap-16 items-center">
                        <div className="col-span-6">
                            <Image
                                src={aboutMe}
                                alt="about me"
                            />
                        </div>
                        <div className="col-span-6">
                            <div className="mb-5">
                                <p className="text-lg text-primary-main font-semibold mb-3">
                                    About Me
                                </p>
                                <h2 className="text-4xl text-black dark:text-white font-bold">
                                    My passions are{' '}
                                    <span className="gradient">
                                        coding, creating & innovating
                                    </span>
                                    .
                                </h2>
                            </div>
                            <p className="text-lg text-black dark:text-white font-normal mb-8">
                                Professional Front End Web Developer. Passionate
                                and devoted to my job. With 1.5 years of
                                professional Front End Web Development
                                experience, I have the abilities and expertise
                                to succeed on any project. I've helped numerous
                                companies enhance their online presence and aim
                                to assist you create a great company website.
                                Learning new technology and improving my skills
                                is my passion. I'm passionate about programming.
                            </p>
                            <div className="mt-5">
                                <button
                                    type="button"
                                    className="text-lg text-white font-semibold bg-primary-main px-8 py-4 border-1 border-primary-main rounded-lg"
                                >
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
