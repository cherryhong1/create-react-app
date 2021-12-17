import React,{Component} from "react";
export default class Navlist extends Component{
  render() {
    const {leftSlot,centerSlot, rightSlot} = this.props
    return (
      <div className="nav-list">
        <div className="nav left">{leftSlot}</div>
        <div className="nav center">{centerSlot}</div>
        <div className="nav right">{rightSlot}</div>
      </div>
   )

  }
}