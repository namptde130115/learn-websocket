import { IStateSkills, IActionSkills } from "./interface";
import types from "./types";

export const initialState = {
  loading: true,
  skills: [],
  page: 1,
  search: ''
};

const reducer = (state: IStateSkills, action: IActionSkills) => {
  switch (action.type) {
    case types.SET_DATA_SKILLS:
      return { 
        ...state, 
        skills: action.payload.pagedResult.items, 
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
