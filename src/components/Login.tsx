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
			<div className="flex justify-center min-w-screen w-full min-h-screen h-full gradient" style={{
				paddingTop: '30vh'
			}}>
			  <div className="w-full max-w-xs">
			    <form  className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
			      <h1 className="text-2xl text-center text-gray-300 mb-3 pb-4">Log into Cryptopia</h1>
			      <div className="mb-4">
			        <input name="username" value={fields.username} onChange={(e) => handleChange(e)} className="shadow appearance-none rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline  bg-black border-b border-gray-800" id="username" type="text" name="username" placeholder="Email Adress"/>
			      </div>
			      <div className="mb-2">
			        <input name="password" value={fields.password} onChange={(e) => handleChange(e)} className="shadow appearance-none rounded w-full py-2 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-black border-b border-gray-800" id="password" type="password" name="password" placeholder="Password"/>
			      </div>
			      <div className="flex items-center justify-between">
			        <button className="w-full gradient-b hover:text-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
			          Sign In
			        </button>
			      </div>
			      <div className="pt-4">
			        <a className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-600 mr-4" href="/recover_password">
			          Create an Account
			        </a>
			        <a className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-600" href="/recover_password">
			          Recover Account
			        </a>
			      </div>
			    </form>
			  </div>
			</div>
		</>
	)
};

export default Login;