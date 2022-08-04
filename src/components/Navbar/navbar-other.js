

import '../../Styles/Navbar/navbar-other.css';

import Headroom from "react-headroom";

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Modal from 'react-bootstrap/Modal';
import Register from '../Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas } = require('react-bootstrap');
const { BrowserRouter, Routes, Link } = require('react-router-dom');




function NavbarOther() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setShowRegister(false);
  }



  const [showregister, setShowRegister] = useState(false);

  const CloseRegister = () => setShowRegister(false);
  const ShowRegister = () => {
    setShowRegister(true);
    setShow(false);
  }

  const [newUser, setNewUser] = useState({

    Username: '',
    Email: '',
    Password: ''

  })

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });

  }
  const onSubmit = (e) => {

    e.preventDefault();

    // console.log(newUser.Username);
    const userData = {

      Username: newUser.Username,
      Email: newUser.Email,
      Password: newUser.Password,
    };

    axios.post("http://localhost:8000/api/users/login", userData)

      .then((response) => {
        console.log(response.status);
        toast.success("Login succesufull");
        console.log(response.data);

      }).catch((error) => {

        //console.log(error.response.data);
        toast.error(error.response.data.msg);
        <ToastContainer></ToastContainer>
      })
  }
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
   
  }, [])

  // const logout = () => {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('isAuthenticated');
  // }

  return (
    <>
      <Headroom>
        <div className='navbar-new'>
          <Navbar expand="lg" className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <Container fluid>
              <Navbar.Brand ><img
            
                 src={ colorChange  ? "https://www.blogelse.com/wp-content/uploads/2020/06/Blog-Else-2.png" : "https://www.blogelse.com/wp-content/uploads/2020/06/cropped-Blog-Else-W.png"}
                width="100"
                height="30"

                alt="React Bootstrap logo"
              /></Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
              >
                <Offcanvas.Header closeButton>

                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>

                    <NavDropdown title="Listing" id="offcanvasNavbarDropdown">
                      <NavDropdown.Item href="#action3">Our Listing</NavDropdown.Item>
                      <NavDropdown.Item href="/addlisting">Add Listing</NavDropdown.Item>


                    </NavDropdown>
                    <NavDropdown title="Categories" id="offcanvasNavbarDropdown">
                      <NavDropdown.Item href="#action3">All Categories</NavDropdown.Item>
                      <NavDropdown.Item href="/alllocation">All Location</NavDropdown.Item>

                    </NavDropdown>
                    <Nav.Link href="#action2">Blogs</Nav.Link>
                    <NavDropdown title="Pages" id="offcanvasNavbarDropdown">
                      <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">Pricing Plan</NavDropdown.Item>
                      <NavDropdown.Item href="/aboutus">About </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>

                    </NavDropdown>
                  </Nav>

                  {
                      localStorage.getItem("token") ? (  <div className='avtar'>
                        <Nav>
                      <NavDropdown title={<img src="https://secure.gravatar.com/avatar/6ed62f9f724bccee6a0345f4c4a60078?s=40&d=mm&r=g"></img>} id="offcanvasNavbarDropdown " >
                        {/* <img src='https://secure.gravatar.com/avatar/6ed62f9f724bccee6a0345f4c4a60078?s=40&d=mm&r=g'></img> */}
                        <NavDropdown.Item href="/dashboard">My Listing</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">My Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Chats </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">My Bookings</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">favourite Listings</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Add listing</NavDropdown.Item>
                        <NavDropdown.Item href="javascript:logout();"><button >Logout</button></NavDropdown.Item>

                      </NavDropdown>
                      </Nav>


                    </div>) 
                      : ( <div className="btn-wrapper"><Button variant="outline-secondary" onClick={handleShow}>Login</Button>  </div>)
                    }
                  <div className="btn-wrapper">
  
                    <Button to='/addlisting' className='add-listing-btn'>Add listing</Button>
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>

      </Headroom>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method='post' onSubmit={onSubmit}>
            <Form.Group controlId="Username">
              <Form.Label className='lable-tag'>Username</Form.Label>
              <Form.Control
                type="text"
                className="directorist-form-element"
                id="Username"
                name="Username"
                value={newUser.Username}
                onChange={handleChange}
              />

            </Form.Group>

            <Form.Group controlId="Password">
              <Form.Label className='lable-tag'>Password</Form.Label>
              <Form.Control
                type="Password"
                id="Password"
                autoComplete="off"
                name="Password"
                className="directorist-form-element"
                value={newUser.Password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button className='submit-btn-login' variant="primary" type="submit" name="submit">
              Submit
            </Button>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <div className="social_login">
              <button type="button" className="btn fb-login ">
                <FontAwesomeIcon style={{ color: '#3B5999', height: '20px', marginRight: '10px' }} icon={faFacebook}></FontAwesomeIcon> Facebook{" "}
              </button>
              <button type="button" className="btn fb-google ">

                <FontAwesomeIcon style={{ color: '#DD4B39', height: '20px', marginRight: '10px' }} icon={faGoogle}></FontAwesomeIcon>Google{" "}
              </button>
            </div>
            <div className='donthave-account'>
              <p>
                Don't have an account?{" "}
                <a href="/">Sign Up</a>
              </p>
            </div>
          </Form>
        </Modal.Body>

      </Modal>
      <Modal show={showregister} onHide={CloseRegister} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="vb-registration-form">
            <form className="form-horizontal registraion-form" role="form">
              <div className="form-group">
                <input
                  type="text"
                  name="vb_username"
                  id="vb_username"
                  defaultValue=""
                  placeholder="Username"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="vb_email"
                  id="vb_email"
                  defaultValue=""
                  placeholder="Your Email"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="vb_password"
                  id="vb_password"
                  defaultValue=""
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <input
                type="hidden"
                id="vb_new_user_nonce"
                name="vb_new_user_nonce"
                defaultValue="bcf8daf0c0"
              />
              <input type="hidden" name="_wp_http_referer" defaultValue="/" />{" "}
              <div className="directory_regi_btn">
                <span className="atbdp_make_str_red"> *</span>
                <input id="privacy_policy" type="checkbox" name="privacy_policy" />
                <label htmlFor="privacy_policy">
                  {" "}
                  I agree to the{" "}
                  <a
                    style={{ color: "red" }}
                    target="_blank"
                    href="https://www.blogelse.com/privacy-policy/"
                    id=""
                  >
                    {" "}
                    Privacy{" "}
                  </a>
                  &amp;{" "}
                  <a
                    style={{ color: "red" }}
                    target="_blank"
                    href="https://www.blogelse.com/terms-and-conditions/"
                    id="atbdp_reg_terms"
                  >
                    Terms{" "}
                  </a>
                </label>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                        .directorist-g-recaptcha-wrap{\n                        text-align: center;\n                            display: -webkit-box;\n                            display: -ms-flexbox;\n                            display: flex;\n                            -webkit-box-orient: vertical;\n                            -webkit-box-direction: normal;\n                            -ms-flex-direction: column;\n                                    flex-direction: column;\n                            -webkit-box-align: center;\n                            -ms-flex-align: center;\n                                    align-items: center;\n                        }\n                        .dgr_show_recaptcha{\n                            margin-bottom: 0;\n                            margin-top: 20px;\n                        }\n                        #directorist.atbd_wrapper .directory_regi_btn {\n                            text-align: left;\n                        }\n                    "
                }}
              />
              <div className="dgr_show_recaptcha">
                <p />
                <div
                  data-theme="light"
                  className="g-recaptcha"
                  data-sitekey="6LdmNuUUAAAAAApVq6xtAR_PoR64iUZMivKfqGbF"
                >
                  <div style={{ width: 304, height: 78 }}>
                    <div>
                      <iframe
                        title="reCAPTCHA"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdmNuUUAAAAAApVq6xtAR_PoR64iUZMivKfqGbF&co=aHR0cHM6Ly93d3cuYmxvZ2Vsc2UuY29tOjQ0Mw..&hl=en&v=4rwLQsl5N_ccppoTAwwwMrEN&theme=light&size=normal&cb=egmiyyev2qzc"
                        width={304}
                        height={78}
                        role="presentation"
                        name="a-9ij6gvico8in"
                        frameBorder={0}
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                      />
                    </div>
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response"
                      style={{
                        width: 250,
                        height: 40,
                        border: "1px solid rgb(193, 193, 193)",
                        margin: "10px 25px",
                        padding: 0,
                        resize: "none",
                        display: "none"
                      }}
                      defaultValue={""}
                    />
                  </div>
                  <iframe style={{ display: "none" }} />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-block btn-lg btn-gradient btn-gradient-two"
                id="btn-new-user"
              >
                Register{" "}
              </button>
            </form>
            <div className="indicator" style={{ display: "none" }}>
              Please wait...
            </div>
            <div className="alert result-message" />
          </div>
          <p className="social-connector text-center">
            <span>Or connect with</span>
          </p>
          <div className="social-login">
            <button type="button" className="btn fb-login az-fb-login-btn">
              <span className="azbdp-fb-loading">
                <span className="fa fa-spin fa-spinner" />
              </span>
              <span className="fa fa-facebook" /> Facebook{" "}
            </button>
            <button type="button" className="btn fb-google az-gg-login-btn">
              <span className="azbdp-gg-loading">
                <span className="fa fa-spin fa-spinner" />
              </span>
              <span className="fa fa-google" /> Google{" "}
            </button>
          </div>
          <div className="form-excerpts">
            <ul className="list-unstyled">
              <li>
                Already a member?{" "}
                <a
                  href="https://www.blogelse.com/login/"
                  className="access-link"
                  data-toggle="modal"
                  data-target="#login_modal"
                  data-dismiss="modal"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={CloseRegister}>
            Close
          </Button>
          <Button variant="primary" onClick={CloseRegister}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </>

  );
}
export default NavbarOther;