import logo from '../assets/logo512.png';

import Navigation from '../components/Navbar/navigation';
import Header from './Pages/Home/Header';
import Listing from './Pages/Home/Listing';
import Blog from './Pages/Home/Blog';
import OwlCarousel from './Pages/Home/Carousal';
import Location from './Pages/Home/home-location';


const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas } = require('react-bootstrap');
const { BrowserRouter, Routes } = require('react-router-dom');

function Home() {
    return (
        <>
       <Navigation>  </Navigation>
       <Header>   </Header>
       <Listing> </Listing>
       <Blog></Blog>
       <OwlCarousel></OwlCarousel>
       <Location></Location>

        </>
        
    );
}
export default Home;