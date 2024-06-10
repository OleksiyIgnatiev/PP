import React from 'react';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainAdminPage from '../../pages/MainAdminPage/MainAdminPage';
import MainUserPage from '../../pages/MainUserPage/MainUserPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage'; 
import SharePage from '../../pages/SharePage/SharePage';
import AddWordPage from '../../pages/AddWordPage/AddWordPage';
import AdminPanel from '../../pages/AdminPanel/AdminPanel';
import Subscription from '../../pages/Subscription/Subscription';
import EditUserPage from '../../pages/EditUserPage/EditUserPage';
import NoticeViolation from '../../pages/NoticeViolation/NoticeViolation';
import CategoryPage from '../../pages/CategoryPage/components/CategoryPage';
import SelectCategoriesPage from '../../pages/SelectCategoriesPage/components/SelectCategoriesPage';
import Words from '../../models/Words/components/Words/Words';
import AccountPage from '../../pages/AccountPage/components/AccountPage';

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
    ADMIN_PANEL = '/admin-panel',
    EDIT_USER = '/edit-user',
    SUBSCRIPTION = '/subscription',
    NOTICE_VIOLATION = '/notice-violation',
    SELECT_CATEGORIES = '/select-categories/:type',
    LEARN_WORDS = '/learn-words',
    REPEAT_WORDS = '/repeat-words',
    ACOUNT = '/account',
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
    { path: RouteNames.SELECT_CATEGORIES, element: SelectCategoriesPage }, 
    { path: RouteNames.LEARN_WORDS, element: Words }, 
    { path: RouteNames.REPEAT_WORDS, element: Words }, 
    { path: RouteNames.ACOUNT, element: AccountPage }, 
];

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, element: LoginPage },
    { path: RouteNames.REGISTRATION, element: RegistrationPage },
    { path: RouteNames.CATEGORIES, element: CategoriesPage },
    { path: RouteNames.WORD, element: AddWordPage }, // Роут слова додано до публічних роутів
    { path: RouteNames.SHARE, element: SharePage }, // Роут Share додано до публічних роутів
    { path: RouteNames.ADMIN_PANEL, element: AdminPanel },
    { path: RouteNames.EDIT_USER, element: EditUserPage },
    { path: RouteNames.NOTICE_VIOLATION, element: NoticeViolation },
    { path: RouteNames.SUBSCRIPTION, element: Subscription },
];
