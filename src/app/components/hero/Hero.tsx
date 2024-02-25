import heroBg from '@/assets/images/hero-bg.png';
import heroImg from '@/assets/images/hero-image.png';
import heroSmImg from '@/assets/images/hero-sm.png';
import heroPattern from '@/assets/images/pattern/hero-pattern.svg';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';

const Hero = () => {
    return (
        <div className="hero-section bg-white dark:bg-black relative">
            <Image
                className="absolute w-full h-full left-0 top-0 z-10"
                src={heroBg}
                alt="hero image"
            />
            <Image
                className="absolute w-full h-full left-0 top-0 z-10 object-cover"
                src={heroPattern}
                alt="hero image"
            />
            <div className="hero-area relative z-20">
                <div className="container">
                    <div className="grid grid-cols-12 gap-12 h-screen items-center pt-20">
                        <div className="col-span-8">
                            <h1 className="text-[72px] dark:text-white font-bold text-black">
                                <div className="flex items-center gap-4">
                                    <span className="text-primary-main">
                                        Hello,
                                    </span>{' '}
                                    I’m <br />
                                    <span>
                                        <Image
                                            src={heroSmImg}
                                            alt="hero sm image"
                                        />
                                    </span>
                                </div>
                                Mahbubur Rahman
                            </h1>
                            <h2 className="text-[72px] text-white font-bold gradient">
                                Full-stack Developer
                            </h2>

                            <div className="flex items-center gap-4 pt-8">
                                <Link
                                    className="text-lg text-white font-semibold bg-primary-main px-8 py-4 border-1 border-primary-main rounded-lg"
                                    href="/"
                                >
                                    Hire Me
                                </Link>
                                <Link
                                    className="text-lg text-white font-semibold flex items-center gap-2"
                                    href="/"
                                >
                                    Download CV{' '}
                                    <span>
                                        <GoArrowRight />
                                    </span>{' '}
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <Image
                                src={heroImg}
                                alt="hero sm image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
