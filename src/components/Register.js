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

import ReCAPTCHA from "react-google-recaptcha";




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

    axios.post("http://localhost:8000/api/createuser", userData)

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
            className="elementor-section elementor-top-section elementor-element elementor-element-a400492 elementor-section-boxed elementor-section-height-default elementor-section-height-default overflow-visible"
            data-id="a400492"
            data-element_type="section"
            data-settings='{"background_background":"classic"}'
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ad07748"
                  data-id="ad07748"
                  data-element_type="column"
                >
                  <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                      <div
                        className="elementor-element elementor-element-ea37b3a elementor-widget elementor-widget-registration"
                        data-id="ea37b3a"
                        data-element_type="widget"
                        data-widget_type="registration.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="direo-directorist_custom_registration">
                            <div className="directorist-registration-wrapper directorist-w-100">
                              <div className="directorist-container-fluid">
                                <div className="directorist-row">
                                  <div className="directorist-col-md-6 directorist-offset-md-3">
                                    <div className="add_listing_title atbd_success_mesage">
                                      {/*Registration failed, so show notification.*/}
                                    </div>
                                  </div>
                                  <div className="directorist-col-md-6 directorist-offset-md-3">
                                    <div className="directory_register_form_wrap">
                                      <form method="post" onSubmit={onSubmit}>
                                        <div className="directorist-form-group directorist-mb-15">
                                          <label htmlFor="Username">
                                            Username <strong className="directorist-form-required">*</strong>
                                          </label>
                                          <input
                                            id="Username"
                                            className="directorist-form-element"
                                            type="text"
                                            name="Username"

                                            value={newUser.Username}
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="directorist-form-group directorist-mb-15">
                                          <label htmlFor="Email">
                                            Email <strong className="directorist-form-required">*</strong>
                                          </label>
                                          <input
                                            id="Email"
                                            className="directorist-form-element"
                                            type="text"
                                            name="Email"

                                            value={newUser.Email}
                                            onChange={handleChange}


                                          />
                                        </div>
                                        <div className="directorist-form-group directorist-mb-15">
                                          <label htmlFor="Password">Password</label>
                                          <input
                                            id="Password"
                                            className="directorist-form-element"
                                            type="text"
                                            name="Password"

                                            value={newUser.Password}
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="directorist-form-group directorist-mb-15">
                                          <label htmlFor="Firstname">First Name</label>
                                          <input
                                            id="Firstname"
                                            className="directorist-form-element"
                                            type="text"
                                            name="Firstname"

                                            value={newUser.Firstname}
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="directorist-form-group directorist-mb-15">
                                          <label htmlFor="Lastname">Last Name</label>
                                          <input
                                            className="directorist-form-element"
                                            id="Lastname"
                                            type="text"
                                            name="Lastname"

                                            value={newUser.Lastname}
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="directorist-form-group directorist-mb-15">
                                          <label htmlFor="Website">Website</label>
                                          <input
                                            id="Website"
                                            className="directorist-form-element"
                                            type="text"
                                            name="Website"

                                            value={newUser.Website}
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="directorist-form-group directorist-mb-15">
                                          <label htmlFor="Bio">About/bio</label>
                                          <textarea
                                            id="Bio"
                                            className="directorist-form-element"
                                            name="Bio"
                                            rows={10}

                                            value={newUser.Bio}
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="atbd_privacy_policy_area directory_regi_btn directorist-checkbox directorist-mb-15">
                                          <input id="cinform" type="checkbox" name="cinform" />
                                          <label htmlFor="cinform" className="directorist-checkbox__label">
                                            I agree to the{" "}
                                            <a
                                              style={{ color: "red" }}
                                              target="_blank"
                                              href="https://www.blogelse.com/privacy-policy/"
                                            >
                                              Privacy &amp; Policy
                                            </a>{" "}
                                            <span className="directorist-form-required">*</span>
                                          </label>
                                        </div>
                                        <div className="atbd_term_and_condition_area directory_regi_btn directorist-checkbox directorist-mb-15">
                                          <input id="listing_t" type="checkbox" name="t_c_check" />
                                          <label htmlFor="listing_t" className="directorist-checkbox__label">
                                            I agree with all{" "}
                                            <a
                                              style={{ color: "red" }}
                                              target="_blank"
                                              href="https://www.blogelse.com/terms-and-conditions/"
                                            >
                                              terms &amp; conditions
                                            </a>{" "}
                                            <span className="directorist-form-required">*</span>
                                          </label>
                                        </div>
                                        <style
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              "\n                        .directorist-g-recaptcha-wrap{\n                        text-align: center;\n                            display: -webkit-box;\n                            display: -ms-flexbox;\n                            display: flex;\n                            -webkit-box-orient: vertical;\n                            -webkit-box-direction: normal;\n                            -ms-flex-direction: column;\n                                    flex-direction: column;\n                            -webkit-box-align: center;\n                            -ms-flex-align: center;\n                                    align-items: center;\n                        }\n                        .dgr_show_recaptcha{\n                            margin-bottom: 0;\n                            margin-top: 20px;\n                        }\n                        #directorist.atbd_wrapper .directory_regi_btn {\n                            text-align: left;\n                        }\n                    "
                                          }}
                                        />

                                        <ReCAPTCHA
                                          sitekey="6Le5gwAhAAAAADNiPbsq1OT3mAoR3hoqoeAr53MG"
                                          onChange={onChange}
                                        />

                                        <div className="directory_regi_btn directorist-mb-15">
                                          <button
                                            disabled={!verify}
                                            type="submit"
                                            className="directorist-btn directorist-btn-primary"
                                            name="atbdp_user_submit" onSubmit={onSubmit}
                                          >
                                            Sign Up
                                          </button>
                                          <input type="hidden" defaultValue="1d243dbc1e" name="directorist_nonce" />
                                        </div>
                                        <div className="directory_regi_btn">
                                          <p>
                                            Already have an account? Please login{" "}
                                            <a href='/login'>Here</a>

                                          </p>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>{" "}
                                {/*ends .row*/}
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


export default Register;