import React, { Component } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaDev, FaMedium, FaHandPeace } from 'react-icons/fa';
import image from '../assets/port.jpg';
import '../styles/ContactMe.css';

class ContactMe extends Component {
	render() {
		return (
			<section className="contactBody" id="contactBody">
				<h2> -------SAY HELLO------- </h2>
				<hr />

				<div className="cardFlex">
					<div className="cardHoverContainer">
						<div className="front">
							<img src={image} alt="myPhoto" />
						</div>

						<div className="back backContent">
							<FaHandPeace style={{ fontSize: 50, color: 'rgb(202, 182, 182)', marginBottom: 20 }} />
							<h3> Reach me through my Social media handles </h3>

							<div>
								<a href="https://www.linkedin.com/in/victor-innocent/">
									{' '}
									<FaLinkedin className="cardHoverFont" />{' '}
								</a>
								<a href="https://twitter.com/Vic_Orlands">
									{' '}
									<FaTwitter className="cardHoverFont" />{' '}
								</a>
								<a href="https://github.com/Vic-Orlands">
									{' '}
									<FaGithub className="cardHoverFont" />{' '}
								</a>
								<a href="https://dev.to.com/Vic-Orlands">
									{' '}
									<FaDev className="cardHoverFont" />{' '}
								</a>
								<a href="https://medium.com/@chimezieinnocent39">
									{' '}
									<FaMedium className="cardHoverFont" />{' '}
								</a>
							</div>
						</div>
					</div>

					<div className="contactFormContainer">
						<label> Name: </label>
						<input type="text" placeholder="Enter your name" />

						<label> Email Address: </label>
						<input type="text" placeholder="Enter your email" />

						<label> Message: </label>
						<input type="text" placeholder="What's your message" className="msgInput" />

						<button className="btn">Send</button>

						<hr />
					</div>
				</div>
			</section>
		);
	}
}
export default ContactMe;
