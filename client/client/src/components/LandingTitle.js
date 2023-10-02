import React, { Component } from "react";

const TITLES = [
  "Create your NetWeave profile and connect with other developers",
  "NetWeave is the website to connect engineers",
  "Build a professional network with other developers",
];

class LandingTitle extends Component {
  constructor() {
    super();

    this.state = { titleIndex: 0, fadeIn: true };
  }

  componentDidMount() {
    console.log("inside didMount");
    this.animateTitles();
    this.timeout = setTimeout(() => {
      this.setState({ fadeIn: false });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles() {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex, fadeIn: true });
      this.timeout = setTimeout(() => {
        this.setState({ fadeIn: false });
      }, 2000);
    }, 4000);
  }

  render() {
    return (
      <p className={this.state.fadeIn ? "title-fade-in" : "title-fade-out"}>
         {TITLES[this.state.titleIndex]}
      </p>
    );
  }
}

export default LandingTitle;
