import React, { Component } from 'react';
import Nav from './Nav';
import Animate from './Animate';
import Explore from './Explore';
import CallToAction from './CallToAction';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Articles from './Articles';
import '../styles/Portfolio.css';

class Portfolio extends Component {
	render() {
		return (
			<main>
				<Nav />
				<Animate />
				<Explore />
				<Animate />
				<CallToAction />
				<Projects />
				<ContactMe />
				<Articles />
			</main>
		);
	}
}
export default Portfolio;
