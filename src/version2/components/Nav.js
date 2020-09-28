import React, { Component } from 'react';
import logo from '../assets/logo.png';
import '../styles/Nav.css';

class Nav extends Component {
	navContainer = document.querySelector('.navContainer');

	state = {
		navContainer: false,
		toggle: false
	};

	change = (e) => {
		e.preventDefault();
		this.setState({
			navContainer: !this.state.navContainer,
			toggle: !this.state.toggle
		});
	};

	render() {
		return (
			<nav className={'navbar navbar-expand-sm navContainer ' + (this.state.navContainer ? 'change' : '')}>
				<img src={logo} alt="My Logo" className="navbar-logo" />

				{/* --------------------------------------------------------below is the toggle menu bar on small screens---------------------------------------- */}

				<div className="barContainer" onClick={this.change}>
					<div className="bar1" />
					<div className="bar2" />
					<div className="bar3" />
				</div>
			</nav>
		);
	}
}
export default Nav;
