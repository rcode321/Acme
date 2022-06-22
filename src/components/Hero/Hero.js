/* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from "react";
// import { Popover, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import DesktopBackground from "../../assets/images/bgHero.jpg";
export default function Hero() {
	return (
		<div className=" relative overflow-hidden boxshadowBlueTop ">
			<div>
				<img
					className="relative bg-contain h-96 hidden xl:block md:block "
					src={DesktopBackground}
					alt=""
				/>
				{/* <div className="relative h-full w-full top-0 left-0 bg-black opacity-5">
					OVerlay
				</div> */}
			</div>
			<div className="relative bg-blue-500 w-full h-96  top-0 block xl:hidden md:hidden"></div>
			<div className="max-w-7xl mx-auto ">
				<div className="absolute  top-0 z-10 lg:max-w-2xl lg:w-full xl:pb-1 ">
					<main className="mx-auto max-w-6xl px-0 sm:px-6 lg:px-8 lg:pt-16 sticky sm:relative md:left-5 sm:left-32 xl:left-16 sm:mt-12 xl:mt-1">
						<div className="sm:text-center lg:text-left mt-6 ml-5 xl:max-w-7xl">
							<p className="text-2xl text-zinc-100 mb-16 text-start lg:text-center md:text-center xl:hidden lg:hidden md:hidden">
								Research Professional Platform
							</p>
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block xl:inline text-base text-zinc-100 lg:text-5xl font-bold xl:text-5xl ">
									ACME Wealth
								</span>{" "}
								<span className=" text-zinc-100 xl:inline font-medium ">
									Management
								</span>
								<span className=" text-zinc-100 font-medium l-3 flex lg:inline lg:pl-4 sm:pl-14">
									Platforms
								</span>
								<div class="rounded-none block sm:hidden	border-b-0 border-dotted w-44 my-4 border-4 space-x-7	..."></div>
							</h1>
							<p className="text-zinc-100 text-2xl mt-4 font-light">
								Investment excellence.
							</p>
							<p className="text-zinc-100 text-2xl font-light">
								Diversity of thought.
							</p>
							<p className="text-zinc-100 text-2xl font-light">
								Organizational strength.
							</p>
						</div>
					</main>
				</div>
			</div>
			<div className=" lg:inset-y-0 lg:right-0 lg:w-1/2"></div>
		</div>
	);
}
