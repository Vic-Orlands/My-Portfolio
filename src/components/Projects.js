import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/Projects.css';

const Projects = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className="projectBody" id="projectBody">
			<div data-aos="zoom-in" className="projectBounce">
				<h1> Awesome Projects </h1>
				<h5>Below details few projects that I have worked on, some with awesome teammates </h5>
			</div>

			<div>
				<div data-aos="zoom-in" className="projectFiles">
					<h3>PROJECTS</h3>
					<hr className="hr one" />
					<p> A Todo App </p>
					<p>A fully functional School Management App </p>
					<p> A real-time movie search App </p>
					<p> A real-time world news website </p>
					<p>
						A Lifescore App that displays matches played or to be played with their match-times and scores.
					</p>
                    		<p>
						A automated data-recharge site
					</p>
					<p>
						Geo-Search-a website that shows you the weather condition, map and images of any place in the
						world
					</p>
					<p>A photographer's site</p>
					<h6>
						{' '}
						<b>Skills:</b> React, React-Native, HTML5, CSS3, Javascript, Git and GitHub, GitHub Pages, Netlify, Surge, GitHub
						Project Management Board.
					</h6>
					<a href="https://github.com/Vic-Orlands"> View more in github </a>
				</div>

				<div data-aos="zoom-in" className="projectFiles">
					<h3>COMMUNITY SERVICES</h3>
					<hr className="hr two" />
					<p> Taught Scratch to Secondary Schools under the administration of LearnFactory Nigeria.</p>
					<p>
						{' '}
						Taught teenagers and Secondary School teachers how to be Safer Online, a Google programme still
						under the above administration.
					</p>
					<p> Taught html and css to beginners </p>
				</div>
			</div>
		</div>
	);
};
export default Projects;
