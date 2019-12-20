import React from 'react';

const About: React.FC = () => {
	return (
		<>			
			<div
			className="w-full p-20 text-center flex items-center justify-center bg-gray-100"
			id="over"
			style={{
				marginTop: '10vh',
			}}></div>
			<div className="flex flex-wrap justify-center pb-20">
				<div className="p-4 w-full text-center md:w-1/2">
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
		</>
	)
};

export default About;