import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Developer"
    },
    show: false,
    mountedTime: new Date()
  };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000); // update every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt="Person" />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Component mounted {Math.round((new Date() - mountedTime) / 1000)} seconds ago.</p>
      </div>
    );
  }
}

export default App;

