import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import Homepage from './components/Homepage';

const App = () => {
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 0);
	});

	return <body>{isLoading ? <Welcome /> : <Homepage />}</body>;
};
export default App;
