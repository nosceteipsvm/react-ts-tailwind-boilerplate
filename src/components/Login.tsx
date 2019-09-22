import React, { useState } from 'react';

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
			<div className="layout">
				<div className="w-full max-w-xs">
				  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} noValidate>
				    <div className="mb-4">
				      <label className="block text-gray-700 text-sm font-bold mb-2">
				        Username
				      </label>
				      <input name="username" value={fields.username} onChange={(e) => handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username..." />
				    </div>
				    <div className="mb-6">
				      <label className="block text-gray-700 text-sm font-bold mb-2">
				        Password
				      </label>
				      <input name="password" value={fields.password} onChange={(e) => handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password..." />
				    </div>
				    <div className="mb-6 errors">
				    	{
				    		errors.map((error: string, i: number) => (
				    			<li key={i} className="list-none">
				    				<p className="text-red-500 text-xs italic">{error}</p>
				    			</li>
				    		))
				    	}
				    </div>
				    <div className="flex items-center justify-between">
				      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
				        Sign In
				      </button>
				      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
				        Forgot Password?
				      </a>
				    </div>
				  </form>
				</div>
			</div>
		</>
	)
};

export default Login;