import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useMemo,
    useReducer,
  } from "react";
import hostApi from "../../../../api/host-api";
  import HostApi from "../../../../api/host-api";
  import { IContextHosts } from "./interface";
  import reducer, { initialState } from "./reducer";
  import types from "./types";
  
  const initalContext = {
    state: initialState,
    dispatch: () => null,
    fetchDataCallback: () => null,
  };
  
  const HostsContext = createContext<IContextHosts>(initalContext);
  
  interface Props {
    children: ReactNode;
  }
  
  const HostsContextProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  
    return (
      <HostsContext.Provider value={value}>{children}</HostsContext.Provider>
    );
  };
  
  export const useHostsContext = () => {
    const value = useContext(HostsContext);
  
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

    const deleteHost = async (hostId: string) => {
      await hostApi.deleteHost(hostId)
      dispatch({
        type: types.SET_LOADING
      })
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
      const response = await HostApi.search({
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
        type: types.SET_DATA_HOSTS,
        payload: (response && response.data) || [],
      });
  
      return response;
    };
    return {
      ...state,
      deleteHost,
      changeTextSearch,
      changePagination,
      fetchDataCallback,
    };
  };
  
  export default HostsContextProvider;
  