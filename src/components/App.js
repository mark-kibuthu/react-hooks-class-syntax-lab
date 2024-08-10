import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links"; 
import user from "../data/user";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home id="home" username={user.name} city={user.city} color={user.color} />
        <About id="about" bio={user.bio} links={user.links} />
       
        <Links github={user.links.github} linkedin={user.links.linkedin} />
      </div>
    );
  }
}

export default App;
