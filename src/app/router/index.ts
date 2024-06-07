import React from 'react';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainAdminPage from '../../pages/MainAdminPage/MainAdminPage';
import MainUserPage from '../../pages/MainUserPage/MainUserPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage'; 
import SharePage from '../../pages/SharePage/SharePage';
import AddWordPage from '../../pages/AddWordPage/AddWordPage';
import CategoryPage from '../../pages/CategoryPage/components/CategoryPage';

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
    CATEGORIE = '/categorie/:categoryId', 
    SHARE = '/share',
    WORD = '/word', 
}

export const adminRoutes: IRoute[] = [
    { path: RouteNames.MAIN_ADMIN, element: MainAdminPage },
];

export const userRoutes: IRoute[] = [
    { path: RouteNames.MAIN_USER, element: MainUserPage },
    { path: RouteNames.CATEGORIES, element: CategoriesPage },
  
    { path: RouteNames.WORD, element: AddWordPage },
    { path: RouteNames.CATEGORIES, element: CategoriesPage },
    { path: RouteNames.CATEGORIE, element: CategoryPage },
    { path: RouteNames.SHARE, element: SharePage }, 
];

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, element: LoginPage },
    { path: RouteNames.REGISTRATION, element: RegistrationPage },

];
