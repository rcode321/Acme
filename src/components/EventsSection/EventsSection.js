// import sampleImage2 from "../../assets/images/building.png";
import LogoSingle from "../../assets/images/LogoSingle.png";

import "tw-elements";
const EventsSection = () => {
	return (
		<div className="hidden lg:block max-w-6xl mx-auto">
			<div className="mx-5 mt-5 mb-16 ">
				<h1 className=" text-3xl text-blue-900 ">
					Upcoming <span className="font-bold">Events</span>
				</h1>
				<p className="text-stone-500 font-medium">
					At ACME, we're dedicated to learn,ing connecting, and exploring
					opportunities
				</p>
			</div>
			<div class="grid gap-x-8 gap-y-4 grid-cols-3">
				<div>
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
								<div className="bg-white absolute w-28 h-20 left-16 -top-4">
									<p className="text-md mt-2 relative text-center text-emerald-600">
										JAN <br />
										<span className="font-extrabold text-3xl">28</span>
									</p>
									<div className="pentagon2"></div>
								</div>
							</div>
						</div>
						<div class="carousel-caption -mb-2 md:block absolute text-center">
							<p className="text-zinc-800 mt-6 pl-52 w-max z-10 ">Chicago, IL</p>
						</div>
					</div>
				</div>
				<div>
					{" "}
					<div class="carousel-item active relative float-left w-full">
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
								<div className="bg-white absolute  w-28 h-20 left-16 -top-4">
									<p className="text-md mt-2 relative text-center text-emerald-600">
										FEB <br />
										<span className="font-extrabold text-3xl">12</span>
									</p>
									<div className="pentagon2"></div>
								</div>
							</div>
						</div>
						<div class="carousel-caption -mb-2 md:block absolute text-center">
							<p className="text-zinc-800 mt-6 pl-40 w-max z-10 ">London, England</p>
						</div>
					</div>
				</div>
				<div>
					{" "}
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
								<div className="bg-white absolute w-28 h-20 left-16 -top-4">
									<p className="text-md mt-2 relative text-center text-emerald-600">
										JAN <br />
										<span className="font-extrabold text-3xl">28</span>
									</p>
									<div className="pentagon2"></div>
								</div>
							</div>
						</div>
						<div class="carousel-caption -mb-2 md:block absolute text-center">
							<p className="text-zinc-800 mt-6 pl-32 w-max z-10 ">
								{" "}
								The Wagner, New York
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default EventsSection;
