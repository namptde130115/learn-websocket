import jwtDecode from 'jwt-decode';
import get from 'lodash/get';
import * as queryString from 'query-string';

export interface IToken {
    accessToken: string;
    refreshToken: string;
    expiredIn: number;
    type: string;
}

const setToken = ({ token, remember = true }: { token: IToken; remember?: boolean }): void => {
    let formatToken: any = {};
    formatToken.accessToken = token;
    if (!token) {
        return;
    }
    const tokenString = JSON.stringify(formatToken);

    if (remember) {
        return localStorage.setItem('token', tokenString);
    }

    return sessionStorage.setItem('token', tokenString);
};

const getTokenLocal = (): IToken | null => {
    const authString = localStorage.getItem('token');
    if (!authString) return null;
    const token: IToken = JSON.parse(authString);

    return token;
};

const getToken = (type?: 'accessToken' | 'refreshToken'): string | null => {
    const tokenLocal = getTokenLocal();

    if (!tokenLocal) return null;

    return get(tokenLocal, type || 'accessToken');
};

const getAuthParam = (): string | null => {
    const token = getToken('accessToken');

    if (!token) return null;

    const search = queryString.stringify({
        token,
        location: JSON.stringify({
            pathname: '/',
        }),
    });
    return search;
};

const removeToken = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('order');
    localStorage.removeItem('complain');
};

const checkToken = (token: string): boolean => {
    const tokenDecode = jwtDecode(token);
    const expToken = get(tokenDecode, 'exp');

    if (!expToken) {
        return false;
    }

    const dateNow = Math.floor(Date.now() / 1000);

    return expToken - dateNow > 0;
};

export { setToken, getToken, removeToken, getAuthParam, checkToken, getTokenLocal };
