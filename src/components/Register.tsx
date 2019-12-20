import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
	const [errors, updateErrors] = useState<string[]>(['']);
	const [fields, updateFields] = useState({
		username: '',
		email: '',
		password: '',
		confirm_password: ''
	});

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		await updateFields({
			...fields,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(fields.username,
					fields.email,
					fields.password,
					fields.confirm_password);
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
							className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
							style={{
								backgroundImage: "url('../public/woman-covering-her-face-3241748.jpg')",
							}}></div>
						<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
							<div className="px-6">
								<h3 className="ml-2 pt-4 text-2xl font-semibold">
									Register Account
								</h3>
								<p className="ml-2 py-4 text-base text-gray-700">
									If you already have an account with us, please <Link className="text-indigo-800 underline hover:text-indigo-600" to="/login">login</Link> at the login page.
								</p>
							</div>
							<form className="px-8 pt-6 pb-8 mb-4 bg-white" onSubmit={ handleSubmit }>
								<div className="mb-4 md:flex">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label className="block mb-2 text-sm font-bold text-gray-700">
											First Name
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none"
											id="firstName"
											type="text"
											placeholder="First Name"
										/>
									</div>
									<div className="md:ml-2">
										<label className="block mb-2 text-sm font-bold text-gray-700">
											Last Name
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none"
											id="lastName"
											type="text"
											placeholder="Last Name"
										/>
									</div>
								</div>
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700">
										Email
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none"
										id="email"
										type="email"
										placeholder="Email"
									/>
								</div>
								<div className="mb-4 md:flex">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label className="block mb-2 text-sm font-bold text-gray-700">
											Password
										</label>
										<input
											className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none"
											id="password"
											type="password"
											placeholder="Password"
										/>
									</div>
									<div className="md:ml-2">
										<label className="block mb-2 text-sm font-bold text-gray-700">
											Confirm Password
										</label>
										<input
											className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none"
											id="c_password"
											type="password"
											placeholder="Confirm Password"
										/>
									</div>
								</div>
								<div className="mb-4">
									<label className="text-sm text-gray-800 mr-2">
										I have read and agree to the <a className="text-gray-900 hover:underline">Privacy Policy</a>
									</label>
									<input className="leading-tight" type="checkbox" id="checkbox_id" />
								</div>
								<div className="mb-6 text-center">
									<button
										className="w-full px-4 py-2 font-md bg-white border border-gray-800 text-gray-800 hover:bg-black hover:text-gray-200 focus:outline-none"
										type="button"
									>
										Register Account
									</button>
								</div>
								<hr className="mb-6 border-t" />
								<div className="text-center">
									<Link
										className="inline-block text-sm text-indigo-800 align-baseline hover:text-indigo-600"
										to="/recover"
									>
										Forgot Password?
									</Link>
								</div>
								<div className="text-center">
									<Link
										className="inline-block text-sm text-indigo-800 align-baseline hover:text-indigo-600"
										to="/signin"
									>
										Already have an account? Login
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

export default Register;
