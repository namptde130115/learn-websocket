import { push } from 'connected-react-router';
import { Dispatch } from 'redux';
import { setToken, removeToken } from '../../api/token';
import types from './authTypes';

// load user
const loadingUser = () => ({ type: types.LOADING });

export const loadUserSuccess = (payload: any) => ({
    type: types.LOAD_USER_SUCCESS,
    payload,
});

export const getUserAction = () => async (dispatch: Dispatch<any>, getState: any) => {
    try {
        dispatch(loadingUser());

        let data = {};
        const authState = getState().auth;
        if (authState && authState.user) {
            data = authState.user
        } else {
               // const response: any = await authApi.loginWithEmail();
        }
        const token = authState.token;
        await setToken({token})
        await dispatch(loadUserSuccess(data));
    } catch (error) {
        dispatch({
            type: types.LOAD_USER_FAILED,
        });
    }
};

//login with email
export const loginActionWithEmail = (payload: any) => async (dispatch: any) => {
    console.log('payload', payload)
    dispatch({
        type: types.LOGIN_SUCCESSS,
        payload,
    });

    dispatch(push('/'));
    dispatch(getUserAction());
};

// login with service
export const loginActionWithService = (data: any, service?: any) => async (dispatch: any) => {
    try {
        dispatch(loadingUser());
        const res = {
            data: {}
        };

        dispatch({
            type: types.LOGIN_SUCCESSS,
            payload: res.data,
        });

        // load user
        dispatch(push('/'));
        await dispatch(loadUserSuccess(res.data));
    } catch (e) {
        dispatch({
            type: types.LOGIN_FAILED,
        });
    }
};

//logout
export const logout = () => async (dispatch: any, getState: any) => {
    try {
        removeToken();

        dispatch({
            type: types.LOGOUT,
        });
    } catch (error) { }
};
