import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Container, Input, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Headroom from "react-headroom";
import Navigation from './navigation';
import useCollapse from 'react-collapsed';

import ReCAPTCHA from "react-google-recaptcha";




function Login() {

    const config = {
        duration: 1000
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

    //sign in method
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

    //recover password
    const [password, setPassword] = useState({
        Email: ''
    });

    const passwordChange = (e) => {

        setPassword({ ...password, [e.target.name]: e.target.value })

    }
    const HandleSubmit = (e) => {
        e.preventDefault();

        const recoverdata = {
            Email: password.Email
        };

        axios.post('http://localhost:8000/password', recoverdata)
            .then((response) => {
                console.log(response.status);
                toast.success(response.data.msg);
                console.log(response.data);

            }).catch((error) => {

                //console.log(error.response.data);
                toast.error(error.response.data.msg);
                <ToastContainer></ToastContainer>
            })

    }


    const [showResults, setShowResults] = useState(false)
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


    return (
        <>
            <ToastContainer></ToastContainer>
            {/* <button onClick={notify}>Notify !</button> */}
            <Headroom>
                <div className="menu-area menu1 menu--light menu--transparent fixed-top ">
                    <div className="top-menu-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="menu-fullwidth">
                                        <div className="logo-wrapper order-lg-0 order-sm-1">
                                            <div className="logo logo-top">
                                                <a
                                                    className="navbar-brand order-sm-1 order-1"
                                                    href="/"
                                                >
                                                    <img
                                                        className="logo-dark"
                                                        src="https://www.blogelse.com/wp-content/uploads/2020/06/Blog-Else-2.png"
                                                        alt="cropped-Blog-Else-W.png"
                                                    />
                                                    <img
                                                        className="logo-white"
                                                        src="https://www.blogelse.com/wp-content/uploads/2020/06/cropped-Blog-Else-W.png"
                                                        alt="cropped-Blog-Else-W.png"
                                                    />{" "}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="menu-container order-lg-1 order-sm-0">
                                            <div className="d_menu">
                                                <nav className="navbar navbar-expand-lg mainmenu__menu">
                                                    <div className="desktop-close-icon">
                                                        <button
                                                            className="navbar-toggler collapsed"
                                                            type="button"
                                                            data-toggle="collapse"
                                                            data-target="#direo-navbar-collapse"
                                                            aria-controls="direo-navbar-collapse"
                                                            aria-expanded="false"
                                                            aria-label="Toggle navigation"
                                                        >
                                                            <span className="navbar-toggler-icon icon-menu">
                                                                <i className="la la-reorder" />
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="navbar-collapse collapse"
                                                        id="direo-navbar-collapse"
                                                        style={{}}
                                                    >
                                                        <div className="mobile-close-icon">
                                                            <button
                                                                className="navbar-toggler collapsed"
                                                                type="button"
                                                                data-toggle="collapse"
                                                                data-target="#direo-navbar-collapse"
                                                                aria-controls="direo-navbar-collapse"
                                                                aria-expanded="false"
                                                                aria-label="Toggle navigation"
                                                            >
                                                                <span className="navbar-toggler-icon icon-menu">
                                                                    <i className="la la-reorder" />
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <ul id="menu-primary-menu" className="navbar-nav">
                                                            <li
                                                                id="menu-item-3018"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3018"
                                                            >
                                                                <a href="/">Home</a>
                                                            </li>
                                                            <li
                                                                id="menu-item-2156"
                                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2156"
                                                            >
                                                                <a href="#" style={{ display: "block" }}>
                                                                    Listings
                                                                </a>
                                                                <ul className="sub-menu">
                                                                    <li
                                                                        id="menu-item-3162"
                                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3162"
                                                                    >
                                                                        <a href="#">
                                                                            Our Listing
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        id="menu-item-2080"
                                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2080"
                                                                    >
                                                                        <a href="#">
                                                                            Add Listing
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li
                                                                id="menu-item-2059"
                                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2059"
                                                            >
                                                                <a href="#" style={{ display: "block" }}>
                                                                    Categories
                                                                </a>
                                                                <ul className="sub-menu">
                                                                    <li
                                                                        id="menu-item-2008"
                                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2008"
                                                                    >
                                                                        <a href="#">
                                                                            All Categories
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        id="menu-item-2010"
                                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2010"
                                                                    >
                                                                        <a href="#">
                                                                            All Locations
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li
                                                                id="menu-item-2183"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2183"
                                                            >
                                                                <a href="#">Blogs</a>
                                                            </li>
                                                            <li
                                                                id="menu-item-2060"
                                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2060"
                                                            >
                                                                <a href="#" style={{ display: "block" }}>
                                                                    Pages
                                                                </a>
                                                                <ul className="sub-menu">
                                                                    <li
                                                                        id="menu-item-2015"
                                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2015"
                                                                    >
                                                                        <a href="#">
                                                                            Dashboard
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        id="menu-item-2029"
                                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2029"
                                                                    >
                                                                        <a href="#">
                                                                            Pricing Plan
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        id="menu-item-2006"
                                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2006"
                                                                    >
                                                                        <a href="#">About</a>
                                                                    </li>
                                                                    <li
                                                                        id="menu-item-2014"
                                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2014"
                                                                    >
                                                                        <a href="#">
                                                                            Contact us
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                        <div className="mobile-add-listing d-lg-none d-block mx-2">
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs btn-gradient btn-gradient-two text-capitalize py-2 rounded"
                                                            >
                                                                <span className="la la-plus mr-1" />
                                                                Add Listing
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="i-nav-overlay" />
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="menu-right order-lg-2 order-sm-2">
                                            <div className="author-area">
                                                <div className="author__access_area">
                                                    <ul className="d-flex list-unstyled align-items-center author_access_list">
                                                        <li className="d-lg-block d-none desktop-login">
                                                            <a
                                                                href="#"
                                                                className="access-link"
                                                                data-toggle="modal"
                                                                data-target="#login_modal"
                                                            >
                                                                Login
                                                            </a>
                                                            <span>or</span>
                                                            <a
                                                                href="#"
                                                                className="access-link"
                                                                data-toggle="modal"
                                                                data-target="#signup_modal"
                                                            >
                                                                Register
                                                            </a>{" "}
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs btn-gradient btn-gradient-two"
                                                            >
                                                                <span className="la la-plus mr-1" />
                                                                Add Listing{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mobile-add-listing d-lg-none mx-2">
                                                <a
                                                    href="#"
                                                    className="btn btn-xs btn-gradient btn-gradient-two text-capitalize py-2 rounded"
                                                >
                                                    <span className="la la-plus mr-1" />
                                                    Add Listing
                                                </a>
                                            </div>
                                            <div className="mobile-login d-lg-none d-block ml-sm-4 ml-2">
                                                <a
                                                    href="#"
                                                    className="access-link"
                                                    data-toggle="modal"
                                                    data-target="#login_modal"
                                                >
                                                    <span className="la la-user" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="header-breadcrumb bgimage overlay overlay--dark">
                    <div
                        className="bg_image_holder"
                        style={{
                            backgroundImage:
                                'url("https://www.blogelse.com/wp-content/uploads/2019/10/breadcrumb1.jpg")',
                            opacity: 1
                        }}
                    >
                        <img
                            src="https://www.blogelse.com/wp-content/uploads/2019/10/breadcrumb1.jpg"
                            alt="https://www.blogelse.com/wp-content/uploads/2019/10/breadcrumb1.jpg"
                        />
                    </div>{" "}
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n\t\t\t\t.overlay.overlay--dark:before {\n\t\t\t\t\tbackground: rgba(47, 38, 57, 0.8);\n\t\t\t\t}\n\t\t\t"
                        }}
                    />
                    <div className="breadcrumb-wrapper content_above">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 className="page-title">
                                        Registration - BlogElse | Blog Submission Site | Business Listing
                                        Site{" "}
                                    </h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="/">Home </a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                {" "}
                                                Registration - BlogElse | Blog Submission Site | Business
                                                Listing Site
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Headroom>
            <div className="elementor-inner">
                <div className="elementor-section-wrap">
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-dfe6f1b elementor-section-boxed elementor-section-height-default elementor-section-height-default overflow-visible"
                        data-id="dfe6f1b"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                                <div
                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-23288f5"
                                    data-id="23288f5"
                                    data-element_type="column"
                                >
                                    <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                            <div
                                                className="elementor-element elementor-element-51b31ab elementor-widget elementor-widget-login"
                                                data-id="51b31ab"
                                                data-element_type="widget"
                                                data-widget_type="login.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <div className="direo-directorist_user_login">
                                                        {/* directorist-shortcode:: [directorist_user_login] */}
                                                        <div className="directorist-login-wrapper directorist-w-100">
                                                            <div className="directorist-container-fluid">
                                                                <div className="directorist-row">
                                                                    <div className="directorist-col-md-6 directorist-offset-md-3">
                                                                        <div className="atbdp_login_form_shortcode">
                                                                            <form id="login" method="POST" onSubmit={onSubmit}>
                                                                                <div className="directorist-form-group directorist-mb-15">
                                                                                    <label htmlFor="Username">
                                                                                        Username
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        className="directorist-form-element"
                                                                                        id="Username"
                                                                                        name="Username"
                                                                                        value={newUser.Username}
                                                                                        onChange={handleChange}
                                                                                    />
                                                                                </div>
                                                                                <div className="directorist-form-group directorist-mb-15">
                                                                                    <label htmlFor="Password">Password</label>
                                                                                    <input
                                                                                        type="Password"
                                                                                        id="Password"
                                                                                        autoComplete="off"
                                                                                        name="Password"
                                                                                        className="directorist-form-element"
                                                                                        value={newUser.Password}
                                                                                        onChange={handleChange}
                                                                                    />
                                                                                </div>
                                                                                <div className="directorist-form-group atbd_login_btn_wrapper directorist-mb-15">
                                                                                    <button
                                                                                        className="directorist-btn directorist-btn-block directorist-btn-primary"
                                                                                        type="submit"
                                                                                        value="Log In"
                                                                                        name="submit"
                                                                                    >
                                                                                        Log In
                                                                                    </button>
                                                                                    <input
                                                                                        type="hidden"
                                                                                        id="security"
                                                                                        name="security"
                                                                                        defaultValue="c3c9283701"
                                                                                    />
                                                                                    <input
                                                                                        type="hidden"
                                                                                        name="_wp_http_referer"
                                                                                        defaultValue="/login/"
                                                                                    />{" "}
                                                                                </div>
                                                                                <p className="status" />
                                                                                <div className="keep_signed directorist-checkbox directorist-mb-15">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        id="keep_signed_in"
                                                                                        defaultValue={1}
                                                                                        name="keep_signed_in"
                                                                                        defaultChecked=""
                                                                                    />
                                                                                    <label
                                                                                        htmlFor="keep_signed_in"
                                                                                        className="directorist-checkbox__label not_empty"
                                                                                    >
                                                                                        Remember Me{" "}
                                                                                    </label>
                                                                                </div>
                                                                                <p>
                                                                                    <a className="atbdp_recovery_pass" {...getToggleProps()}>
                                                                                        {" "}
                                                                                        Recover Password

                                                                                    </a>
                                                                                </p>{" "}

                                                                            </form>
                                                                            <div className="atbd_social_login">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn fb-login az-fb-login-btn"
                                                                                >
                                                                                    <span className="azbdp-fb-loading">
                                                                                        <span className="fa fa-spin fa-spinner" />
                                                                                    </span>
                                                                                    <span className="fa fa-facebook" /> Facebook{" "}
                                                                                </button>
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn fb-google az-gg-login-btn"
                                                                                >
                                                                                    <span className="azbdp-gg-loading">
                                                                                        <span className="fa fa-spin fa-spinner" />
                                                                                    </span>
                                                                                    <span className="fa fa-google" /> Google{" "}
                                                                                </button>
                                                                            </div>
                                                                            <p>
                                                                                Don't have an account?{" "}
                                                                                <a href="/register">
                                                                                    Sign Up
                                                                                </a>
                                                                            </p>
                                                                            <div {...getCollapseProps()}>
                                                                                <div
                                                                                    id="recover-pass-modal"
                                                                                    className="directorist-mt-15"
                                                                                >
                                                                                    <form method="post" onSubmit={HandleSubmit}>
                                                                                        <fieldset className="directorist-form-group">
                                                                                            <p>
                                                                                                Please enter your email address. You
                                                                                                will receive a new password via email.
                                                                                            </p>
                                                                                            <label htmlFor="Email">
                                                                                                E-mail
                                                                                            </label>
                                                                                            <input
                                                                                                type="text"
                                                                                                className="directorist-form-element"
                                                                                                name="Email"
                                                                                                id="Email"

                                                                                                placeholder="eg. mail@example.com"
                                                                                                required="required"
                                                                                                value={password.Email}
                                                                                                onChange={passwordChange}
                                                                                            />
                                                                                            <p>
                                                                                                <input
                                                                                                    type="hidden"
                                                                                                    name="action"
                                                                                                    defaultValue="reset"
                                                                                                />
                                                                                                <button
                                                                                                    type="submit"
                                                                                                    className="directorist-btn directorist-btn-primary"
                                                                                                    id="submit"
                                                                                                >
                                                                                                    Get New Password
                                                                                                </button>
                                                                                                <input
                                                                                                    type="hidden"
                                                                                                    defaultValue="5ead1f6919"
                                                                                                    name="directorist_nonce"
                                                                                                />
                                                                                            </p>
                                                                                        </fieldset>
                                                                                    </form>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>


        </>
    );
}



export default Login;