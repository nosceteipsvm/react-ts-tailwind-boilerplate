import React from 'react';

const Landing: React.FC = () => {
	return (
		<>
			<div className="container shadow-lg mx-auto bg-white mt-24 md:mt-18"></div>
				
			{/* HERO */}

			<div className="flex justify-center self-center items-center" id="hero">
				<div className="flex flex-col w-full absolute md:w-3/2 justify-end items-end text-center md:text-right p-5" id="hero-content">
					<p className="uppercase tracking-loose w-full text-3xl md:text-4xl font-semibold text-black">
						Photo booth locavore schlitz
					</p>
					<h1 className="my-4 text-xl font-bold text-gray-700 leading-tight">Wolf bitters kickstarter etsy shoreditch asymmetrical pabst shabby rerum vero.</h1>
					
					<button className="mx-auto lg:mx-0 text-blue-700 hover:text-blue-900 font-bold rounded-full my-2 py-3 px-6 shadow-lg outline-none btn-hero">
						narwhal <span className="font-medium text-gray-700 ml-2">➔</span>
					</button>
				</div>
				<div className="shoreditch absolute bottom-0">
					<span className="text-base text-gray-800 font-semibold py-2 px-4 bg-white" id="shoreditch">
						. shoreditch
					</span>
				</div>
			</div>

			{/* END HERO */}

			{/* ABOUT */}
			<div className="w-full" id="home">
				<img src="" alt=""/>
			</div>
			<div className="flex flex-wrap md:px-20">
				<div className="w-full md:w-1/2 px-10">
					<img src="../public/rock-formation-2574648.jpg" alt=""/>
				</div>
				<div className="p-4 w-full md:w-1/2">
					<h1 className="text-5xl text-gray-800 font-bold pb-10">
						Keytar marfa lyft
					</h1>
					<p className="text-base text-gray-600 font-semibold">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae architecto iste vel velit perspiciatis neque laudantium quos minima minus ipsa, saepe fuga, repellat necessitatibus veritatis aperiam deleniti dignissimos eaque! Sunloremip dolor sit amet, consectetur adipisicing elit. Repudiandae architecto iste vel velit perspiciatis neque laudantium quos minima minus ipsa, saepe fuga, repellat necessitatibus veritatis aperiam deleniti dignissimos eaque sunt.
					</p>
					<p className="text-base text-gray-600 font-semibold mt-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae architecto iste vel velit perspiciatis neque laudantium quos minima minus ipsa, saepe fuga, repellat necessitatibus veritatis aperiam deleniti dignissimos eaque! Sunloremip dolor sit amet, consectetur adipisicing elit. Repudiandae architecto iste vel velit perspiciatis neque laudantium quos minima minus ipsa, saepe fuga, repellat necessitatibus veritatis aperiam deleniti dignissimos eaque sunt.
					</p>
				</div>
			</div>

			{/* END ABOUT */}

			<div className="max-w-5xl mx-auto p-5 flex justify-end mt-20">
				<h3 className="font-display-italic font-extrabold text-4xl md:text-5xl italic leading-none mb-12 max-w-xl">Godard ugh snackwave.</h3>
			</div>

			{/* LAYOUT */}

			<div className="w-full flex-wrap md:flex">
				<div className="w-full md:w-1/3 flex flex-wrap" id="first-child">
					<div className="p-2 md:p-4">
						<img className="w-full h-64 object-cover hover:opacity-75" src="../public/woman-wearing-green-leather-jacket-holding-flowers-3110281.jpg" alt=""/>
						<div className="p-3">
							<p className="uppercase font-medium text-gray-800">
								gochujang 1905 occaecat
							</p>
							<button className="uppercase text-sm text-gray-800 hover:text-gray-600">
								Cred godard <span className="font-medium text-gray-700 ml-2">➔</span>
							</button>
						</div>
					</div>
					<div className="p-2 md:p-4">
						<img className="w-full h-64 object-cover hover:opacity-75" src="../public/low-angle-photography-of-cathedral-3234167.jpg" alt=""/>
						<div className="p-3">
							<p className="uppercase font-medium text-gray-800">
								gochujang 1905 occaecat
							</p>
							<button className="uppercase text-sm text-gray-800 hover:text-gray-600">
								Cred godard <span className="font-medium text-gray-700 ml-2">➔</span>
							</button>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/3" id="middle-child">
					<div className="md:p-8">
						<img className="w-full h-full object-cover hover:opacity-75" src="../public/man-wearing-a-headdress-3233372.jpg" alt=""/>
						<div className="p-3">
							<p className="uppercase font-medium text-gray-800">
								gochujang 1905 occaecat
							</p>
							<button className="uppercase text-sm text-gray-800 hover:text-gray-600">
								Cred godard <span className="font-medium text-gray-700 ml-2">➔</span>
							</button>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/3 flex flex-wrap" id="third-child">
					<div className="p-2 md:p-4">
						<img className="w-full h-64 object-cover hover:opacity-75" src="../public/blue-and-red-fish-close-up-photography-2564496.jpg" alt=""/>
						<div className="p-3">
							<p className="uppercase font-medium text-gray-800">
								gochujang 1905 occaecat
							</p>
							<button className="uppercase text-sm text-gray-800 hover:text-gray-600">
								Cred godard <span className="font-medium text-gray-700 ml-2">➔</span>
							</button>
						</div>
					</div>
					<div className="p-2 md:p-4">
						<img className="w-full h-64 object-cover hover:opacity-75" src="../public/human-hands-illustrations-3354675.jpg" alt=""/>
						<div className="p-3">
							<p className="uppercase font-medium text-gray-800">
								gochujang 1905 occaecat
							</p>
							<button className="uppercase text-sm text-gray-800 hover:text-gray-600">
								Cred godard <span className="font-medium text-gray-700 ml-2">➔</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* END LAYOUT */}

			{/* PRICING INFO */}

			<div className="antialiased md:max-w-6xl mx-auto my-12 md:px-8 pb-10">
				<div className="relative block md:flex items-center">
				  <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
				    <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">Pay as you go</div>
				    <div className="block sm:flex md:block lg:flex items-center justify-center">
				      <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
				        <div className="inline-flex items-center">
				          <span className="text-3xl font-medium">1.4%</span>
				          <span className="text-xl text-gray-600 ml-2">+</span>
				          <span className="text-xl ml-2">20p</span>
				        </div>
				        <span className="block text-sm text-gray-600 mt-2">for European cards</span>
				      </div>
				      <div className="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
				        <div className="inline-flex items-center">
				          <span className="text-3xl font-medium">2.9%</span>
				          <span className="text-xl text-gray-600 ml-2">+</span>
				          <span className="text-xl ml-2">20p</span>
				        </div>
				        <span className="block text-sm text-gray-600 mt-2">for non-European cards</span>
				      </div>
				    </div>
				    <div className="flex justify-center mt-3 m-4 md:m-1">
				      <ul>
				        <li className="flex items-center">
				          <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
				            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-umbrella"><path className="primary" d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"/><path className="secondary" d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"/></svg>
				          </div>
				          <span className="text-gray-700 text-lg ml-3">No setup, monthly, or hidden fees</span>
				        </li>
				        <li className="flex items-center mt-3">
				          <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
				            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-shopping-bag"><path className="primary" d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z"/><path className="secondary" d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z"/></svg>
				          </div>
				          <span className="text-gray-700 text-lg ml-3">Pay only for what you use</span>
				        </li>
				        <li className="flex items-center mt-3">
				          <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
				            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-pie-chart"><path className="primary" d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z"/><path className="secondary" d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z"/></svg>
				          </div>
				          <span className="text-gray-700 text-lg ml-3">Real-time fee reporting</span>
				        </li>
				      </ul>
				    </div>
				    <a className="block flex items-center justify-center p-6 text-md font-semibold text-gray-800 uppercase mt-16" href="#">
				      <span>Create account</span>
				      <span className="font-medium text-gray-700 ml-2">➔</span>
				    </a>
				  </div>
				  <div className="w-full md:w-1/2 relative z-0 px-0 md:px-0 md:py-16">
				    <div className="digital-b text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
				      <div className="text-xl font-semibold uppercase pt-6 pb-3 text-center tracking-wide">
				      	<span className="border-b border-b-white pb-2">
				      		Enterprise
				      	</span>
				      </div>
				      <div className="text-center text-md max-w-sm mx-auto mt-8 text-gray-200 px-8 lg:px-0">
				        Chillwave letterpress semiotics yr, listicle copper mug salvia before they sold out bicycle rights kale chips cardigan everyday carry.
				      </div>
				      <div className="mt-8 mx-8 lg:mx-16 flex flex-wrap">
				        <div className="flex items-center digital-c justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">
				        	Microdosing
				        </div>
				        <div className="flex items-center digital-c justify-center w-1/2 text-center p-4 border-b border-blue-800">
				        	Tilde selfies
				        </div>
				        <div className="flex items-center digital-c justify-center w-1/2 text-center p-4 border-r border-blue-800">			Bottle locavore
				        </div>
				        <div className="flex items-center digital-c justify-center w-1/2 text-center p-4">
				        	Ramps adaptogen
				        </div>
				      </div>
				      <a className="block flex items-center justify-center p-8 text-md font-semibold text-gray-300 hover:text-gray-700 uppercase mt-8" href="#">
				        <span>Contact sales</span>
				        <span className="font-medium ml-2">➔</span>
				      </a>
				    </div>
				  </div>
				</div>
			</div>

			{/* END PRICING INFO */}
		</>
	)
};

export default Landing;