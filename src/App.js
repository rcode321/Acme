import "./App.css";
import CarouselSection from "./components/CarouselSection/CarouselSection";
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
		</div>
	);
}

export default App;
