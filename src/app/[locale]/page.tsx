import About from '../components/about/About';
import Blog from '../components/blog/Blog';
import Contact from '../components/contact/Contact';
import Hero from '../components/hero/Hero';
import LoveToDo from '../components/love/LoveToDo';
import Portfolios from '../components/portfolios/Portfolios';
import Skills from '../components/skills/Skills';
import Testimonials from '../components/testimonials/Testimonials';
import TrustedCompany from '../components/trustedCompany/TrustedCompany';

export default function Home() {
    return (
        <>
            <Hero />
            <TrustedCompany />
            <Skills />
            <About />
            <Portfolios />
            <Testimonials />
            <LoveToDo />
            <Contact />
            <Blog />
        </>
    );
}
