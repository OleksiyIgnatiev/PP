import React, { FC, ReactNode, Suspense, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteNames, publicRoutes } from '../router/index';
import Loader from '../../UI/Loader/Loader';
import useStore from '../../state/useStore';


interface AuthGuardProps {
    children: ReactNode
}
const AuthGuard: FC<AuthGuardProps> = (props) => {
    const {isLoggedIn, role} = useStore();
    const [isLoading,setIsLoading] = useState();

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
