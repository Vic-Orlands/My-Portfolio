import React, { Component } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaDev, FaMedium, FaHandPeace } from 'react-icons/fa';
import image from '../assets/port.jpg';
import '../styles/ContactMe.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const axios = require('axios');

class ContactMe extends Component {
	state = {
		name: '',
		email: '',
		message: ''
	};
	clear = {
		name: '',
		email: '',
		message: ''
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, message } = this.state;
		axios
			.post('mongodb://localhost/users_test', {
				name,
				email,
				message
			})
			.then((res) => {
				console.log('Saved successfully');
				this.setState(this.clear);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	componentDidMount = () => {
		Aos.init({ duration: 2000 });
	};
	render() {
		return (
			<section className="contactBody">
				<h2> -------SAY HELLO------- </h2>
				<hr />

				<div className="cardFlex">
					<div data-aos="zoom-out" className="cardHoverContainer">
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

					<div data-aos="zoom-in">
						<form className="contactFormContainer" action="/reply" method="POST">
							<label> Name: </label>
							<input
								type="text"
								placeholder="Enter your name"
								onChange={this.handleChange}
								name="name"
								value={this.state.name}
							/>

							<label> Email Address: </label>
							<input
								type="text"
								placeholder="Enter your email"
								onChange={this.handleChange}
								name="email"
								value={this.state.email}
							/>

							<label> Message: </label>
							<input
								type="text"
								placeholder="What's your message"
								className="msgInput"
								onChange={this.handleChange}
								name="message"
								value={this.state.message}
							/>

							<button className="btn" onClick={this.handleSubmit}>
								Send
							</button>
						</form>
					</div>
				</div>
			</section>
		);
	}
}
export default ContactMe;
