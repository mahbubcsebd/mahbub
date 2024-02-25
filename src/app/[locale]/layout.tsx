import { Metadata } from 'next';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './globals.css';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Mahbubur Rahman',
    description: 'Mahbubur Rahman Portfolio Website',
};

export default function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale}>
            <body
                className={`${
                    locale === 'bn' ? 'font-hindSiliguri' : 'font-ubuntu'
                } dark bg-black text-white`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
