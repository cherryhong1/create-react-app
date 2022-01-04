import {
  INCREMENT,
  DECREMENT,
  ADD_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND,
} from "../constants";
const initialState = {
  counter: 0,
  banners: [],
  recommends: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + payload.number };
    case CHANGE_BANNER:
      return { ...state, banners: payload.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: payload.recommends };
    default:
      return state;
  }
};
export default reducer;
