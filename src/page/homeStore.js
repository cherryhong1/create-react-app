import React, { PureComponent } from 'react'
import store from "../store"
import {incrementAction,addNumberAction} from "../store/actionCreator"
export default class homeStore extends PureComponent {
   constructor(){
     super()
     this.state={
      counter:store.getState().counter
     }
   }
   componentDidMount(){
    store.subscribe(()=>{
      this.setState({
        counter:store.getState().counter
      })
    })
   }
  render() {
    return (
      <div>
        <h4>redux的实际应用{this.state.counter}</h4>
        <button onClick={e=>this.increment()}>counter+1</button>
        <button onClick={e=>this.addNumber()}>counter+5</button>
      </div>
    )
  }
  increment() {
    store.dispatch(incrementAction)
  }
  addNumber(){
    store.dispatch(addNumberAction(5))
  }
}

