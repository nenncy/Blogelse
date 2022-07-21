
import logo from '../assets/logo512.png';
import '../App.css'
import '../Styles/navbar.css';
import Headroom from "react-headroom";
import Example from './Register';
import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Register from './Register';
const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas } = require('react-bootstrap');
const { BrowserRouter, Routes, Link } = require('react-router-dom');



function Navigation() {

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


  return (
    <>
      <Headroom>
        <div className="menu-area menu1 menu--dark fixed-top ">
          <div className="top-menu-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu-fullwidth">
                    <div className="logo-wrapper order-lg-0 order-sm-1">
                      <div className="logo logo-top">
                        <a
                          className="navbar-brand order-sm-1 order-1"
                          href="#"
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
                              className="navbar-toggler"
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
                            className="collapse navbar-collapse"
                            id="direo-navbar-collapse"
                          >
                            <div className="mobile-close-icon">
                              <button
                                className="navbar-toggler"
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
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2998 current_page_item menu-item-3018"
                              >
                                <a href="#" aria-current="page">
                                  Home
                                </a>
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
                                href="/addlisting"
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
                                href="/login"
                                className="btn btn-xs border"
                                data-toggle="modal"
                                data-target="#login_modal"
                                onClick={handleShow}
                              >
                                Login
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                href="/addlisting"
                                className="btn btn-xs btn-gradient btn-gradient-two"
                              >
                                Add Listing{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mobile-add-listing d-lg-none mx-2">
                        <a
                          href="/addlisting"
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
      </Headroom>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="login" id="direo-login" method="post">
            <input
              type="text"
              className="form-control"
              id="direo-username"
              name="username"
              placeholder="Username or Email"
              required=""
            />
            <input
              type="password"
              id="direo-password"
              autoComplete="false"
              name="password"
              className="form-control"
              placeholder="Password"
              required=""
            />
            <button
              className="btn btn-block btn-lg btn-gradient btn-gradient-two"
              type="submit"
              name="submit"
            >
              Login
            </button>
            <p className="status" />
            <div className="form-excerpts">
              <div className="keep_signed">
                <label htmlFor="direo-keep_signed_in" className="not_empty">
                  <input
                    type="checkbox"
                    id="direo-keep_signed_in"
                    defaultValue={1}
                    name="keep_signed_in"
                    defaultChecked=""
                  />
                  Remember Me <span className="cf-select" />
                </label>
              </div>
              <a href="" className="recover-pass-link">
                Forgot your password?
              </a>
            </div>
            <input
              type="hidden"
              id="direo-security"
              name="direo-security"
              defaultValue="fed6354666"
            />
            <input type="hidden" name="_wp_http_referer" defaultValue="/" />
          </form>
          <form
            method="post"
            id="direo_recovery_password"
            className="recover-pass-form"
            style={{ display: "none" }}
          >
            <fieldset>
              <p>
                {" "}
                Please enter your username or email address. You will receive a link to
                create a new password via email.{" "}
              </p>
              <label htmlFor="user_login">E-mail:</label>
              <input
                type="text"
                name="direo_recovery_user"
                className="direo_recovery_user"
                id="user_login"
                defaultValue=""
              />
              <input type="hidden" name="action" defaultValue="reset" />
              <p className="recovery_status" />
              <button
                type="submit"
                className="btn btn-primary direo_recovery_password"
                id="direo-submit"
              >
                Get New Password
              </button>
            </fieldset>
          </form>
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
                Not a member?{" "}
                <a
                  href="/register"
                  className="access-link"
                  data-toggle="modal"
                  data-target="#signup_modal"
                  data-dismiss="modal"
                >
                  Register{" "}
                </a>
                <Button onClick={ShowRegister}>Register</Button>
              </li>
            </ul>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
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
export default Navigation;