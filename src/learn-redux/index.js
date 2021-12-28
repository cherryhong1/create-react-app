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

