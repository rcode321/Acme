import "./App.css";
import Hero from "./components/Hero/Hero";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import NavBar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Hero />
			<HeroCarousel />
		</div>
	);
}

export default App;
