import React from 'react';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainAdminPage from '../../pages/MainAdminPage/MainAdminPage';
import MainUserPage from '../../pages/MainUserPage/MainUserPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage'; 
import SharePage from '../../pages/SharePage/SharePage';
import AddWordPage from '../../pages/AddWordPage/AddWordPage';

export interface IRoute {
    path: string;
    element: React.ComponentType<any>;
}

export enum RouteNames {
    LOGIN = '/login',
    MAIN_USER = '/',
    MAIN_ADMIN = '/admin',
    ADMIN_LOGIN = '/admin-login',
    FORGOT_PASSWORD = '/forgot-password',
    REGISTRATION = '/registration',
    CATEGORIES = '/categories', 
    SHARE = '/share',
    WORD = '/word', // Змінено шлях на /word
}

export const adminRoutes: IRoute[] = [
    { path: RouteNames.MAIN_ADMIN, element: MainAdminPage },
]

export const userRoutes: IRoute[] = [
    { path: RouteNames.MAIN_USER, element: MainUserPage },
    { path: RouteNames.CATEGORIES, element: CategoriesPage },
    { path: RouteNames.SHARE, element: SharePage },
    { path: RouteNames.WORD, element: AddWordPage }
]

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, element: LoginPage },
    { path: RouteNames.REGISTRATION, element: RegistrationPage }
]