import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer, { IStorageState } from '../reducers/authState/authReducer';
import globalReducer, { IGlobalState } from '../reducers/globalState/globalReducer';

export interface IState {
    global: IGlobalState;
    auth: IStorageState;
}

const rootReducer = (history: any): Reducer =>
    combineReducers({
        router: connectRouter(history),
        auth: authReducer,
        global: globalReducer,
    });

export default rootReducer;
