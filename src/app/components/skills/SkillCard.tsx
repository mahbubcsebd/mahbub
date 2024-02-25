import Image from 'next/image';

const SkillCard = ({
    src,
    alt,
    title,
}: {
    src: string;
    alt: string;
    title: string;
}) => {
    return (
        <div className="w-full h-[200px] flex flex-col justify-center items-center border border-[#5E6066] bg-[#080808] rounded-xl gap-4 cursor-pointer">
            <div className="w-24 h-24 rounded-full grid place-content-center border border-[#5E6066]">
                <Image
                    src={src}
                    alt={alt}
                />
            </div>
            <p className="text-3xl text-black dark:text-white font-bold">
                {title}
            </p>
        </div>
    );
};

export default SkillCard;
