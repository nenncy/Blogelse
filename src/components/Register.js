import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Container, Input, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Navigation from './Navbar/navbar-other';
import ReCAPTCHA from "react-google-recaptcha";
import HttpService from '../utils/http.service';

const { Nav, Navbar, FormControl, NavDropdown, Offcanvas } = require('react-bootstrap');



function Register() {


  //sign up method
  const [newUser, setNewUser] = useState({
    Username: '',
    Email: '',
    Password: '',
   
 
  })


  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });

  }


  const onSubmit = (e) => {

    e.preventDefault();


    console.log(newUser.Username);

    const userData = {

      Username: newUser.Username,
      Email: newUser.Email,
      Password: newUser.Password,
      Firstname: newUser.Firstname,
      Lastname: newUser.Lastname,
      Website: newUser.Website,
      Bio: newUser.Bio,
      // cinform:newUser.cinform
    };

    axios.post(HttpService.SignupUrl, userData)

      .then((response) => {
        console.log(response.status);
        toast.success("registration succesufull");
        console.log(response.data);
      }).catch((error) => {

        //console.log(error.response.data);
        toast.error(error.response.data.msg);
        <ToastContainer></ToastContainer>
      })

  }


  const [show, setShow] = useState(false);
  const [verify, setVerify] = useState(false);

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

  function onChange(value) {

    console.log("Captcha value:", value);
    setVerify(true);
  }

  return (
    <>
      <ToastContainer></ToastContainer>
    
            <div className='header-scroll-transparent'>
                <Navigation/>
            <div className='bg-holder'>
                
                <div className='wrapper-contact-above-text'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h1 className='title-content'>
                                Registration - BlogElse | Blog Submission Site | Business Listing Site
                                </h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">Home </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {" "}
                                            Registration - BlogElse | Blog Submission Site | Business Listing Site
                                        </li>
                                    </ol>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='login-container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='loginform-container'>
                            <Container>
                            <Form method='post'  onSubmit={onSubmit}>
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
                                    <Form.Group controlId="Email">
                                        <Form.Label className='lable-tag'>Email</Form.Label>
                                        <Form.Control 
                                        type="text"
                                        className="directorist-form-element"
                                        id="Email"
                                        name="Email"
                                        value={newUser.Email}
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
                                    <Form.Group controlId="Firstname">
                                        <Form.Label className='lable-tag'>Firstname</Form.Label>
                                        <Form.Control 
                                        type="text"
                                        className="directorist-form-element"
                                        id="Firstname"
                                        name="Firstname"
                                        value={newUser.Firstname}
                                        onChange={handleChange}
                                        />

                                    </Form.Group>
                                    <Form.Group controlId="Lastname">
                                        <Form.Label className='lable-tag'>Lastname</Form.Label>
                                        <Form.Control 
                                         type="text"
                                         id="Lastname"
                                         autoComplete="off"
                                         name="Lastname"
                                         className="directorist-form-element"
                                         value={newUser.Lastname}
                                         onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Website">
                                        <Form.Label className='lable-tag'>Website</Form.Label>
                                        <Form.Control 
                                         type="text"
                                         id="Website"
                                         autoComplete="off"
                                         name="Website"
                                         className="directorist-form-element"
                                         value={newUser.Website}
                                         onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Bio">
                                        <Form.Label className='lable-tag'>Bio</Form.Label>
                                        <Form.Control 
                                         type="text"
                                         id="Bio"
                                         as="textarea" rows={3}
                                         autoComplete="off"
                                         name="Bio"
                                         className="directorist-form-element"
                                         value={newUser.Bio}
                                         onChange={handleChange}
                                        />
                                    </Form.Group>

                                   

                                   
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label=" I agree to the  Privacy &amp; Policy" />
                                
        
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="I agree with all  terms &amp; conditions" />
                                    </Form.Group>
                                    <ReCAPTCHA
                                          sitekey="6Le5gwAhAAAAADNiPbsq1OT3mAoR3hoqoeAr53MG"
                                          onChange={onChange}
                                        />
                                  
                                    <div className='donthave-account'>
                                        <p>
                                        Already have an account? Please login{" "}
                                            <a href="/login">Here</a>
                                        </p>


                                    </div>
                                    <Button  disabled={!verify} className='submit-btn-login' variant="primary" type="submit"  name="submit">
                                        Sign up
                                    </Button>

                                    </Form> 
                            
                            </Container>

                        </div>
                    </div>

                </div>


            </div>

    </>
  );
}


export default Register;