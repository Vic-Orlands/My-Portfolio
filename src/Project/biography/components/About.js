import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/About.css";

class About extends Component {
  render() {
    return (
      <main className="about">
        <Header />
        <center>
          <h1> ABOUT ME </h1>
          <hr />
        </center>
        <div className="aboutContainer">
          <p>
            My name is Innocent Chimezie Victor, born on the 11th of march am
            the 3rd son and the 4th child of the Innocent’s family. I hail from
            idemili-north l.g.a in Anambra State. Am a 400level student of
            Information Management Technology in Federal University of
            Technology, Owerri, Imo State. Am esoterically an introvert by
            nature and am not a wide lover of things but I cherish watching
            movies, listening to musics and of course sleeping well not until I
            started my Coding journey. Well, since I was young I loved working
            with computers maybe because of the things (hackings, cloud
            security, robotics, to say the least) I saw in movies but it cleared
            my path to what I wanted to become when I grew up and so my
            enthusiastic desire matured and I decided to study Information
            Technology. My experience so far transcends beyond mere words and
            can only be explained a little through my codes(HTML, CSS, and my
            love JAVASCRIPT) but in the course of this journey, I have come to
            acquire other virtues and character-traits which I will highlight a
            few.
            <br />
            1. Collaboration not Competition. <br />
            2. Write Articles as you Code. <br />
            3. Be a master of the craft. <br />
            4. Public Speaking. <br /> 5. Love your neighbour unconditionally.
          </p>
        </div>

        <Footer />
      </main>
    );
  }
}
export default About;
