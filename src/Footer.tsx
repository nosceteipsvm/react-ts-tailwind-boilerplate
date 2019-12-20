import React from 'react';

const Footer: React.FC = () => {
	return (
		<>
            <div className="w-full p-20 text-center flex items-center justify-center bg-gray-100">
                <h2 className="text-4xl max-w-2xl leading-tight text-gray-900">Art party roof party glossier distillery succulents subway tile mustache.</h2>
            </div>

            {/* PARTNERS */}

			<div className="relative rounded-lg flex flex-wrap items-center justify-center self-center bg-gray-100 shadow-xl pb-4">
			  <button className="px-8 py-2 opacity-50 hover:opacity-100 focus:opacity-70 focus:outline-none">
			  	<img className="w-40 h-22" src="../public/727900.png" alt=""/>
			  </button>
			  <button className="px-8 py-2 opacity-50 hover:opacity-100 focus:opacity-70 focus:outline-none">
			  	<img className="w-26 h-32" src="../public/Versace_1978.png" alt=""/>
			  </button>
			  <button className="px-8 py-2 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none">
			  	<img className="w-24 h-12" src="../public/boss-logo.svg" alt=""/>
			  </button>
			  <button className="px-8 py-2 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none">
			  	<img className="w-40 h-22" src="../public/loreal.png" alt=""/>
			  </button>
			  <button className="px-8 py-2 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none">
			  	<img className="w-40 h-22" src="../public/La_Perla_Logo_New.svg" alt=""/>
			  </button>
			</div>

            {/* END PARTNERS */}

			<footer className="p-6 w-full digital" id="footer">
				<div className="flex flex-wrap justify-center">
					<h1 className="text-4xl text-center text-gray-200 text-semibold mb-3">
						Flannel biodiesel neutra heirloom
					</h1>
					<h5 className="text-lg text-center text-gray-600 font-medium text-semibold">
						Actually scenester farm-to-table, ugh heirloom tacos VHS before they sold out vegan iPhone snackwave beard.
					</h5>
				</div>

				<div className="flex-1 md:flex-wrap md:flex content-center self-center justify-center py-6 text-center text-gray-200 px-2">
						<h1 className="text-2xl text-gray-200 text-semibold p-4 uppercase">
							join our newsletter
						</h1>
					<div id="newsletter-inp">
						<div className="flex flex-1">
							<input className="bg-transparent border-b border-gray-200 text-lg h-12 placeholder-gray-600 text-gray-600 font-semibold p-4 focus:outline-none" type="text" placeholder="Your Email Address" spellCheck="false" />
							<button className="bg-transparent font-bold text-white hover:text-gray-700 h-12 border-b border-white px-4 outline-none focus:outline-none">➔</button>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap content-center self-center justify-left md:justify-center p-4 md:p-1">
					<ul className="flex flex-wrap">
						<li className="inline-block p-2 mr-8 md:mr-6">
							<a href="" className="text-indigo-800 font-semibold">
								How it Works
							</a>
						</li>
						<li className="inline-block text-indigo-800 font-semibold p-2 mr-8 md:mr-6">
							<a href="" className="text-indigo-800 font-semibold">
								Why AEIOU
							</a>
						</li>
						<li className="inline-block text-indigo-800 font-semibold p-2 mr-8 md:mr-6">
							<a href="" className="text-indigo-800 font-semibold">
								Company Profile
							</a>
						</li>
						<li className="inline-block text-indigo-800 font-semibold p-2 mr-8 md:mr-6">
							<a href="" className="text-indigo-800 font-semibold">
								Careers
							</a>
						</li>
						<li className="inline-block text-indigo-800 font-semibold p-2 mr-8 md:mr-6">
							<a href="" className="text-indigo-800 font-semibold">
								Corporate Data
							</a>
						</li>
					</ul>
				</div>

				<div className="flex items-center justify-between flex-wrap pt-4">	
					<div className="flex items-center flex-shrink-0 text-white">
						<span className="text-gray-800 text-center text-sm font-semibold">
							&copy; AEIO Co, LLC
						</span>
					</div>

					<div className="w-full text-center lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0">
						<ul className="list-reset lg:flex justify-end flex-1 items-center md:ml-12">
							<li>
								<a className="inline-block py-2 font-semibold text-indigo-800 text-sm hover:text-indigo-600 mr-3" href="#">
									<img className="w-8 h-8" src="../public/pinterest.svg" alt=""/>
								</a>
								<a className="inline-block py-2 font-semibold text-indigo-800 text-sm hover:text-indigo-600 mr-3" href="#">
									<img className="w-8 h-8" src="../public/twitter.svg" alt=""/>
								</a>
								<a className="inline-block py-2 font-semibold text-indigo-800 text-sm hover:text-indigo-600 mr-3" href="#">
									<img className="w-8 h-8" src="../public/instagram.svg" alt=""/>
								</a>
							</li>
						</ul>
					</div>

					<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0">
						<ul className="list-reset lg:flex justify-end flex-1 items-center">
							<li>
								<a className="inline-block py-2 font-semibold text-sm text-gray-800 hover:text-indigo-600" href="#">
									Privacy Policy
								</a>
								<span className="px-2">-</span>
								<a className="inline-block py-2 font-semibold text-sm text-gray-800 hover:text-indigo-600" href="#">
									Ethical Code
								</a>
								<span className="px-2">-</span>
								<a className="inline-block py-2 font-semibold text-sm text-gray-800 hover:text-indigo-600" href="#">
									Cookie policy
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
};

export default Footer;