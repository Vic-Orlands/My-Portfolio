import React, { Component } from 'react';
import '../styles/Explore.css';

class Explore extends Component {
	render() {
		const onClick = () => {
			window.location.href = '#callActionBody';
		};
		return (
			<section className="exploreBody " id="exploreBody">
				<div className="overlay">
					<p> EXPLORE </p>
					<div>
						<button className="myBtn button" onClick={onClick}> EXPLORE </button>
					</div>
				</div>
			</section>
		);
	}
}
export default Explore;
