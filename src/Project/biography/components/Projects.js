import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projectBody">
      <Header />

      <div className="projectBounce">
        <h1> Awesome Projects </h1>
        <h5>
          Below details few projects that I have worked on, some with awesome
          teammates{" "}
        </h5>
      </div>

      <div className="projectFiles">
        <div>
          <h3>PROJECTS</h3>
          <hr />
          <p> A Todo App </p>
          <p>A fully functional School Management App </p>
          <p> A real-time movie search App </p>
          <p> A real-time world news website </p>
          <p>
            A Lifescore App that displays matches played or to be played with
            their match-times and scores.
          </p>
          <p>Geo-Search-a website that shows you the weather condition, map and images of any place in the world</p>
          <h6>
            {" "}
            <b>Tech:</b> React, HTML5, CSS3, Javascript, Git and GitHub, GitHub Pages,
            Netlify, GitHub Project Management Board.
          </h6>
        </div>

        <div>
          <h3>COMMUNITY SERVICES</h3>
          <hr />
          <p>
            {" "}
            Taught Scratch to Secondary Schools under the administration of
            LearnFactory Nigeria.
          </p>
          <p>
            {" "}
            Taught teenagers and Secondary School teachers how to be Safer
            Online, a Google programme still under the above administration.
          </p>
        </div>

        <div>
          <h3>ARTICLES</h3>
          <hr />
          <p>The Starting Point...</p>
          <p>What is Git and GitHub?</p>
          <h6>
            <b>URL:</b>
              <a href="https://medium.com/learnfactory-nigeria/what-is-git-and-github-9079bda61ec5">
                https://medium.com/learnfactory-nigeria/what-is-git-and-github-9079bda61ec5
              </a>
          </h6>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Projects;
