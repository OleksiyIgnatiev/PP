import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { RouteNames, adminRoutes, userRoutes } from '.';

import Loader from '../../UI/Loader/Loader';
import { role } from '../constants/Auth';

const AppRouter = () => {

    
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
                    <Route path="*" element={<Navigate to={RouteNames.MAIN_ADMIN} replace />} />
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
