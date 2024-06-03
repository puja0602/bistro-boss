import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';
import Footer from '../Pages/Shared/Footer/Footer';

const Root = () => {
    const location = useLocation();
    const noHeaderFooter = location?.pathname?.includes('login') || location?.pathname?.includes('signUp')
    return (
        <div>
            {
                noHeaderFooter || <Nav></Nav>
            }
            <Outlet></Outlet>
            {
                noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Root;