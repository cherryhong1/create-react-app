import React, { Component } from "react";
class HYTestCom extends Component {
  render() {
    return <h3>我是 HYTestCom</h3>;
  }
  componentWillUnmount() {
    console.log("HYTestCom componentWillUnmount");
  }
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello World",
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <h3>{this.state.count}</h3>
        {this.state.count<5&&<HYTestCom/>}
        <button onClick={e=>this.increaseCount()}>count+1</button>
      </div>
    );
  }
  increaseCount() {
    this.setState({
      count:this.state.count+1
    })
  }
  componentDidMount() {
    console.log(this.state.count)
  }
  componentDidUpdate() {
    console.log(this.state.count)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}
