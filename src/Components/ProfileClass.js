import React from "react";
import { github_api_URL } from "../Config";

class ProfileClass extends React.Component {
  constructor(props) {
    // constructor method is not mandatory but we use this for initializing the state or binding eventHandler method.
    super(props); //  inside constructor firstly, super function calling mandatory because super function through we can inherit some properties of parent constructor.
    this.state = {
      count: 0,
      userInfo: {
        name: "",
        id: 0,
        bio: "",
        avatar_url: "",
      },
    };
    // console.log("first child constructor called...");
  }

  async componentDidMount() {
    // This componentDidMount will call after the parent componentDidMount called because this is aysnc method.
    const data = await fetch(github_api_URL); // API CALL
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });

    // console.log("first child mounted...");
  }

  componentDidUpdate() {
    // It will run after the updation something
    // console.log("Updated...");
  }
  componentWillUnmount() {
    // It will run before the unmouting or before the moving any another page.
    // console.log("component will unmount....");
  }

  render() {
    //  only render method is mandatory in class-based-component and It will call once and after every updation.
    // console.log("first child render called..");
    return (
      <div>
        <h2>Class based ProfileClass Component....{this.props.xyz}</h2>
        <h3>Name: {this.state.userInfo?.name}</h3>
        <h4>Id: {this.state.userInfo?.id}</h4>
        <h4>Bio: {this.state.userInfo?.bio}</h4>
        <img src={this.state.userInfo?.avatar_url} alt="" />
        <h4>count: {this.state.userInfo?.count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this?.state?.count + 1, // we can increment count like this
            });
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default ProfileClass;
