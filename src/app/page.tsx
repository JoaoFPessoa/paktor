'use client';
import { motion } from 'framer-motion';
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

// Animation variants
const childVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Home() {
	return (
		<main className={montserrat.className}>
			<div>
				<BannerClientPage />
				<div
					className="my-24 overflow-x-hidden gap-10 flex flex-col items-center"
					id="body"
				>
					<motion.div
						variants={childVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }} // Adjust `amount` as needed
					>
						<ServicesSection />
					</motion.div>
					<motion.div
						variants={childVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
					>
						<Projects />
					</motion.div>
					<motion.div
						variants={childVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
						className="w-full flex justify-center"
					>
						<WhyChooseUsSection />
					</motion.div>
					<motion.div
						variants={childVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
					>
						<OurDifferencesSection />
					</motion.div>
					<motion.div
						variants={childVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
					>
						<OurPartners />
					</motion.div>
					{/* <motion.div
						variants={childVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
					>
						<Testimonials />
					</motion.div> */}
					{/* <motion.div
						variants={childVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
					>
						<Contact />
					</motion.div> */}
				</div>
			</div>
		</main>
	);
}
