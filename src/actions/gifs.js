import axios from "axios";
import { GET_TOP_GIFS, SEARCH_GIFS, GIF_FILTER_CHANGE } from "./types";

const API_KEY = `${process.env.REACT_APP_GIPHY_API_KEY}`;

export const getTopGifs = () => (dispatch, getState) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=24&rating=g`
    )
    .then((res) => {
      dispatch({
        type: GET_TOP_GIFS,
        payload: res.data.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getGifs = (searchParam) => (dispatch, getState) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?q=${searchParam}&api_key=${API_KEY}&limit=24`
    )
    .then((res) => {
      dispatch({
        type: SEARCH_GIFS,
        payload: res.data.data,
      });
    })
    .catch((err) => console.log(err));
};

export const changeFilter = (newFilter) => {
  return {
    type: GIF_FILTER_CHANGE,
    searchParam: newFilter,
  };
};
