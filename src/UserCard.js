import React, { Component } from "react";
import "./UserCard.css";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      followers: null,
      following: null,
      image: "",
      repo: null,
      msg: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) {
      this.setState({
        name: nextProps.name,
        followers: nextProps.followers,
        following: nextProps.following,
        image: nextProps.image,
        repo: nextProps.repo,
        msg: nextProps.message
      });
    }
  }

  render() {
    let { name, followers, following, image, repo, msg } = this.state;
    if (msg === "Not Found")
      return (
        <div className="MainCard">
          <div className="gitInfo">
            <p>
              <strong>Oops!</strong> We could not find what you are looking for.
              Please check whether the username is correct.
            </p>
          </div>
        </div>
      );
    else if (msg === "")
      return (
        <div className="MainCard">
          <div className="gitInfo">
            <p>
              Enter Github username in the search box to get info about the
              user.
            </p>
          </div>
        </div>
      );
    else
      return (
        <div className="MainCard">
          <div className="gitProfile">
            <h4>{name}</h4>
            <img
              src={image}
              height="70px"
              width="70px"
              alt="userProfileImage"
            />
          </div>
          <div className="gitInfo">
            <div>
              <i className="fa fa-users" />
              <span>{followers}</span>
              <span>Followers</span>
            </div>
            <div>
              <i className="fa fa-folder-open" />
              <span>{repo}</span>
              <span>Repositories</span>
            </div>
            <div>
              <i className="fa fa-user" />
              <span>{following}</span>
              <span>Following</span>
            </div>
          </div>
        </div>
      );
  }
}

export default UserCard;
