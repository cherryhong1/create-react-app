import redux from "redux"
const initialState = {
  counter:0
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case 'INCREMENT':
    return { ...state,counter:state.counter+1 }
  case 'DECREMENT':
    return {...state,counter:state.counter-1}
    case 'ADD_NUMBER':
    return {...state,counter:state.counter+payload}
  default:
    return state
  }
}

const store = redux.createStore(reducer)

store.subscribe(()=>{
  console.log(store.getState())
})
store.dispatch({
  type:'INCREMENT'
})
store.dispatch({
  type:'DECREMENT'
})
store.dispatch({
  dispatch:'ADD_NUMBER',
  number:5
})