import React from 'react';
import '../styles/Sidemenu.css';
import { FaHeart } from 'react-icons/fa';

const Sidemenu = () => {
	return (
		<nav className="sidemenu">
			<h1>Portfolio</h1>

			<ul>
				<li id="li-1">
					<a href="#home">home</a>
				</li>
				<li id="li-2">
					<a href="#projectBody">projects</a>
				</li>
				<li id="li-3">
					<a href="#article">articles</a>
				</li>
				<li id="li-4">
					<a href="#about">about</a>
				</li>
				<li id="li-5">
					<a href="#contact">contact</a>
				</li>
			</ul>

			<footer>
				<p>
					Copyright &copy; 2020 All rights reserved | Built with <FaHeart /> by Vic Orlands
				</p>
			</footer>
		</nav>
	);
};
export default Sidemenu;
