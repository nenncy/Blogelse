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
                    {/* <Route path='/about' exact element={<About/>} /> */}

                </Routes>
            </BrowserRouter>
            <BrowserRouter>
            <Routes>
               <Route path='/about' exact element={<About/>} />
            </Routes>
            </BrowserRouter>
           
            <Footer></Footer>
            {/* <Navbar expand="lg">
                <Container fluid>
                <Navbar.Brand href="#"><img
                    src={logo}
                    width="130"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Sidebar</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <NavDropdown title="Listing" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Our Listing</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Add Listing</NavDropdown.Item>
            
                                </NavDropdown>
                                <NavDropdown title="Categories" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">All Categories</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">All Locators</NavDropdown.Item>
                                    
                                </NavDropdown>
                                <Nav.Link href="#action2">Blogs</Nav.Link>
                                <NavDropdown title="Pages" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Dashboard</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Pricing Plan</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">About</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  
                </Container>
            </Navbar>
             */}
        </>

    )
}
export default DefaulRoutes;