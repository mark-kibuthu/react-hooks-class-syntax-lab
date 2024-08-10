import React, { Component } from "react";

class Home extends Component {
  render() {
    const { username, city, color } = this.props;
    return (
      <h1 style={{ color }} id={this.props.id}>
        {username} is a Web Developer from {city}
      </h1>
    );
  }
}

export default Home;
