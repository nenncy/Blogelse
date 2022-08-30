import logo from '../assets/logo512.png';
import '../App.css'

import Home from '../components/Home';
import Register from '../components/Register';
import { useEffect, useState , useReducer} from "react";
import Login from '../components/Login';
import Footer from '../components/footer';
import AddListing from '../components/Pages/Addlisting';
import About from '../components/About';
import Location from '../components/Pages/Location';
import Dashboard from '../components/Pages/Dashboard';
import Blog from '../components/Pages/Blog';
import Category from '../components/Pages/Category';
import Listing from '../components/Pages/listing';

import { createContext } from 'react';
import { initialState,reducer } from '../reducers/userReducer';
import ProtectedRoute from './protectedRoute';
const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas } = require('react-bootstrap');
const { BrowserRouter, Route, Routes } = require('react-router-dom');


export const userContext = createContext();


const DefaulRoutes = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
  
        <>
            {/* <Navigation></Navigation> */}
            <userContext.Provider value={{state,dispatch}}>
            <BrowserRouter>
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                        <Route path='/register' exact element={<Register />} />
                        <Route path='/login' exact element={<Login />} />
                        <Route path='/addlisting' exact element={<AddListing />} />
                        <Route path='/alllocation' exact element={<Location />} />
                        <Route path='/dashboard' exact element={<ProtectedRoute Component={Dashboard}/>} />
                        <Route path='/blog' exact element={<Blog />} />
                        <Route path='/allcategory' exact element={<Category/>} />
                        <Route path='/aboutus' exact element={<About/>} />
                        <Route path='/addlisting/listing/:planid' exact element={<Listing/>}></Route>
                    </Routes>
            </BrowserRouter>
            </userContext.Provider>
            <Footer></Footer>
        </>

    )
}
export default DefaulRoutes;