import {INCREMENT,DECREMENT,ADD_NUMBER} from "../constants"
 const incrementAction =()=>({
  type:INCREMENT
})
 const decrementAction = ()=>({
  type:DECREMENT
})
 const addNumberAction=(number)=>({
  type:ADD_NUMBER,
  number
})
export  {
  incrementAction,
  decrementAction,
  addNumberAction
}