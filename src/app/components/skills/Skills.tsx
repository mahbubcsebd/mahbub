import skillsData from '@/../data';
import heroPattern from '@/assets/images/pattern/hero-pattern.svg';
import Image from 'next/image';
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div>
            <div className="skills-area py-20 relative">
                <Image
                    className="absolute w-full h-full left-0 top-0 -z-10 object-cover"
                    src={heroPattern}
                    alt="pattern image"
                />
                <div className="container">
                    <div className="mb-12">
                        <p className="text-lg text-primary-main font-semibold mb-3">
                            My Skills
                        </p>
                        <h2 className="text-4xl text-black dark:text-white font-bold">
                            My area of expertise.
                        </h2>
                    </div>
                    <div className="grid grid-cols-5 gap-8">
                        {skillsData.map((skill) => (
                            <SkillCard
                                key={skill.id}
                                src={skill.src}
                                alt={skill.alt}
                                title={skill.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
