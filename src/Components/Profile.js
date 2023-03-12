import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 5,
    };
    // console.log("second child contructor called");
  }

  componentDidMount() {
    // console.log("second child mounted...")
    // this.timer = setInterval(()=>{
    //     console.log("mounting time..");
    // },1000)
  }
  componentDidUpdate(prevProps, prevState) {
    // using this prevProps and prevState we can compare new data to old data which we can manipulate in many things.
    if (this.state.num !== prevState.num || this.state.num !== prevState.num) {
      const clear = clearInterval(this.timer);
      // console.log("updated..")
    }
  }
  componentWillUnmount() {
    const clear = clearInterval(this.timer);
    // console.log("componentWillUnmount");
  }
  render() {
    // console.log("second child rendered..")
    return (
      <>
        <div>
          <h2> function based Profile Component....</h2>
          <h3>Name: {this.props.name}</h3>
          <h3>Lucky Number: {this.state.num}</h3>
          <button
            onClick={() => {
              this.setState({
                num: this.state.num + 1,
              });
            }}
          >
            click me
          </button>
        </div>
      </>
    );
  }
}

export default Profile;
