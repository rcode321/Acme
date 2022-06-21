// import sampleImage1 from "../../assets/images/building2.jpg";
import sampleImage2 from "../../assets/images/building.png";
// import sampleImage3 from "../../assets/images/building3.jpg";

import "tw-elements";

const Insights = () => {
	return (
		<div className="hidden lg:block">
			<div class="grid gap-x-8 gap-y-4 grid-cols-3 ">
				<div>
					<div className="carousel-item active relative float-left w-full my-5 ">
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
				</div>
				<div>
					<div className="carousel-item active relative float-left w-full my-5 ">
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
				</div>
				<div>
					<div className="carousel-item active relative float-left w-full my-5 ">
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
				</div>
			</div>
		</div>
	);
};

export default Insights;
