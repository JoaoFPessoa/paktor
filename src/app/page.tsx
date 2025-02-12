import Header from './components/Sections/Header/header';
import Projects from './components/Sections/Projects';
import BannerClientPage from './bannerClientPage';
import WhyChooseUsSection from './components/Sections/WhyChooseUs';
import Testimonials from './components/Sections/Testimonials';
import ServicesSection from './components/Sections/Services';
import Contact from './components/Sections/Contact';
import { Montserrat } from '@next/font/google';
import OurPartners from './components/Sections/OurPartners';
import OurDifferencesSection from './components/OurDifferences';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export default function Home() {
	return (
		<main className={montserrat.className}>
			<div>
				<Header />
				<BannerClientPage />
				<div
					className="my-24 overflow-x-hidden  gap-10 flex flex-col items-center"
					id="body"
				>
					<ServicesSection />
					<Projects />
					<WhyChooseUsSection />
					<OurDifferencesSection />
					<OurPartners />
					<Testimonials />
					{/* <Contact /> */}
				</div>
			</div>
		</main>
	);
}
