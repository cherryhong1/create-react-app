import React, { PureComponent } from 'react'
import store from "../store"
import axios from 'axios'
import { connect } from 'react-redux'
import {incrementAction,addNumberAction,  changeBannersAction,
  changeRecommendsAction} from "../store/actionCreator"
class homeStore extends PureComponent {
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
    axios.get("http://123.207.32.32:8000/home/multidata").then(res=>{
      const data = res.data.data
      this.props.changeBanners (data.banner.list)
      this.props.changeRecommends(data.recommend.list)
    })
   }
  render() {
    return (
      <div>
        <h4>redux的实际应用{this.state.counter}</h4>
        <button onClick={e=>this.increment()}>counter+1</button>
        <button onClick={e=>this.addNumber(5)}>counter+5</button>
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
const mapStateToProps = state=>{
  return {
    counter:state.counter
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    addNumber:function(number){
      dispatch(addNumberAction(number))
    },
    changeBanners(banners){
      dispatch(changeBannersAction(banners))
    },
    changeRecommends(recommends){
      dispatch(changeRecommendsAction(recommends))
    }
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(homeStore)