import {INCREMENT,DECREMENT,ADD_NUMBER} from "../constants"
export const incrementAction =()=>({
  type:INCREMENT
})
export const decrementAction = ()=>({
  type:DECREMENT
})
export const addNumberAction=(number)=>({
  type:ADD_NUMBER,
  number:10
})