import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Admin from './components/admin/Admin'
import SignUpController from './components/user/SignUpController';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Admin />} />
                <Route path='/SignUp' element={<SignUpController/>} />
            </Routes>
        </BrowserRouter>
    </>
);
