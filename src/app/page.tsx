import Header from './components/header';
import ClientPage from './ClientPage';

export default function Home() {
	return (
		<div>
			<Header />
			<div className="h-[4000px] py-5 px-[5%]">
				<ClientPage />
			</div>
		</div>
	);
}
