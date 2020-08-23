import axios from "axios";
import { GET_TOP_GIFS } from "./types";

export const getTopGifs = () => (dispatch, getState) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=24&rating=g`
    )
    .then((res) => {
      dispatch({
        type: GET_TOP_GIFS,
        payload: res.data.data,
      });
    })
    .catch((err) => console.log(err));
};
