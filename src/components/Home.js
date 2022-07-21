import logo from '../assets/logo512.png';
import '../App.css'
import '../Styles/navbar.css';
import Navigation from '../components/navigation';
import Header from './Header';
import Listing from './Listing';
import Blog from './Blog';
import OwlCarousel from './Carousal';
import Location from './home-location';


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