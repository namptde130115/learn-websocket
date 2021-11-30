import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useMemo,
    useReducer,
  } from "react";
import skillApi from "../../../../api/skill-api";
  import SkillApi from "../../../../api/skill-api";
  import { IContextSkills } from "./interface";
  import reducer, { initialState } from "./reducer";
  import types from "./types";
  
  const initalContext = {
    state: initialState,
    dispatch: () => null,
    fetchDataCallback: () => null,
  };
  
  const SkillsContext = createContext<IContextSkills>(initalContext);
  
  interface Props {
    children: ReactNode;
  }
  
  const SkillsContextProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  
    return (
      <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>
    );
  };
  
  export const useSkillsContext = () => {
    const value = useContext(SkillsContext);
  
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

    const deleteSkill = async (skillId: string) => {
      await skillApi.deleteSkill(skillId)
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
      const response = await SkillApi.search({
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
        type: types.SET_DATA_SKILLS,
        payload: (response && response.data) || [],
      });
  
      return response;
    };
    return {
      ...state,
      deleteSkill,
      changeTextSearch,
      changePagination,
      fetchDataCallback,
    };
  };
  
  export default SkillsContextProvider;
  