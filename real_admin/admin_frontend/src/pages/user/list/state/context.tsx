import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";
import UserApi from "../../../../api/user-api";
import { IContextUsers } from "./interface";
import reducer, { initialState } from "./reducer";
import types from "./types";

const initalContext = {
  state: initialState,
  dispatch: () => null,
  fetchDataCallback: () => null,
};

const UsersContext = createContext<IContextUsers>(initalContext);

interface Props {
  children: ReactNode;
}

const UsersContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const value = useContext(UsersContext);

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

  const enableUser = async (userId: string) => {
    await UserApi.enableUser(userId)
    dispatch({
      type: types.SET_LOADING
    })
  }

  const disableUser = async (userId: string) => {
    await UserApi.disableUser(userId)
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
    const response = await UserApi.search({
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
      type: types.SET_DATA_USERS,
      payload: (response && response.data) || [],
    });

    return response;
  };
  return {
    ...state,
    enableUser,
    disableUser,
    changeTextSearch,
    changePagination,
    fetchDataCallback,
  };
};

export default UsersContextProvider;
