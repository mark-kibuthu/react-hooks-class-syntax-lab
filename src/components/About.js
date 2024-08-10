import React, { Component } from "react";

class About extends Component {
  render() {
    const { bio, links, id } = this.props;
    return (
      <div id={id}>
        {bio && bio.trim() !== "" && <p>{bio}</p>}
      </div>
    );
  }
}

export default About;
