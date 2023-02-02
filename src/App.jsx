import { SideBar } from './components/common/SideBar';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { MainSlider } from './components/main/slider/MainSlider';
import { SubmitForm } from './components/main/submitForm/SubmitForm';

function App() {
	return (
		<>
			<header className="wrapper wrapper-top">
				<div className="container">
					<Header />
					<Hero />
					<SideBar />
				</div>
			</header>
			<main className="wrapper wrapper-main">
				<div className="container">
					<MainSlider />
				</div>
			</main>
			<div className="wrapper wrapper-bottom">
				<div className="container">
					<SubmitForm />
				</div>
			</div>
			<footer className="wrapper wrapper-footer">
				<div className="container">
					<Footer />
				</div>
			</footer>
		</>
	);
}

export default App;
