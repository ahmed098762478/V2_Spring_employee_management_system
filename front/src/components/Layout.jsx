import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <Sidebar />
            <div className="page-wrapper">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
