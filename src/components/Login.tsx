import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
	const [errors, updateErrors] = useState<string[]>(['']);
	const [fields, updateFields] = useState({
		username: '',
		password: ''
	});

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		await updateFields({
			...fields,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(fields.username, fields.password);
	}

	return (
		<>	
	<div className="container mx-auto" style={{
		marginTop: '15vh',
		paddingBottom: '5vh',
	}}>
		<div className="flex justify-center px-6 my-12">
			<div className="w-full xl:w-3/4 lg:w-11/12 flex">
				<div
					className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
					style={{
						backgroundImage: "url('../public/wenyang--IZJXbw2Jfw-unsplash.jpg')",
					}}
				></div>
				<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
					<div className="px-6">
						<h3 className="ml-2 pt-4 text-2xl font-semibold">
							Sign in
						</h3>
					</div>	
					<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700">
								Username
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none"
								id="username"
								type="text"
								placeholder="Username"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700">
								Password
							</label>
							<input
								className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none"
								id="password"
								type="password"
								placeholder="Password"
							/>
							{/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
						</div>
						<div className="mb-4">
							<input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
							<label className="text-sm">
								Remember me
							</label>
						</div>
						<div className="mb-6 text-center">
							<button
								className="w-full px-4 py-2 font-md bg-white border border-gray-800 text-gray-800 hover:bg-black hover:text-gray-200 focus:outline-none"
								type="button"
							>
								Sign in
							</button>
						</div>
						<hr className="mb-6 border-t" />
						<div className="text-center">
							<Link
								className="inline-block text-sm text-indigo-800 align-baseline hover:text-indigo-600"
								to="/signup"
							>
								Apply Now
							</Link>
						</div>
						<div className="text-center">
							<Link
								className="inline-block text-sm text-indigo-800 align-baseline hover:text-indigo-600"
								to="/recover"
							>
								Recover account
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
		</>
	)
};

export default Login;