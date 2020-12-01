import React, { Component } from 'react';
import ContactRobo from '../assets/contact.svg';
import '../styles/Contact.css';

import { FaTwitter, FaLinkedin, FaGithub, FaDev, FaPhoneAlt } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { IoIosSend, IoIosHand } from 'react-icons/io';
import { SiHashnode } from 'react-icons/si';

class Contact extends Component {
	render() {
		return (
			<section className="contact" id="contact">
				<section className="leftSide">
					<h2>Let's get in touch</h2>
					<h5>I am open for any suggestion or just to have a chat</h5>

					<ul className="fonts">
						<li>
							<ImLocation id="font" />
							<b>Address:</b> Abia, Nigeria.
						</li>

						<li>
							<FaPhoneAlt id="font" />
							<b>Phone:</b> +2348051215760
						</li>
						<li>
							<IoIosSend id="font" />
							<b>Email:</b> chimezieinnocent39@gmail.com
						</li>
						<li>
							<a href="https://twitter.com/Vic_Orlands">
								<FaTwitter id="font" />
							</a>
							Geek (@Vic_Orlands)
						</li>

						<li>
							<a href="https://www.linkedin.com/in/victor-innocent/">
								<FaLinkedin id="font" />
							</a>
							Victor Innocent
						</li>

						<li>
							<a href="https://github.com/Vic-Orlands">
								<FaGithub id="font" />
							</a>
							Vic-Orlands
						</li>
						<li>
							<FaDev id="font" />
							<a href="https://dev.to/geekjs">
								<img
									src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
									alt="Vic-Orlands's DEV Profile"
									height="30"
									width="30"
									style={{ marginRight: 6 }}
								/>
							</a>
							Vic-Orlands
						</li>
						<li>
							<a href="https://hashnode.com/@Orlands">
								<SiHashnode id="font" />
							</a>
							Orlands
						</li>
					</ul>
				</section>

				<section className="rightSide">
					<object type="image/svg+xml" data={ContactRobo}>
						svg-animation
					</object>
					<center>
						<p>
							<i>
								Caio <IoIosHand id="handFont" />{' '}
							</i>
						</p>
					</center>
				</section>
			</section>
		);
	}
}
export default Contact;
