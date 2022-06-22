/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../../assets/images/logo.png";
import Logomobile from "../../assets/images/Logomobile.png";

const navigation = [
	{ name: "Home", href: "#", current: false },
	{ name: "About Us", href: "#", current: false },
	{ name: "Insights", href: "#", current: false },
	{ name: "Events", href: "#", current: false },
	{ name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-gray-200 sm:bg-white lg:bg-white">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 pt-5 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon
											className="block h-6 w-6 text-sky-800"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center  justify-normal  sm:justify-between  ">
								<div className="flex-shrink-0 flex items-center relative">
									<div>
										<img
											className="block md:hidden mx-auto w-40 mb-4 ml-20 xl:ml-0 lg:ml-0 md:ml-0"
											src={Logomobile}
											alt="Workflow"
										/>
									</div>

									<div>
										<img
											className="hidden md:block h-20 relative z-10 bg-white mb-6"
											src={Logo}
											alt="Workflow"
										/>
									</div>
									<div className="ml-4 hidden md:block">
										<p className="text-sm text-sky-500 ml-1">
											Research Professional
										</p>
										<h3 className="text-4xl text-blue-800 font-bold pb-3 ">
											Platform
										</h3>
									</div>
									<div className="V-line hidden md:block"></div>
								</div>
								<div className="hidden sm:block sm:ml-28">
									<div className="flex space-x-4 ">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? "bg-gray-900 text-white "
														: "text-black-300  hover:bg-gray-700 hover:text-white",
													"px-1 py-4 rounded-md text-sm font-medium "
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden mx-auto relative w-full bg-white">
						<div className="pt-2 pb-3 mt-10  mx-auto ">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-blacl-300 bg-gray-200 my-5 hover:bg-gray-700 hover:text-white",
										"block py-2 rounded-md text-base font-medium w-full text-center mx-auto leading-10"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
