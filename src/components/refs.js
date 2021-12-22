import  {createRef, PureComponent } from "react"
import RefsCom from "./refsCom"
export default class Refs extends PureComponent {
  constructor(props){
    super(props)
    this.titleRef = createRef()
    this.titleEl = null
    this.counterRef = createRef()
  }
  render() {
    return (
      <div>
        <h2 ref="title">String ref</h2>
        <h2 ref={this.titleRef}>hello Create Ref</h2>
        <h2 ref={element => this.titleEl=element}>callback Ref</h2>
        <button onClick={e=>this.changetext()}>改变文本</button>
        <RefsCom ref={this.counterRef}></RefsCom>
        <button onClick={e=>this.increment()}>ref count+1</button>
      </div>
    )
  }
  changetext() {
    this.refs.title.innerHTML="你好。"
    this.titleRef.current.innerHTML="你好"
    this.titleEl.innerHTML="(*´▽｀)ノノ"
  }
  increment() {
    this.counterRef.current.increment()
    
  }
}