import { IStateHackathons, IActionHackathons } from "./interface";
import types from "./types";

export const initialState = {
  loading: true,
  hackathons: [],
  page: 1,
  search: '',
  status: []
};

const reducer = (state: IStateHackathons, action: IActionHackathons) => {
  switch (action.type) {
    case types.SET_DATA_HACKATHONS:
      return { 
        ...state, 
        hackathons: action.payload.pagedResult.items, 
        page: action.payload.pagedResult.page,
        pageSize: action.payload.pagedResult.pageSize,
        totalItems: action.payload.pagedResult.totalItems,
        loading: false
      };
    case types.CHANGE_TEXT_SEARCH:
      return { 
        ...state, 
        page: 1, 
        search: action.payload,
        loading: true,
      };
    case types.CHANGE_PAGINATION:
      console.log('action.payload', action.payload)
      return { 
        ...state, 
        ...action.payload,         
        loading: true,
      };
    case types.CHANGE_FILTER:
      return { 
        ...state, 
        ...action.payload,         
        loading: true,
      };
    case types.SET_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default reducer;
