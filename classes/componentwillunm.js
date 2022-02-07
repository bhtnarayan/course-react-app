import React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delHeader = () => {
    this.setState({ show: false });
  };

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }

    return (
      <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named header is about to be unmounted.");
  }

  render() {
    return <h2>Hello world</h2>;
  }
}

export default Container;
