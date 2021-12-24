import React, { forwardRef, PureComponent } from "react";
import { createRef } from "react/cjs/react.development";
const Home =forwardRef(function (props,ref) {
  return (
    <div>
      <h2 ref={ref}>Home</h2>
      <button>按钮</button>
    </div>
  );
}) 
export default class forword extends PureComponent {
  constructor(props) {
    super(props)
    this.homeRef = createRef()
  }
  render() {
    return <div>
      <Home ref={this.homeRef}></Home>
      <button onClick={e=>this.print()}>print</button>
    </div>;
  }
  print() {
    console.log(this.homeRef.current)
  }
}
