import { ActionTypes } from "../../constant/action-type";


const INITIAL_STATE = {
    shows:[],
    loadingShows: false,
    loadingOptions: false,
    errorShows: null,
    errorOptions: null,
    showsOptions:[]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ActionTypes.FETCH_SHOWS_REQUEST:
                return {...state, loadingShows: true, error:null};
        case ActionTypes.FETCH_SHOWS_SUCCESS:
                return {...state, shows: action.shows, loadingShows: false, errorShows:null};
        case ActionTypes.FETCH_SHOWS_FAIL:
                return {...state, error: action.message, loadingShows: false};
        case ActionTypes.FETCH_SHOWS_NAMES_REQUEST:
                return {...state, loadingShowsOptions: true, errorOptions:null};
        case ActionTypes.FETCH_SHOWS_NAMES_SUCCESS:
                return {...state, showsOptions: action.showsOptions, loadingShowsOptions: false, errorOptions:null};
        case ActionTypes.FETCH_SHOWS_NAMES_FAIL:
                return {...state, errorOptions: action.message, loadingShowsOptions: false};
        case ActionTypes.FAVORITE_SHOW:
                const newShows = state.shows.map(show => {
                  // This isn't the show we care about - keep it as-is
                  if (show.id !== action.payload) {
                    return show
                  }
                
                  // Otherwise, this is the show we want - return an updated value with favorite
                  return {
                    ...show,
                    isFavorite: true
                  }
                })
                return {...state, shows: newShows};
       default:
            return {...state}
    }
}