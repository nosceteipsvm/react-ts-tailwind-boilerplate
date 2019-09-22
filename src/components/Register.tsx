import React, { useState } from 'react';

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
		<div className="layout">
			<div className="w-full max-w-xs">
			  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			    <div className="mb-4">
			      <label className="block text-gray-700 text-sm font-bold mb-2">
			        Username
			      </label>
			      <input name="username" value={fields.username} onChange={(e) => handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your username..." />
			    </div>
			    <div className="mb-4">
			      <label className="block text-gray-700 text-sm font-bold mb-2">
			        Email
			      </label>
			      <input name="email" value={fields.email} onChange={(e) => handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Your email address..." />
			    </div>
			    <div className="mb-4">
			      <label className="block text-gray-700 text-sm font-bold mb-2">
			        Password
			      </label>
			      <input name="password" value={fields.password} onChange={(e) => handleChange(e)} className="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Your password..." />
			    </div>
			    <div className="mb-4">
			      <label className="block text-gray-700 text-sm font-bold mb-2">
			        Password Confirmation
			      </label>
			      <input name="confirm_password" value={fields.confirm_password} onChange={(e) => handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm_password" type="password" placeholder="Please confirm your password..." />
			    </div>
			    <div className="mb-4">
			    {

			      	errors.map((err: string, i: number) => (
			      		<>
			      			<li key={i} className="list-none">
			      				<p className="text-red-500 text-xs italic">{err}</p>
			      			</li>
			      		</>
			      	)
			      	)

			    }
			    </div>
			    <div className="flex items-center justify-between">
			      <button className="btn-signup bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
			        Sign Up
			      </button>
			      <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-blue-800" href="/login">
			        Already have an account?
			      </a>
			    </div>
			  </form>
			</div>
		</div>
	)
};

export default Register;
