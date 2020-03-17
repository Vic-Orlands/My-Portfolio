import React, { Component } from 'react';
import logo from '../assets/logo.png';
import '../styles/Nav.css';

class Nav extends Component {
	// navContainer = document.querySelector('.navContainer');

	// state = {
	// 	navContainer: false,
	// 	toggle: false
	// };

	// change = (e) => {
	// 	e.preventDefault();
	// 	this.setState({
	// 		navContainer: !this.state.navContainer,
	// 		toggle: !this.state.toggle
	// 	});
	// };

	render() {
		return (
			// <nav className={'navContainer navbar navbar-expand-sm ' + (this.state.navContainer ? 'change' : '')}>
			<nav className="navbar navbar-expand-sm navbar-dark navContainer">
				<div className="navName">
					<img src={logo} alt="My Logo" className="navbar-logo"/>
					<h1 className="navbar-brand"> INNOCENT CHIMEZIE VICTOR </h1>
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

{/* 
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
				)} */}

				{/* <div className="barContainer" onClick={this.change}>
					<div className="bar1" />
					<div className="bar2" />
					<div className="bar3" />
				</div> */}
			</nav>
		);
	}
}
export default Nav;
