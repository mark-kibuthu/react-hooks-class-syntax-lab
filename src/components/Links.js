import React, { Component } from "react";

class Links extends Component {
  render() {
    const { github, linkedin } = this.props;
    return (
      <div>
        <h3>Links</h3>
        <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a>
      </div>
    );
  }
}

export default Links;
