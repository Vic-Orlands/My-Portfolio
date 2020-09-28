import React, { Component } from 'react';
import ContactRobo from '../assets/contact.svg';
import '../styles/Contact.css';

import { FaTwitter, FaLinkedin, FaGithub, FaDev, FaMedium, FaPhoneAlt } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { IoIosSend, IoIosHand } from 'react-icons/io';

class Contact extends Component {
	render() {
		return (
			<section className="contact">
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
							<FaTwitter id="font" />
							Political Developer (@Vic_Orlands)
						</li>

						<li>
							<FaLinkedin id="font" />
							Victor Innocent
						</li>

						<li>
							<FaGithub id="font" />
							Vic-Orlands
						</li>
						<li>
							<FaDev id="font" />
							Vic-Orlands
						</li>
						<li>
							<FaMedium id="font" />
							Vic-Orlands
						</li>
					</ul>
				</section>

				<section className="rightSide">
					<object type="image/svg+xml" data={ContactRobo}>
						svg-animation
					</object>
					<center>
						<p><i>Caio <IoIosHand id="handFont" /> </i></p>
					</center>
				</section>
			</section>
		);
	}
}
export default Contact;
