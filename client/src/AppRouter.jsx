// AppRouter.jsx
import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import PrivacyPolicy from './components/PrivacyPolicy';

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element = {<Root />}>
      <Route index element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
    </Route>
  )
)

const Root = ( ) => {

  return(

    <>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/"> Contact </Link>
      </div>

      <div>

        <Outlet />
      </div>
    </>
  );
}

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};

