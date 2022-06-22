// import sampleImage1 from "../../assets/images/building2.jpg";
// import sampleImage2 from "../../assets/images/building.png";
// import sampleImage3 from "../../assets/images/building3.jpg";

import "tw-elements";
import FooterDesktop from "./FooterDesktop";

const Footer = () => {
	return (
		<>
			<FooterDesktop />
			<footer class="text-center lg:text-left bg-zinc-300 text-gray-600 block xl:hidden ">
				<div class=" mr-12 hidden lg:block"></div>
				<div class="flex p-6 gap-x-2 ...">
					{/* <div class="flex-1 bg-slate-100 p-4 font-semibold ...">Privacy Policy</div> */}
					<div class="contents font-semibold">
						<div class="flex-1 bg-slate-100 p-4 font-semibold...">
							Privacy Policy
						</div>
						<div class="flex-1 bg-slate-100 p-4 font-semibold...">Terms of Use</div>
					</div>
					{/* <div class="flex-1 bg-slate-100 p-4 font-semibold ...">Terms of Use</div> */}
				</div>

				<div>
					<h6 className=" p-2 text-blue-800 font-medium text-center">Site Links</h6>
					<hr className="bg-gray-400 w-3/4 m-auto h-1" />
				</div>
				<div class="mx-6 py-10 text-center md:grid gap-4 grid-cols-1 grid-rows-3 ">
					<p className="bg-slate-100 p-4  font-semibold m-2 ">Home</p>
					<p className="bg-slate-100 p-4 font-semibold m-2">About Us</p>
					<p className="bg-slate-100 p-4 font-semibold m-2">Insights</p>
					<p className="bg-slate-100 p-4 font-semibold m-2">Events</p>
					<p className="bg-slate-100 p-4 font-semibold m-2">Due Dilligence</p>
					<p className="bg-slate-100 p-4 font-semibold m-2">Contact Us</p>
				</div>
				<div class="text-center p-6 bg-gray-200">
					<span>© 2021 Copyright: </span>
					<a
						class="text-gray-600 font-semibold"
						href="https://tailwind-elements.com/"
					>
						Created by Rafael Mendoza 😍
					</a>
				</div>
			</footer>
		</>
	);
};

export default Footer;
