/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../../assets/images/logo.png";
import Logomobile from "../../assets/images/Logomobile.png";

export default function Navbar() {
	return (
		<nav>
			<div className="flex items-center justify-between flex-wrap bg-gray-200 p-6">
				{/* <img
					className=""
					// src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
					src={Logomobile}
					alt="Workflow"
				/> */}
				<div className=" flex ">
					<img
						className=""
						// src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
						src={Logo}
						alt="Workflow"
					/>
					<div>
						<p className="text-sky-600 font-semibold text-xs">
							Research Professional
						</p>
						<span className="text-3xl text-indigo-900 font-extrabold">Platform</span>
					</div>
				</div>
			</div>
		</nav>
	);
}
