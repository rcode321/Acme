// import sampleImage1 from "../../assets/images/building2.jpg";
import sampleImage2 from "../../assets/images/building.png";
// import sampleImage3 from "../../assets/images/building3.jpg";

import "tw-elements";

const HeroCarousel = () => {
	return (
		<div
			id="carouselExampleCaptions"
			className="carousel slide relative "
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 ">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>
			<div className="carousel-inner relative w-full overflow-hidden bg-insight ">
				<div className="carousel-item active relative float-left w-full  ">
					<div className="flex justify-center flex-col m-6 boxshadow">
						<div className="mb-5">
							<h2 className="text-white text-2xl">ACME Insights</h2>
							<p className="text-white ">
								How are factors being used around the world?
							</p>
						</div>
						<div className="shadow-lg bg-white  p-5">
							<a href="#!">
								<img className="rounded-t-lg clippy " src={sampleImage2} alt="" />
							</a>
							<div className="p-1">
								<h5 className="text-green-700 text-2xl font-semibold">
									Global Factor
								</h5>
								<p className="text-green-700 text-2xl mb-4 font-semibold">
									Investing Study
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="carousel-item relative float-left  w-full">
					<div className="flex justify-center flex-col  m-6 boxshadow">
						<div className="mb-5">
							<h2 className="text-white text-2xl">ACME Insights</h2>
							<p className="text-white">
								How are factors being used around the world?
							</p>
						</div>
						<div className="shadow-lg bg-white  p-5">
							<a href="#!">
								<img className="rounded-t-lg clippy" src={sampleImage2} alt="" />
							</a>
							<div className="p-1">
								<h5 className="text-green-700 text-2xl font-semibold ">
									Global Factor
								</h5>
								<p className="text-green-700 font-semibold mb-4 text-2xl">
									Investing Study
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="carousel-item relative float-left w-full">
					<div className="flex justify-center flex-col m-6 boxshadow">
						<div className="mb-5">
							<h2 className="text-white text-2xl">ACME Insights</h2>
							<p className="text-white">
								How are factors being used around the world?
							</p>
						</div>
						<div className="shadow-lg bg-white  p-5">
							<a href="#!">
								<img className="rounded-t-lg clippy" src={sampleImage2} alt="" />
							</a>
							<div className="p-1">
								<h5 className="text-green-700 text-2xl font-semibold">
									Global Factor
								</h5>
								<p className="text-green-700 text-2xl mb-4 font-semibold">
									Investing Study
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev"
			>
				<span
					className="carousel-control-prev-icon inline-block bg-no-repeat"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon inline-block bg-no-repeat"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default HeroCarousel;
