import logo from '../assets/logo512.png';
import '../App.css'
import '../Styles/navbar.css';
import Home from '../components/Home';
import Register from '../components/Register';
import Navigation from '../components/navigation';
import Login from '../components/Login';
import Footer from '../components/footer';
import AddListing from '../components/Addlisting';
import About from '../components/About';
import Location from '../components/Pages/Location';
import Dashboard from '../components/Pages/Dashboard';


const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas } = require('react-bootstrap');
const { BrowserRouter, Route, Routes } = require('react-router-dom');



function DefaulRoutes() {
    return (
        <>
            <Navigation></Navigation>
            <BrowserRouter>

                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/register' exact element={<Register />} />
                    <Route path='/login' exact element={<Login />} />
                    <Route path='/addlisting' exact element={<AddListing/>} />
                    <Route path='/alllocation' exact element={<Location/>} />
                    <Route path='/dashboard' exact element={<Dashboard/>} />

                </Routes>
            </BrowserRouter>
            <Footer></Footer> 
            </>

    )
}
export default DefaulRoutes;