import React, { useEffect } from 'react';
import '../styles/Articles.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Articles = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<section className="articlesContainer" id="article">
			<center>
				<h3> ARTICLES</h3>
			</center>
			<hr />

			<div className="artCardContainer">
				<div data-aos="zoom-in" className="artCard">
					<div className="topFace">
						<div className="content">
							<center>
								<h3>The Starting Point..?</h3>
							</center>
						</div>
					</div>

					<div className="bottomFace">
						<div className="content">
							<p>
								{' '}
								This is the second article I ever wrote and it was on medium. This was after I was
								instructed to develop soft skills also as I'm developing my hard skills{' '}
							</p>
							<a href="https://medium.com/learnfactory-nigeria/the-starting-point-7f56f9a3a214">
								{' '}
								Read full Article{' '}
							</a>
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
								Another great article in my bags. This article is an intro into version control
								management systems. It entails the basics of git and github for developers especially
								junior devs.
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
								I wrote this article after learning it on css-tricks and it blew my mind. Reason being
								that a junior dev like me back then wanted to do a similar thing and we couldn't wrap
								our heads round it then until I learnt it and practiced it.
							</p>
							<a href="https://geek-js.hashnode.dev/how-to-blur-a-background-image-in-react">
								{' '}
								Read full Article{' '}
							</a>
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
								If one can learn a css trick in React, One should as well try it out in react-native and
								that was what led me to writing this amazing article.
							</p>
							<a href="https://dev.to/geekjs/how-to-blur-a-background-image-in-react-native-945">
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
								<h3> Building a simple React Modal </h3>
							</center>
						</div>
					</div>

					<div className="bottomFace">
						<div className="content">
							<p>
								One shouldn't really depend on alert pop ups for an amzing UI, instead try and design a
								sweet one that will make the user experience interacting and captivating. This
								user-interactivity gave birth to this article.
							</p>
							<a href="https://geek-js.hashnode.dev/building-a-simple-react-modal"> Read full Article </a>
						</div>
					</div>
				</div>

				<div data-aos="zoom-out" className="artCard">
					<div className="topFace">
						<div className="content">
							<center>
								<h3> Using React modals in React Native</h3>
							</center>
						</div>
					</div>

					<div className="bottomFace">
						<div className="content">
							<p>
								One thing I always try to do, If you can do it in React, why not try it in React Native
								also.
							</p>
							<a href="#"> Read full Article </a>
						</div>
					</div>
				</div>

				<div data-aos="zoom-out" className="artCard">
					<div className="topFace">
						<div className="content">
							<center>
								<h3>Googling your errors as a Junior Developer</h3>
							</center>
						</div>
					</div>

					<div className="bottomFace">
						<div className="content">
							<p>
								There is this misconception among junior developers about coding errors. When they
								encounter errors and bugs, they seem to get frustrated and think Oh! I'm not getting it,
								In this article I write about how I had such start and how Google became my friend...
							</p>
							<a href="https://geek-js.hashnode.dev/googling-your-errors-as-a-junior-developer">
								{' '}
								Read full Article{' '}
							</a>
						</div>
					</div>
				</div>

				<div data-aos="zoom-out" className="artCard">
					<div className="topFace">
						<div className="content">
							<center>
								<h3>Getting started with Tailwind css</h3>
							</center>
						</div>
					</div>

					<div className="bottomFace">
						<div className="content">
							<p>
								I didn't choose tailwind because it's better than bootstrap or Sass or other frameworks
								but maybe because I simply like the name... Read about getting started with this
								beautifu post css tool.
							</p>
							<a href="https://geek-js.hashnode.dev/getting-started-with-tailwind-css">
								{' '}
								Read full Article{' '}
							</a>
						</div>
					</div>
				</div>
			</div>

			<section className="mobile-view">
				<div>
					<h3>* The Starting Point..?</h3>
					<a href="https://medium.com/learnfactory-nigeria/the-starting-point-7f56f9a3a214">
						Read full Article
					</a>
				</div>

				<div>
					<h3>* What is Git and GitHub?</h3>
					<a href="https://medium.com/learnfactory-nigeria/what-is-git-and-github-9079bda61ec5">
						Read full Article
					</a>
				</div>

				<div>
					<h3>* How to blur a background image in React</h3>
					<a href="https://geek-js.hashnode.dev/how-to-blur-a-background-image-in-react">Read full Article</a>
				</div>

				<div>
					<h3>* How to blur a background image in ReactNative</h3>
					<a href="https://dev.to/geekjs/how-to-blur-a-background-image-in-react-native-945">
						Read full Article
					</a>
				</div>

				<div>
					<h3>* Building a simple React Modal </h3>
					<a href="https://geek-js.hashnode.dev/building-a-simple-react-modal"> Read full Article </a>
				</div>

				<div>
					<h3>* Googling your errors as a Junior Developer</h3>
					<a href="https://geek-js.hashnode.dev/googling-your-errors-as-a-junior-developer">
						Read full Article
					</a>
				</div>

				<div>
					<h3>* Getting started with Tailwind css</h3>
					<a href="https://geek-js.hashnode.dev/getting-started-with-tailwind-css"> Read full Article </a>
				</div>
			</section>
		</section>
	);
};
export default Articles;
