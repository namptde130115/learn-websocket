import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useMemo,
    useReducer,
  } from "react";
  import ThemeApi from "../../../../api/theme-api";
  import { IContextThemes } from "./interface";
  import reducer, { initialState } from "./reducer";
  import types from "./types";
  
  const initalContext = {
    state: initialState,
    dispatch: () => null,
    fetchDataCallback: () => null,
  };
  
  const ThemesContext = createContext<IContextThemes>(initalContext);
  
  interface Props {
    children: ReactNode;
  }
  
  const ThemesContextProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  
    return (
      <ThemesContext.Provider value={value}>{children}</ThemesContext.Provider>
    );
  };
  
  export const useThemesContext = () => {
    const value = useContext(ThemesContext);
  
    const { state, dispatch } = value;
  
    const changeTextSearch = (text: string) => {
      dispatch({
        type: types.CHANGE_TEXT_SEARCH,
        payload: text,
      });
    };
  
    const changePagination = ({
      page,
      pageSize,
    } : {
      page: number;
      pageSize: number;
    }) => {
      dispatch({
        type: types.CHANGE_PAGINATION,
        payload: { page, pageSize },
      });
    };

    const deleteTheme= async (hostId: string) => {
      const result = await ThemeApi.deleteTheme(hostId)
      dispatch({
        type: types.SET_LOADING
      })
      return result;
    }
  
    const fetchDataCallback = async ({
      pageSize = 20,
      page = 1,
      search = '',
    }: {
      pageSize: number,
      page: number,
      search: string
    }) => {
      const response = await ThemeApi.search({
        pageSize,
        page,
        search,
      })
        .then((response: any) => {
          console.log('response', response);
          if (response.status === 200) {
            return response;
          } else {
            return {};
          }
        })
        .catch(() => {});
      
      dispatch({
        type: types.SET_DATA_THEMES,
        payload: (response && response.data) || [],
      });
  
      return response;
    };
    return {
      ...state,
      deleteTheme,
      changeTextSearch,
      changePagination,
      fetchDataCallback,
    };
  };
  
  export default ThemesContextProvider;
  