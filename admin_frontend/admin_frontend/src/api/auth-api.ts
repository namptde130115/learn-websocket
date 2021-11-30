import axios from './axios-client';

interface FormAuthDate {
    email?: string;
    password?: string;
}

export async function loginWithEmail(data: FormAuthDate): Promise<any> {
    const response = await axios({
        method: 'POST',
        url: '/auth/sign_in_admin',
        data,
    });

    return response;
}

export async function getMe(): Promise<any> {
    const response = await axios({
        method: 'GET',
        url: '/user/me',
    });

    return response.data;
}

export async function signupWithEmail(data: FormAuthDate): Promise<void> {
    const response = await axios({
        method: 'PUT',
        url: '/auth/register',
        data,
    });

    return response.data;
}

export async function logout(refreshToken: string): Promise<any> {
    const response = await axios({
        method: 'POST',
        url: '/auth/logout',
        data: {
            token: refreshToken,
        },
    });

    return response.data;
}

export async function changePassword(data: any): Promise<any> {
    const response = await axios({
        method: 'PUT',
        url: '/user/change_password_admin',
        data: data,
    });

    return response;
}

export default {
    getMe,
    loginWithEmail,
    signupWithEmail,
    logout,
    changePassword,
};
