import {PureComponent} from 'react'
export default class Counter extends PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      count:0
    }
  }
  render() {
    return (
      <div>
        <p>当前值：{this.state.count}</p>
        <button onClick={e=>this.increment()}>counter 组件+1</button>
      </div>
    )
  }
  increment(){
    this.setState({
      count:this.state.count+1
    })
  }
}