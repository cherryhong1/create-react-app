import React, {Component} from "react";
export default class NavList extends Component{
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="nav-list">
        <div className="tab left">{this.props.children[0]}</div>
        <div className="tab center">{this.props.children[1]}</div>
        <div className="tab right">{this.props.children[2]}</div>
      </div>
    )
  }
}