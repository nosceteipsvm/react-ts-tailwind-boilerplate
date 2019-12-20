import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<>
			<nav className="flex items-center justify-between flex-wrap bg-white md:bg-transparent p-6 w-full fixed z-10 top-0" id="header">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<Link className="text-white no-underline hover:text-white hover:no-underline" to="/">
						<span className="text-2xl text-indigo-800 font-semibold pl-2">AEIOU.</span>
					</Link>
				</div>

				<div className="block lg:hidden">
					<button id="nav-toggle" className="flex items-center px-3 py-2 font-bold text-gray-700 outline-none underline focus:outline-none">
						menu
					</button>
				</div>

				<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
					<ul className="list-reset lg:flex justify-end flex-1 items-center md:ml-12">
						<li className="mr-3">
							<Link className="inline-block py-2 px-4 font-semibold text-indigo-800 hover:text-indigo-600" to="/about">
								About
							</Link>
							<Link className="inline-block py-2 px-4 font-semibold text-indigo-800 hover:text-indigo-600" to="/contact">
								Customer Care
							</Link>
							<Link className="inline-block py-2 px-4 font-semibold text-indigo-800 hover:text-indigo-600" to="#">	
								Resources
							</Link>
							<Link className="inline-block py-2 px-4 font-semibold text-indigo-800 hover:text-indigo-600" to="#">
								Data
							</Link>
						</li>
					</ul>
				</div>

				<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
					<ul className="list-reset lg:flex justify-end flex-1 items-center">
						<li className="mr-3">
							<Link className="inline-block py-2 px-4 font-semibold text-indigo-800 hover:text-indigo-600 mr-4" to="/signin">
								Signin
							</Link>
							<Link className="inline-block py-2 px-4 bg-transparent hover:bg-indigo-600 font-semibold text-indigo-800 hover:text-gray-200 rounded-full border border-indigo-800" to="/signup">
								Apply Now
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navigation;