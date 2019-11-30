import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import image from "../assets/victor.JPG";
import "../styles/Contact.css";

const axios = require('axios');

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  }
  clear = {
    name: "",
      email: "",
      message: ""
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    }
    )
  }

  handleSubmit = e => {
    e.preventDefault();
    const {name, email, message} = this.state
    axios.post("http://localhost:4001/feedBack", {
      name,
      email,
      message
    })
    .then(res => {
      console.log('Saved successfully')
      this.setState(this.clear)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <main className="formBody">
        <Header />

        <div className="form">
          <img src={image} alt="Vic Orlands" />


          <form>
            <h2> SAY HELLO </h2>

            <div className="hi">
              <label>
                <input onChange={this.handleChange} name="name" value={this.state.name} type="text" method="POST" placeholder="NAME"  />
              </label>
              <br />

              <label>
                <input onChange={this.handleChange} name="email" value={this.state.email} type="text" method="POST" placeholder="EMAIL" />
              </label>
              <br />

              <label>
                <input onChange={this.handleChange} name="message" value={this.state.message} type="text" method="POST" placeholder="MESSAGE" />
              </label>
              <br />

              <button onClick={this.handleSubmit}> SEND </button>
            </div>
          </form>
        </div>

        <Footer />
      </main>
    );
  }
}
export default Contact;
