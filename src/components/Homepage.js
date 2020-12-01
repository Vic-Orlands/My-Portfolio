import React from 'react';
import Sidemenu from './Sidemenu';
import Projects from './Projects';
import '../styles/Homepage.css';
import Articles from './Articles';
import Contact from './Contact';

const Homepage = () => {
	return (
		<main>
			<Sidemenu />

			<section className="homeBody" id="home">
				<div className="home">
					<div id="homeImage">
						<div className="homeImageTexts">
							<h3>hello, i'm...</h3>
							<h1>
								Innocent Chimezie <br /> Victor
							</h1>

							<p>
								A humble developer that specializes in frontend but <br /> delves a little into backend
								and sometimes technical <br /> writing. An adept pes lover and not your regular
								christian.{' '}
							</p>
						</div>
						<h2>See More</h2>
					</div>
				</div>

				<Projects />
				<Articles />
				<Contact />
			</section>
		</main>
	);
};
export default Homepage;
