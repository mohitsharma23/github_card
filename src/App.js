import React, { Component } from "react";
import "./App.css";
import UserCard from "./UserCard";

class App extends Component {
  state = {
    username: "",
    name: "",
    followers: null,
    following: null,
    image: "",
    repo: null,
    msg: ""
  };

  handleChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleSubmit = e => {
    if (e.keyCode === 13) {
      let usernameVal = e.target.value;
      fetch(`https://api.github.com/users/${usernameVal}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            username: "",
            name: data.name,
            followers: data.followers,
            following: data.following,
            image: data.avatar_url,
            repo: data.public_repos,
            msg: data.message
          });
        });
    }
  };

  render() {
    let { username, name, followers, following, image, repo, msg } = this.state;
    return (
      <div className="App">
        <div className="App-container">
          <input
            type="text"
            placeholder="Enter username here"
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
            value={username}
            autoFocus
          />
          <UserCard
            name={name}
            followers={followers}
            following={following}
            repo={repo}
            image={image}
            message={msg}
          />
        </div>
      </div>
    );
  }
}

export default App;
