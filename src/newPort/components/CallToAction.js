import React, { Component } from 'react';
import '../styles/CallToAction.css';

class CallToAction extends Component {
	render() {
		return (
			<section className="callActionBody" id="callActionBody">
				<div className="container row">
					<div className="Card col-sm">
						<div className="face face1">
							<div className="content">
								<img src={require('../assets/project.jpg')} width="200px" />
								<h3> Projects </h3>
							</div>
						</div>

						<div className="face face2">
							<div className="content">
								<p>
									I have worked on some amazing projects both personal, as a collaborator and as part of
									a team. Working on these projects has broadened my knowledge and experience
									especially working with a team. See these project...
								</p>
								<a href="#projectBody">See more</a>
							</div>
						</div>
					</div>

					<div className="Card col-sm">
						<div className="face face1">
							<div className="content">
								<img src={require('../assets/logo1.png')} width="200px" />
								<h3> Contact Me </h3>
							</div>
						</div>

						<div className="face face2">
							<div className="content">
								<p>
									Do you have a project in works but you need a collaborator, hit me up. Got a project
									that you want to bring to life, also hit me up for your advanced and quality assurance
									works...
								</p>
								<a href="#contactBody">Hire my expertise</a>
							</div>
						</div>
					</div>

					<div className="Card col-sm">
						<div className="face face1">
							<div className="content">
								<img src={require('../assets/community.jpg')} width="180px" />
								<h3> Articles </h3>
							</div>
						</div>

						<div className="face face2">
							<div className="content">
								<p>
									Writing articles is a soft skill am still harnessing in these due course of mine.
									Not easy, but these are some of my articles written on tech blogs like medium,
									hashnode and dev.to...
								</p>
								<a href="#articlesContainer">See more</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default CallToAction;
