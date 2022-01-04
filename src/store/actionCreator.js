import {INCREMENT,DECREMENT,ADD_NUMBER,CHANGE_BANNER,
  CHANGE_RECOMMEND,} from "../constants"
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
const changeBannersAction=(banners)=>({
  type:CHANGE_BANNER,
  banners
})
const changeRecommendsAction=(banners)=>({
  type:CHANGE_RECOMMEND,
  banners
})
export  {
  incrementAction,
  decrementAction,
  addNumberAction,
  changeBannersAction,
  changeRecommendsAction
}