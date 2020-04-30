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
				<div className="navName">
					<img src={logo} alt="My Logo" className="navbar-logo" />
					<h1 className="navbar-brand">
						{' '}
						INNOCENT
						<span>C</span>
						<span>H</span>
						<span>I</span>
						<span>M</span>
						<span>E</span>
						<span>Z</span>
						<span>I</span>
						<span>E</span>
						VICTOR
					</h1>
				</div>

				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link active nav nav-li nav-li-1" href="#">
							HOME
						</a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link nav nav-li nav-li-2" href="#">
							PROJECTS
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link nav nav-li nav-li-3" href="#">
							CONTACT ME
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link nav nav-li nav-li-4" href="#">
							ARTICLES
						</a>
					</li>
				</ul>

				{/* --------------------------------------------------------below is the toggle menu bar on small screens---------------------------------------- */}

				<div className="barContainer" onClick={this.change}>
					<div className="bar1" />
					<div className="bar2" />
					<div className="bar3" />
				</div>

				{this.state.toggle && (
					<div className="navCategories-mobile">
						<a href="#home" className="nav-mobile">
							{' '}
							HOME{' '}
						</a>
						<a href="#projectBody" className="nav-mobile">
							{' '}
							PROJECTS{' '}
						</a>
						<a href="#contactBody" className="nav-mobile">
							{' '}
							CONTACT ME{' '}
						</a>
						<a href="#articlesContainer" className="nav-mobile">
							{' '}
							ARTICLES{' '}
						</a>
					</div>
				)}
			</nav>
		);
	}
}
export default Nav;
