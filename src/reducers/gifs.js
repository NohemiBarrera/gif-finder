import { GET_TOP_GIFS, SEARCH_GIFS, GIF_FILTER_CHANGE } from "../actions/types.js";

const initialState = {
	topGifs: [],
	gifsFound: [],
	searchParam: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOP_GIFS:
      return {
        ...state,
        topGifs: action.payload
			};
		case SEARCH_GIFS:
			return {
				...state,
				gifsFound: action.payload,
			};
		case GIF_FILTER_CHANGE:
			return {
        ...state,
				searchParam: action.searchParam,
				gifsFound: []
      };
    default:
      return state;
  }
}
