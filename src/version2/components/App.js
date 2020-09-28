import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import Portfolio from './Portfolio';

const App = () => {
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	});

	return <body>{isLoading ? <Welcome /> : <Portfolio />}</body>;
};
export default App;
