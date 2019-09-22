import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<>
			<nav className="navbar fixed w-full relative p-4">
				<a className="absolute float-left mr-auto text-gray-900" href="/">HOME</a>
				<ul className="flex justify-end">
				  <li className="mr-6">
				    <a className="text-gray-500 hover:text-gray-800" href="/login">Signin</a>
				  </li>
				  <li className="mr-6">
				    <a className="text-gray-500 hover:text-gray-800" href="/register" id='btn-signup'>Signup</a>
				  </li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation;