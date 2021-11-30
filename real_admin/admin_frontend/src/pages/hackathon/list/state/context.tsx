import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useMemo,
    useReducer,
  } from "react";
  import Api from "../../../../api/hackathon-api";
  import { IContextHackathons } from "./interface";
  import reducer, { initialState } from "./reducer";
  import types from "./types";
  
  const initalContext = {
    state: initialState,
    dispatch: () => null,
    fetchDataCallback: () => null,
  };
  
  const HackathonsContext = createContext<IContextHackathons>(initalContext);
  
  interface Props {
    children: ReactNode;
  }
  
  const HackathonsContextProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  
    return (
      <HackathonsContext.Provider value={value}>{children}</HackathonsContext.Provider>
    );
  };
  
  export const useHackathonsContext = () => {
    const value = useContext(HackathonsContext);
  
    const { state, dispatch } = value;
  
    const changeTextSearch = (text: string) => {
      dispatch({
        type: types.CHANGE_TEXT_SEARCH,
        payload: text,
      });
    };

    const changeFilter = ({
      status
    } : {
      status: any
    }) => {
      dispatch({
        type: types.CHANGE_FILTER,
        payload: { status }
      }) 
    }
  
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
  
    const fetchDataCallback = async ({
      pageSize = 20,
      page = 1,
      search = '',
      status = []
    }: {
      pageSize: number,
      page: number,
      search: string,
      status: any,
    }) => {
      const response = await Api.search({
        pageSize,
        page,
        search,
        status,
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
        type: types.SET_DATA_HACKATHONS,
        payload: (response && response.data) || [],
      });
  
      return response;
    };
    return {
      ...state,
      changeTextSearch,
      changePagination,
      fetchDataCallback,
      changeFilter,
    };
  };
  
  export default HackathonsContextProvider;
  