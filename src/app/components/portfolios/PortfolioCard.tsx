import Image from 'next/image';

const PortfolioCard = (props: any) => {
    const { src, alt, title, version } = props;
    return (
        <div className="portfolio-card p-6 border border-[#5E6066] bg-[#111] w-full rounded-[30px]">
            <div className="portfolio-img w-full h-[275px] rounded-t-[15px] overflow-hidden mb-4">
                <Image
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="portfolio-content">
                <h3 className="text-xl text-black dark:text-white font-bold mb-3">
                    {title}
                </h3>
                <p className="text-base text-[#9FA3B3] font-normal">
                    {version}
                </p>
            </div>
        </div>
    );
};

export default PortfolioCard;
