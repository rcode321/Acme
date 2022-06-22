import sampleImage1 from "../../assets/images/img1.jpg";
import sampleImage2 from "../../assets/images/img2.jpg";
import sampleImage3 from "../../assets/images/img3.jpg";

import "tw-elements";

const Insights = () => {
	return (
		<div className="hidden lg:block md:block bg-gray-100 ">
			<div className="max-w-6xl mx-auto">
				<div className="mx-7 py-5 pb-0">
					<h2 className="text-black text-2xl">ACME Insights</h2>
					<p className="text-black ">How are factors being used around the world?</p>
				</div>
				<div class="grid gap-x-8 gap-y-4 grid-cols-3 max-w-6xl mx-auto ">
					<div>
						<div className="carousel-item active relative float-left w-full my-5 ">
							<div className="flex justify-center flex-col m-6 boxshadowBlue">
								<div className="shadow-2xl bg-white  p-5">
									<a href="#!">
										<img
											className="rounded-t-lg clippy "
											src={sampleImage1}
											alt=""
										/>
									</a>
									<div className="p-1">
										<h5 className="text-blue-700 text-2xl font-semibold">
											Global Factor
										</h5>
										<p className="text-blue-700 text-2xl mb-4 font-semibold">
											Investing Study
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="carousel-item active relative float-left w-full my-5 ">
							<div className="flex justify-center flex-col m-6 boxshadowBlueLightBlue">
								<div className="shadow-lg bg-white  p-5">
									<a href="#!">
										<img
											className="rounded-t-lg clippy "
											src={sampleImage2}
											alt=""
										/>
									</a>
									<div className="p-1">
										<h5 className="text-sky-500 text-2xl font-semibold">
											Global Factor
										</h5>
										<p className="text-sky-500 text-2xl mb-4 font-semibold">
											Investing Study
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="carousel-item active relative float-left w-full my-5 ">
							<div className="flex justify-center flex-col m-6 boxshadowGreen">
								<div className="shadow-lg bg-white  p-5">
									<a href="#!">
										<img
											className="rounded-t-lg clippy "
											src={sampleImage3}
											alt=""
										/>
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
		</div>
	);
};

export default Insights;
