/* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from "react";
// import { Popover, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import DesktopBackground from "../../assets/images/bgHero.jpg";
export default function Hero() {
	return (
		<div className="relative bg-blue-500  overflow-hidden">
			<img className="relative " src={DesktopBackground} alt="" />
			<div className="block lg:hidden md:hidden bg-blue-500 w-full h-full absolute top-0"></div>
			<div className="max-w-7xl mx-auto">
				<div className="absolute top-0 z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
					<main className="mt-10 mx-auto max-w-7xl px-7 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<p className="text-lg text-zinc-100 mb-16 text-start lg:text-center md:text-center xl:text-start ">
							Research Professional Platform
						</p>
						<div className="sm:text-center lg:text-left">
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block xl:inline text-base text-zinc-100	font-normal">
									ACME Wealth
								</span>{" "}
								<span className="block text-zinc-100 xl:inline font-medium">
									Management
								</span>
								<span className="block text-zinc-100 xl:inline font-medium">
									Platforms
								</span>
								<div class="rounded-none block sm:hidden	border-b-0 border-dotted w-44 my-4 border-4 space-x-7	..."></div>
							</h1>
							<p className="text-zinc-100 ">Investment excellence.</p>
							<p className="text-zinc-100">Diversity of thought.</p>
							<p className="text-zinc-100">Organizational strength.</p>
						</div>
					</main>
				</div>
			</div>
			<div className=" lg:inset-y-0 lg:right-0 lg:w-1/2">
				{/* <img
					className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
					src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
					alt=""
				/> */}
			</div>
		</div>

		// <header>
		// 	{/* <!-- Navbar --> */}
		// 	<nav class="navbar navbar-expand-md shadow-lg py-2 bg-white flex items-center w-full justify-between fixed top-0 right-0 left-0">
		// 		<div class="px-6">
		// 			<button
		// 				class="navbar-toggler border-0 py-3 px-2 md:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out"
		// 				type="button"
		// 				data-bs-toggle="collapse"
		// 				data-bs-target="#navbarSupportedContentM"
		// 				aria-controls="navbarSupportedContentM"
		// 				aria-expanded="false"
		// 				aria-label="Toggle navigation"
		// 			>
		// 				<svg
		// 					aria-hidden="true"
		// 					focusable="false"
		// 					data-prefix="fas"
		// 					class="w-5"
		// 					role="img"
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					viewBox="0 0 448 512"
		// 				>
		// 					<path
		// 						fill="currentColor"
		// 						d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
		// 					></path>
		// 				</svg>
		// 			</button>
		// 			<div
		// 				class="navbar-collapse collapse grow items-center"
		// 				id="navbarSupportedContentM"
		// 			>
		// 				<ul class="navbar-nav mr-auto flex flex-col md:flex-row">
		// 					<li class="nav-item">
		// 						<a
		// 							class="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
		// 							href="#!"
		// 							data-mdb-ripple="true"
		// 							data-mdb-ripple-color="light"
		// 						>
		// 							Home
		// 						</a>
		// 					</li>
		// 					<li class="nav-item">
		// 						<a
		// 							class="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
		// 							href="#!"
		// 							data-mdb-ripple="true"
		// 							data-mdb-ripple-color="light"
		// 						>
		// 							Features
		// 						</a>
		// 					</li>
		// 					<li class="nav-item">
		// 						<a
		// 							class="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
		// 							href="#!"
		// 							data-mdb-ripple="true"
		// 							data-mdb-ripple-color="light"
		// 						>
		// 							Pricing
		// 						</a>
		// 					</li>
		// 					<li class="nav-item">
		// 						<a
		// 							class="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
		// 							href="#!"
		// 							data-mdb-ripple="true"
		// 							data-mdb-ripple-color="light"
		// 						>
		// 							About
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</nav>
		// 	{/* <!-- Navbar --> */}

		// 	{/* <!-- Background image --> */}
		// 	<div
		// 		class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
		// 		style={{
		// 			backgroundImage: `url(${DesktopBackground})`,
		// 			backgroundSize: "cover",
		// 			backgroundPosition: "center",

		// 			height: "100vh",
		// 		}}
		// 	>
		// 		<div
		// 			class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
		// 			style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
		// 		>
		// 			<div class="flex justify-center items-center h-full">
		// 				<div class="text-white">
		// 					<h2 class="font-semibold text-4xl mb-4">Heading</h2>
		// 					<h4 class="font-semibold text-xl mb-6">Subheading</h4>
		// 					<a
		// 						class="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
		// 						href="#!"
		// 						role="button"
		// 						data-mdb-ripple="true"
		// 						data-mdb-ripple-color="light"
		// 					>
		// 						Call to action
		// 					</a>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	{/* <!-- Background image --> */}
		// </header>
	);
}
