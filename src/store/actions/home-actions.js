import { ActionTypes } from "../../constant/action-type";

export const fetchShows = (showName) => ({
    type: ActionTypes.FETCH_SHOWS_REQUEST,
    payload: showName
});

export const searchShows = (searchText) => ({
    type: ActionTypes.FETCH_SHOWS_NAMES_REQUEST,
    payload: searchText
});

export const favoriteShow = (showId) => ({
    type: ActionTypes.FAVORITE_SHOW,
    payload: showId
});