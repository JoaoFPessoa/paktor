import Header from './components/Sections/Header/header';
import Projects from './components/Sections/Projects';
import BannerClientPage from './bannerClientPage';
import WhyChooseUsSection from './components/Sections/WhyChooseUs';
import Testimonials from './components/Sections/Testimonials';
import ServicesSection from './components/Sections/Services';
import Contact from './components/Sections/Contact';
import { Montserrat } from '@next/font/google';
import OurPartners from './components/Sections/OurPartners';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export default function Home() {
	return (
		<main className={montserrat.className}>
			<div>
				<Header />
				<div
					className="px-3 md:px-[5%] overflow-x-hidden lg:px-[10%] gap-10 flex flex-col"
					id="body"
				>
					<div>
						<BannerClientPage />
					</div>
					<ServicesSection />
					<Projects />
					<OurPartners />
					<WhyChooseUsSection />
					<Testimonials />
					{/* <Contact /> */}
				</div>
			</div>
		</main>
	);
}
