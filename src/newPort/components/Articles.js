import React, { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import '../styles/Articles.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Articles = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<section className="articlesContainer">
			<center>
				<h3> -------ARTICLES-------</h3>
			</center>
			<hr />

			<div className="artCardContainer">
				<div data-aos="zoom-in" className="artCard">
					<div className="topFace">
						<div className="content">
							<center>
								<img src="" alt="img" />
								<h3>The Starting Point..?</h3>
							</center>
						</div>
					</div>

					<div className="bottomFace">
						<div className="content">
							<p>
								{' '}
								This is the second article I ever wrote and it was on github. This was after I was
								instructed to develop soft skills as i'm developing my hard skills{' '}
							</p>
							<a href="#"> Read full Article </a>
						</div>
					</div>
				</div>

				<div data-aos="zoom-out" className="artCard">
					<div className="topFace">
						<div className="content">
							<center>
								<img src={require('../assets/git.webp')} alt="img" />
								<h3>What is Git and GitHub?</h3>
							</center>
						</div>
					</div>

					<div className="bottomFace">
						<div className="content">
							<p>
								{' '}
								This is the second article I ever wrote and it was on github. This was after I was
								instructed to develop soft skills as i'm developing my hard skills{' '}
							</p>
							<a href="https://medium.com/learnfactory-nigeria/what-is-git-and-github-9079bda61ec5">
								{' '}
								Read full Article{' '}
							</a>
						</div>
					</div>
				</div>

				<div data-aos="zoom-in" className="artCard">
					<div className="topFace">
						<div className="content">
							<center>
								<img src={require('../assets/reactBlur.webp')} alt="img" />
								<h3 style={{ fontSize: '15.5px' }}>How to blur a background image in React</h3>
							</center>
						</div>
					</div>

					<div className="bottomFace">
						<div className="content">
							<p>
								{' '}
								This is the second article I ever wrote and it was on github. This was after I was
								instructed to develop soft skills as i'm developing my hard skills{' '}
							</p>
							<a href="#"> Read full Article </a>
						</div>
					</div>
				</div>

				<div data-aos="zoom-out" className="artCard">
					<div className="topFace">
						<div className="content">
							<center>
								<img src={require('../assets/react-native.jpg')} alt="img" />
								<h3 style={{ fontSize: '15.5px' }}>How to blur a background image in ReactNative</h3>
							</center>
						</div>
					</div>

					<div className="bottomFace">
						<div className="content">
							<p>
								{' '}
								This is the second article I ever wrote and it was on github. This was after I was
								instructed to develop soft skills as i'm developing my hard skills{' '}
							</p>
							<a href="#"> Read full Article </a>
						</div>
					</div>
				</div>

				<div data-aos="zoom-in" className="artCard">
					<div className="topFace">
						<div className="content">
							<center>
								<img src="" alt="img" />
								<h3> Using React modals </h3>
							</center>
						</div>
					</div>

					<div className="bottomFace">
						<div className="content">
							<p>
								{' '}
								This is the second article I ever wrote and it was on github. This was after I was
								instructed to develop soft skills as i'm developing my hard skills{' '}
							</p>
							<a href="#"> Read full Article </a>
						</div>
					</div>
				</div>

				<div data-aos="zoom-out" className="artCard">
					<div className="topFace">
						<div className="content">
							<center>
								<img src="" alt="img" />
								<h3> Using React modals in ReactNative</h3>
							</center>
						</div>
					</div>

					<div className="bottomFace">
						<div className="content">
							<p>
								{' '}
								This is the second article I ever wrote and it was on github. This was after I was
								instructed to develop soft skills as i'm developing my hard skills{' '}
							</p>
							<a href="#"> Read full Article </a>
						</div>
					</div>
				</div>
			</div>

			<footer>
				<center>
					<h4>
						{' '}
						Developed with <FaHeart className="artFont" /> by Vic Orlands{' '}
					</h4>
				</center>
			</footer>
		</section>
	);
};
export default Articles;
