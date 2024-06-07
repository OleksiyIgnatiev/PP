import React, { FC, ReactNode, Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteNames, publicRoutes } from '../router/index';
import Loader from '../../UI/Loader/Loader';
import useStore from '../../state/useStore';


interface AuthGuardProps {
    children: ReactNode
}
const AuthGuard: FC<AuthGuardProps> = (props) => {
    const {isLoggedIn, role} = useStore();
    const [isLoading,setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        const checkAuthStatus = async () => {
            // Имитация проверки аутентификации. Замените это на вашу реальную логику проверки.
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setIsLoading(false);
        };

        checkAuthStatus();
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <>
            {(isLoggedIn && (role === 'admin' || role === 'user')) ?
                <>
                {props.children}
                </>
                :
                (!isLoading && (
                    <>
                        <Routes>
                            {publicRoutes.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={<Suspense fallback={<Loader />}><route.element /></Suspense>}
                                />
                            ))}
                            <Route path="*" element={<Navigate to={RouteNames.LOGIN} replace />} />
                        </Routes>
                    </>
                ))
            }
        </>
    );
}


export default AuthGuard
