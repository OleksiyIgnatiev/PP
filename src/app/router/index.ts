import React from 'react';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainAdminPage from '../../pages/MainAdminPage/MainAdminPage';
import MainUserPage from '../../pages/MainUserPage/MainUserPage';

export interface IRoute{
    path:string;
    element: React.ComponentType;
}

export enum RouteNames{
    LOGIN = '/login',
    MAIN_USER = '/',
    MAIN_ADMIN = '/admin',
    ADMIN_LOGIN = '/admin-login',
    FORGOT_PASSWORD = '/forgot-password',
    REGISTRATION = '/registration',

}
export const adminRoutes:IRoute[] = [
    {path: RouteNames.MAIN_ADMIN, element: MainAdminPage},
]

export const userRoutes:IRoute[] = [
    {path: RouteNames.MAIN_USER, element: MainUserPage},
]

export const publicRoutes:IRoute[] = [
    {path: RouteNames.LOGIN, element: LoginPage},
]

