import React, { Component } from 'react';

class Test extends Component {
	render() {
		return (
			// <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
			// 	<ul className="navbar-nav">
			// 		<li className="nav-item">
			// 			<a className="nav-link active" href="#">
			// 				Home
			// 			</a>
			// 		</li>
			// 		<li className="nav-item dropdown">
			// 			<a className="navbar-brand" href="#">
			// 				Projects
			// 			</a>
			// 		</li>
			// 		<li className="nav-item">
			// 			<a className="nav-link" href="#">
			// 				Articles
			// 			</a>
			// 		</li>
			// 		<li className="nav-item">
			// 			<a className="nav-link" href="#">
			// 				Home
			// 			</a>
			// 		</li>
			// 	</ul>
			// </nav>

			<nav class="navbar navbar-expand-md bg-dark navbar-dark">
				{/* <!-- Brand --> */}
				<a class="navbar-brand" href="#">
					Navbar
				</a>

				{/* <!-- Toggler/collapsibe Button --> */}
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
					<span class="navbar-toggler-icon" />
				</button>

				{/* <!-- Navbar links --> */}
				<div class="collapse navbar-collapse  justify-content-end" id="collapsibleNavbar">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" href="#">
								Link
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Link
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Link
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default Test;
