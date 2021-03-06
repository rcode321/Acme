// import sampleImage2 from "../../assets/images/building.png";
import LogoSingle from "../../assets/images/LogoSingle.png";

import "tw-elements";
import EventsSection from "../EventsSection/EventsSection";
const SectionTwo = () => {
	return (
		<>
			<EventsSection />
			<div
				id="carouselDarkVariant"
				class="carousel slide carousel-fade carousel-dark relative block lg:hidden"
				data-bs-ride="carousel"
			>
				{/* <!-- Indicators --> */}
				<div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-2 mb-8 mt-7">
					<button
						data-bs-target="#carouselDarkVariant"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						data-bs-target="#carouselDarkVariant"
						data-bs-slide-to="1"
						aria-label="Slide 1"
					></button>
					<button
						data-bs-target="#carouselDarkVariant"
						data-bs-slide-to="2"
						aria-label="Slide 1"
					></button>
				</div>
				<div className="mx-5 mt-5 mb-16">
					<h1 className=" text-3xl text-blue-900 ">
						Upcoming <span className="font-bold">Events</span>
					</h1>
					<p className="text-stone-500 font-medium">
						At ACME, we're dedicated to learn,ing connecting, and exploring
						opportunities
					</p>
				</div>
				{/* <!-- Inner --> */}
				<div class="carousel-inner relative w-full overflow-hidden">
					{/* <!-- Single item --> */}
					<div class="carousel-item active relative float-left w-full">
						<div>
							<div>
								<div class="block px-10 m-5 relative shadow-lg bg-blue-900 pt-16 pb-24 clippy2">
									<h5 class="text-white text-xl z-10 leading-tight font-medium mb-2">
										Insight Exchange Network
									</h5>
									<p class="text-white text-base mb-8">
										Join us for this conference showcasing innovation.
									</p>
									<button
										type="button"
										class=" border-current border-2 border-white border-x-white inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
									>
										Get More Insight
									</button>
								</div>
								<div className="bg-white absolute w-28 h-20 left-16 top-0">
									<p className="text-md mt-2 relative text-center text-emerald-600">
										JAN <br />
										<span className="font-extrabold text-3xl">28</span>
									</p>
									<div className="pentagon"></div>
								</div>
							</div>
						</div>
						<div class="carousel-caption -mb-2 md:block absolute text-center">
							<p className="text-zinc-800 mt-6 pl-52 w-max z-10 ">Chicago, IL</p>
						</div>
					</div>

					{/* <!-- Single item --> */}
					<div class="carousel-item relative float-left w-full">
						<div>
							<div>
								<div class="block px-10 m-5 relative shadow-lg bg-blue-900 pt-16 pb-24 clippy2">
									<h5 class="text-white text-xl z-10 leading-tight font-medium mb-2">
										Research Exchange
									</h5>
									<p class="text-white text-base mb-8">
										Find the best online resources to help with your investment...
									</p>
									<button
										type="button"
										class=" border-current border-2 border-white border-x-white inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
									>
										Get More Insight
									</button>
								</div>
								<div className="bg-white absolute  w-28 h-20 left-16 top-0">
									<p className="text-md mt-2 relative text-center text-emerald-600">
										FEB <br />
										<span className="font-extrabold text-3xl">12</span>
									</p>
									<div className="pentagon"></div>
								</div>
							</div>
						</div>
						<div class="carousel-caption -mb-2 md:block absolute text-center">
							<p className="text-zinc-8 12 mt-6 pl-32 w-max z-10">
								The Wagner, New York
							</p>
						</div>
					</div>

					{/* <!-- Single item --> */}
					<div class="carousel-item relative float-left w-full">
						<div>
							<div>
								<div class="block px-10 m-5 relative shadow-lg bg-blue-900 pt-16 pb-24 clippy2">
									<h5 class="text-white text-xl z-10 leading-tight font-medium mb-2">
										Citywide Buyer's Retreat
									</h5>
									<p class="text-white text-base mb-8">
										Find out how banks are responding to the changing future of
										interest..
									</p>
									<button
										type="button"
										class=" border-current border-2 border-white border-x-white inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
									>
										Get More Insight
									</button>
								</div>
								<div className="bg-white absolute  w-28 h-20 left-16 top-0">
									<p className="text-md mt-2 relative text-center text-emerald-600">
										MAY <br />
										<span className="font-extrabold text-3xl">6</span>
									</p>
									<div className="pentagon"></div>
								</div>
							</div>
						</div>
						<div class="carousel-caption -mb-2 md:block absolute text-center">
							<p className="text-zinc-8 12 mt-6 pl-40 w-max z-10">London, England</p>
						</div>
					</div>
				</div>
				{/* <!-- Inner --> */}

				{/* <!-- Controls --> */}
				<button
					class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
					type="button"
					data-bs-target="#carouselDarkVariant"
					data-bs-slide="prev"
				>
					{/* <span
					class="carousel-control-prev-icon inline-block bg-no-repeat"
					aria-hidden="true"
				></span> */}
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
					type="button"
					data-bs-target="#carouselDarkVariant"
					data-bs-slide="next"
				>
					{/* <span
					class="carousel-control-next-icon inline-block bg-no-repeat"
					aria-hidden="true"
				></span> */}
					<span class="visually-hidden">Next</span>
				</button>
				<div>
					<img className="centerImg" src={LogoSingle} alt="" />
				</div>
			</div>
		</>
	);
};
export default SectionTwo;
