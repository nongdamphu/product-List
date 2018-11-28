import React from 'react'
import HomePage from './pages/HomePage/HomePage';
import Shops from './pages/Shop/Shops'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Dropdown from './pages/Dropdown/Dropdown';
import Blog from './pages/Blog/Blog';


const routers = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/home',
        exact: false,
        main: () => <HomePage />
    },
    {
        path: '/shop',
        exact: false,
        main: () => <Shops />
    },
    {
        path: '/drop',
        exact: false,
        main: () => <Dropdown />
    },
    {
        path: '/blog',
        exact: false,
        main: () => <Blog />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }

]
export default routers