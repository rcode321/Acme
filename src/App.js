import "./App.css";
import CarouselSection from "./components/CarouselSection/CarouselSection";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import NavBar from "./components/Navbar/Navbar";
import SectionTwo from "./components/SectionTwo/SectionTwo";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Hero />
			<HeroCarousel />
			<CarouselSection />
			<SectionTwo />
			<Footer />
		</div>
	);
}

export default App;
