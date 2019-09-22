import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/main.scss';
import { AuthContextProvider } from './AuthContext';
import Navigation from './Navigation';
import App from './App';

ReactDOM.render(
	<AuthContextProvider>
		<Router>
			<Navigation />
			<App />
		</Router>
	</AuthContextProvider>
	, document.querySelector('#root'));