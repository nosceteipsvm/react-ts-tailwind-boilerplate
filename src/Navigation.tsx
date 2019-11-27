import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<>
			<nav id="header" className="fixed w-full z-30 top-0 text-white px-6">

				<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
						
					<div className="pl-4 flex items-center">
						<Link className="toggleColour text-orange-300 no-underline hover:no-underline font-bold text-2xl lg:text-2xl uppercase"  to="/">cryptopia
						</Link>
					</div>

					<div className="block lg:hidden pr-4">
						<button id="nav-toggle" className="flex items-center p-1 text-orange-200 hover:text-gray-900">
							<svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
						</button>
					</div>

					<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent text-white p-4 lg:p-0 z-20" id="nav-content">
						<ul className="list-reset lg:flex justify-end flex-1 items-center">
							<li className="mr-3">
								<Link className="inline-block py-2 px-4 text-white font-semibold  hover:text-indigo-200 no-underline capitalize" to="/">about</Link>
							</li>
							<li className="mr-3">
								<Link className="inline-block text-white font-semibold no-underline hover:text-indigo-200 hover:text-underline py-2 px-4 capitalize" to="/">data</Link>
							</li>
							<li className="mr-3">
								<Link className="inline-block text-white font-semibold no-underline hover:text-indigo-200 hover:text-underline py-2 px-4 capitalize" to="/login">signin</Link>
							</li>
						</ul>
						<Link to="/register">
							<button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-4 shadow opacity-75 capitalize">signup</button>
						</Link>
					</div>
				</div>
				
			</nav>
		</>
	)
}

export default Navigation;