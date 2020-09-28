import React from 'react';
import '../styles/Sidemenu.css';
import { FaHeart } from 'react-icons/fa';

const Sidemenu = () => {
	return (
		<nav className="sidemenu">
			<h1>Portfolio</h1>

			<ul>
				<li id="li-1">home</li>
				<li id="li-2">projects</li>
				<li id="li-3">articles</li>
				<li id="li-4">about</li>
				<li id="li-5">contact</li>
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
