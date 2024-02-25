import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from '../globals/LanguageSwitcher';
import ThemeMode from '../globals/ThemeMode';

const Header = () => {
    const t = useTranslations('Header');
    const navLinks = ['home', 'about', 'portfolio', 'blog', 'contact'] as const;
    const l = useTranslations('Logo');
    return (
        <div>
            <header className="header py-16 absolute w-full left-0 z-[99]">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="logo text-[34px] text-primary-main font-bold">
                            <Link href="/">{l('title')}</Link>
                        </div>
                        <div className="menu">
                            <ul className="flex items-center gap-4">
                                {navLinks.map((navLink) => (
                                    <li key={navLink}>
                                        <Link
                                            className="font-normal text-lg text-primary-main capitalize "
                                            href={t(`${navLink}.href`)}
                                        >
                                            {t(`${navLink}.title`)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-4">
                            <LanguageSwitcher />
                            <ThemeMode />
                            <Link
                                className="text-lg text-white font-semibold bg-primary-main px-8 py-4 border-1 border-primary-main rounded-lg"
                                href="/portfolio"
                            >
                                Lets Talk
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
