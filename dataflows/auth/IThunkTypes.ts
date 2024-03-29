import { string } from "yup";

export interface ILoginThunk {
    email: string;
    password: string;
}

export interface ILoginRespose {
    user: IUserBase;
    token: string;
    refreshToken: string;
}
export interface IUserBase {
    id: string;
    name: string;
    phone: string;
    email: string;
}

export interface IRefreshTokenResponse {
    refreshToken: string;
    token: string;
}

export interface ILoginFormik {
    email: string;
    passwowrd: string;
}
