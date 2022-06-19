import sampleImage2 from "../../assets/images/building.png";

import "tw-elements";
const SectionTwo = () => {
	return (
		<div
			id="carouselExampleIndicators "
			class="carousel slide relative bg-gray"
			data-bs-ride="carousel "
		>
			<div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center  p-0 h-80-">
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="0"
					class="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>
			<div class="carousel-inner relative w-full overflow-hidden ">
				<div className="mx-5 my-6">
					<h1 className=" text-3xl text-blue-900 ">
						Upcoming <span className="font-bold">Events</span>
					</h1>
					<p className="text-stone-500 font-medium">
						At ACME, we're dedicated to learn,ing connecting, and exploring
						opportunities
					</p>
				</div>
				<div class="carousel-item active float-left w-full relative">
					{/* <img
						src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
						class="block w-full"
						alt="Wild Landscape"
					/> */}
					<div className="bg-zinc-300  w-20 h-20 absolute rotate-45	z-0  right-72 ml-15 mt-5 -mr-2 clippy3"></div>
					<div className="bg-white z-20 w-28 h-20 absolute right-52 top-0">
						<p className="text-md mt-2 text-center text-emerald-600">
							JAN <br />
							<span className="font-extrabold text-3xl">28</span>
						</p>
					</div>
					<div class="flex justify-center relative">
						<div class="block px-5 m-5 shadow-lg bg-blue-900 max-w-sm pt-16 pb-24 clippy2  relative">
							<h5 class="text-white text-xl leading-tight font-medium mb-2">
								Insight Exchange Network
							</h5>
							<p class="text-white text-base mb-4">
								Join us for this conference showcasing innovation.
							</p>
							<button
								type="button"
								class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								View Events Detail
							</button>
						</div>
					</div>
				</div>
				<div class="carousel-item float-left w-full ">
					{/* <img
						src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
						class="block w-full"
						alt="Camera"
					/> */}
					<div className="bg-zinc-300  w-20 h-20 absolute rotate-45	z-0  right-72 ml-15 mt-5 -mr-2 clippy3"></div>
					<div className="bg-white z-20 w-28 h-20 absolute right-52 ">
						<p className="text-md mt-2 text-center text-emerald-600">
							JAN <br />
							<span className="font-extrabold text-3xl">28</span>
						</p>
					</div>
					<div class="flex justify-center ">
						<div class="block px-5 m-5 shadow-lg bg-blue-900 max-w-sm pt-16 pb-24 clippy2">
							<div>
								<h5 class="text-white text-xl leading-tight font-medium mb-2">
									Insight Exchange Network
								</h5>
								<p class="text-white text-base mb-4">
									Join us for this conference showcasing innovation.
								</p>
							</div>
							<button
								type="button"
								class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								View Events Detail
							</button>
						</div>
					</div>
				</div>
				<div class="carousel-item float-left w-full ">
					{/* <img
						src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
						class="block w-full"
						alt="Exotic Fruits"
					/> */}
					<div className="bg-zinc-300  w-20 h-20 absolute rotate-45	 right-72 ml-15 mt-5 -mr-2 clippy3"></div>
					<div className="bg-white z-20 w-28 h-20 absolute right-52  ">
						<p className="text-md mt-2 text-center text-emerald-600">
							JAN <br />
							<span className="font-extrabold text-3xl">28</span>
						</p>
					</div>
					<div class="flex justify-center ">
						<div class="block px-5 m-5 shadow-lg bg-blue-900 max-w-sm pt-16 pb-24 clippy2">
							<h5 class="text-white text-xl leading-tight font-medium mb-2">
								Insight Exchange Network
							</h5>
							<p class="text-white text-base mb-4">
								Join us for this conference showcasing innovation.
							</p>
							<button
								type="button"
								class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								View Events Detail
							</button>
						</div>
					</div>
				</div>
			</div>
			<button
				class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 mt-28 "
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span
					class="carousel-control-prev-icon inline-block bg-no-repeat"
					aria-hidden="true"
				></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 mt-28"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span
					class="carousel-control-next-icon inline-block bg-no-repeat bg"
					aria-hidden="true"
				></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	);
};
export default SectionTwo;
