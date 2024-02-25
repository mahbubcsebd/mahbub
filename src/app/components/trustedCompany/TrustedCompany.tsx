import company1 from '@/assets/images/trusted-1.png';
import company2 from '@/assets/images/trusted-2.png';
import company3 from '@/assets/images/trusted-3.png';
import company4 from '@/assets/images/trusted-4.png';
import company5 from '@/assets/images/trusted-5.png';
import Image from 'next/image';

const TrustedCompany = () => {
    return (
        <div className="trusted-section pb-20">
            <div className="trusted-area">
                <div className="container">
                    <p className="text-2xl text-[#a2a2a2] font-normal mb-8">
                        Trusted by 4,000+ companies
                    </p>
                    <div className="grid grid-cols-5 gap-6">
                        <Image
                            src={company1}
                            alt="company1"
                        />
                        <Image
                            src={company2}
                            alt="company1"
                        />
                        <Image
                            src={company3}
                            alt="company1"
                        />
                        <Image
                            src={company4}
                            alt="company1"
                        />
                        <Image
                            src={company5}
                            alt="company1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedCompany;
