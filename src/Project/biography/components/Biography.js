import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Biography.css";

class Biography extends Component {
  render() {
    return (
      <body>
        <div className="bioBody">
          <Header />

          <h1>WELCOME TO MY PORTFOLIO PAGE</h1>
          <center>
            <hr />
          </center>

          <fieldset>
            <center>
              <p>
                I am Innocent Chimezie Victor, known to different people with
                different names but in all,
                <br /> I prefer being called Vic Orlands because it kind of
                defines me well and yes <br /> am good at what i do.
                <br />I am a front-end software developer delving into back-end, a mobile developer, a
                Volunteer, a Tech enthusiast,
                <br /> I love writing poems and tech articles, am a photographer
                but above all, Am a child of God.
                <br />
                I write Javascript, Reactjs, React-Native, GraphQL, Node, Express, good with Git and GitHub version control
                system and also uses project management boards occassionally.
                <br />
                <br />
                Feel free to surf through my page.
              </p>
            </center>
          </fieldset>

        </div>

        <Footer />
      </body>
    );
  }
}
export default Biography;
