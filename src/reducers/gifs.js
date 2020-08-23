import { GET_TOP_GIFS } from "../actions/types.js";

const initialState = {
  topGifs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOP_GIFS:
      return {
        ...state,
        topGifs: action.payload,
      };
    default:
      return state;
  }
}
