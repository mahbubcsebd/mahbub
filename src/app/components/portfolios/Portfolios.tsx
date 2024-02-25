import portfolioData from '@/../portfolioData';
import PortfolioCard from './PortfolioCard';

const Portfolios = () => {
    return (
        <div className="portfolio-section py-20">
            <div className="portfolio-area">
                <div className="container">
                    <div className="grid justify-center items-center text-center mb-12">
                        <p className="text-lg text-primary-main font-semibold mb-3">
                            My Portfolio
                        </p>
                        <h2 className="text-4xl text-black dark:text-white font-bold">
                            Some of my popular projects
                        </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        {portfolioData.map((portfolio) => (
                            <PortfolioCard
                                key={portfolio.id}
                                src={portfolio.src}
                                alt={portfolio.alt}
                                title={portfolio.title}
                                version={portfolio.version}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolios;
