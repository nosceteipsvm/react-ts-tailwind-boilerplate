import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/Landing';
import FourOhFour from './components/FourOhFour';
import Contact from './components/Contact';
import Login from './components/Login';
import About from './components/About';
import Register from './components/Register';

const App: React.FC = () => {
	return (
		<Switch>
			<Route exact path='/' component={Landing} />
			<Route exact path='/contact' component={Contact} />
			<Route exact path='/about' component={About} />
			<Route exact path='/signin' component={Login} />
			<Route exact path='/signup' component={Register} />
			<Route component={FourOhFour} />
		</Switch>
	)
}

export default App;