/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Hero() {
	return (
		<div className="relative bg-blue-500 overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="relative z-10 pb-8 bg-blue-500 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
					<svg
						className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
						fill="currentColor"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>

					<main className="mt-10 mx-auto max-w-7xl px-7 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<p className="text-lg text-zinc-100 mb-16 max-w-md	 text-base">
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
								<div class="rounded-none	border-b-0 border-dotted w-44 my-4 border-4 space-x-7	..."></div>
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
	);
}
