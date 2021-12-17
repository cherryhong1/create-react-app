import React, { Component } from "react";
import TabControl from "./TabControl";

export default class TabList extends Component {
  constructor() {
    super();
    this.title = ["流行", "新款", "精选"];
    this.state = {
      cur: "流行",
    };
  }
  render() {
    return (
      <div>
        <TabControl title={this.title} itemClick={index=>this.itemClick(index)}></TabControl>
        <h2>{this.state.cur}</h2>
      </div>
    );
  }
  itemClick(index) {
    this.setState({
      cur: this.title[index]
    });
  }
}
