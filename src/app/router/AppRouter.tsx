import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { RouteNames, adminRoutes, userRoutes } from '.';

import Loader from '../../UI/Loader/Loader';
import useStore from '../../state/useStore';

const AppRouter = () => {
    const {role} = useStore();
    return (
        <Routes>
            
            {(role === 'admin') && (
                <>
                    {adminRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={   <Suspense fallback={<Loader/>}><route.element /></Suspense>}
                        />
                    ))}
                    <Route path="*" element={<Navigate to={RouteNames.ADMIN_PANEL} replace />} />
                </>
            )}
            {(role === 'user') && (
                <>
                    {userRoutes.map((route) => (
                     <Route
                            key={route.path}
                            path={route.path}
                            element={ <Suspense fallback={<Loader/>}><route.element /></Suspense>}
                        />
                      
                    ))}
                     
                    <Route path="*" element={<Navigate to={RouteNames.MAIN_USER} replace />} />
                </>
            )}
            <Route path="*" element={<Navigate to={RouteNames.LOGIN} replace />} />
        </Routes>
    );
};


export default AppRouter;
