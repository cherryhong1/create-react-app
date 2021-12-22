import { createRef } from "react";
import { PureComponent } from "react/cjs/react.production.min";
export default class Form3 extends PureComponent{
  constructor(props){
    super(props)
     this.usernameRef = createRef()
    //  this.passwordRef = createRef()
  }
  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <label>
            用户名
            <input defaultValue="username" type="text" name="username" ref={this.usernameRef}/>
          </label>
          {/* <label>
            用户名
            <input id="password" defaultValue="password" name="password" ref={this.passwordRef} ></input>
          </label> */}
          <input type="submit" value="提交"></input>
        </form>
      </div>
    )
  }
  handleSubmit(e) {
    e.preventDefault();
    
    console.log(this.usernameRef.current.value)
    // console.log(this.passwordRef.current.value)
  }
}

