import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Container, Input, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Navigate } from "react-router-dom";

import "../Styles/login.css";
import Navigation from "./Navbar/navbar-other";
import useCollapse from "react-collapsed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import HttpService from "../utils/http.service";
import { GoogleLogin } from "react-google-login";

function Login() {
  //goggle
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res);

    const goggleuserdata = {
      tokenId: res.tokenId,
    };
    axios
      .post("http://localhost:8000/api/login/gogglesignin", goggleuserdata)

      .then((response) => {
        if (response) {
          console.log(response.data);
          var item = response.data.token;
          localStorage.setItem("token", item);
          toast.success("Login succesufull");
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        //console.log(error.response.data);
        toast.error(error);
      });
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢`);
  };

  const navigate = useNavigate();

  const config = {
    duration: 1000,
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  //sign in method
  const [newUser, setNewUser] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      Username: newUser.Username,
      Email: newUser.Email,
      Password: newUser.Password,
    };

    //dispatch(login(userData));

    axios
      .post(HttpService.loginUrl, userData)

      .then((response) => {
        console.log(response.data.data);

        toast.success("Login succesufull");

        //navigation();
        var item = response.data.data.token;

        localStorage.setItem("token", item);

        navigate("/dashboard");
      })
      .catch((error) => {
        //console.log(error.response.data);
        toast.error(error.response.data.msg);
      });
  };

  //recover password
  const [password, setPassword] = useState({
    Email: "",
  });

  const passwordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();

    const recoverdata = {
      Email: password.Email,
    };

    axios
      .post(HttpService.forgotPassword, recoverdata)
      .then((response) => {
        navigate("/dashboard");
        toast.success(response.data.msg);
      })
      .catch((error) => {
        //console.log(error.response.data);
        toast.error(error.response.data.msg);
        <ToastContainer></ToastContainer>;
      });
  };
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="header-scroll-transparent">
        <Navigation></Navigation>
        {/* navbar */}
        <div className="bg-holder">
          {/* <img src="https://www.blogelse.com/wp-content/uploads/2019/10/breadcrumb1.jpg" style={{ height: '270px' }}>
                </img> */}

          <div className="wrapper-contact-above-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="title-content">
                    Login - BlogElse | Blog Submission Site | Business Listing
                    Site
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        Login - BlogElse | Blog Submission Site | Business
                        Listing Site
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="loginform-container">
              <Container>
                <Form method="post" onSubmit={onSubmit}>
                  <Form.Group>
                    <Form.Label className="lable-tag">Username</Form.Label>
                    <Form.Control
                      type="text"
                      className="directorist-form-element"
                      id="Username"
                      name="Username"
                      value={newUser.Username}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="lable-tag">Password</Form.Label>
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

                  <Button
                    className="submit-btn-login"
                    variant="primary"
                    type="submit"
                    name="submit"
                  >
                    Submit
                  </Button>

                  <Form.Group>
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                  <div className="recovery_pass">
                    <a {...getToggleProps()}> Recover Password</a>
                  </div>
                  <div className="social_login">
                    <button type="button" className="btn fb-login ">
                      <FontAwesomeIcon
                        style={{
                          color: "#3B5999",
                          height: "20px",
                          marginRight: "10px",
                        }}
                        icon={faFacebook}
                      ></FontAwesomeIcon>{" "}
                      Facebook
                    </button>
                    <button type="button" className="btn fb-google ">
                      <FontAwesomeIcon
                        style={{
                          color: "#DD4B39",
                          height: "20px",
                          marginRight: "10px",
                        }}
                        icon={faGoogle}
                      ></FontAwesomeIcon>
                      Google
                    </button>
                  </div>
                  <GoogleLogin
                    clientId="707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                    style={{ marginTop: "100px" }}
                    isSignedIn={true}
                  />
                  <div className="donthave-account">
                    <p>
                      Don't have an account? <a href="/register">Sign Up</a>
                    </p>
                  </div>
                </Form>

                <div {...getCollapseProps()}>
                  <div className="directorist-mt-15">
                    <Form method="post" onSubmit={HandleSubmit}>
                      <fieldset className="directorist-form-group">
                        <p>
                          Please enter your email address. You will receive a
                          new password via email.
                        </p>
                        <Form.Group>
                          <Form.Label className="lable-tag">
                            Email address
                          </Form.Label>
                          <Form.Control
                            className="directorist-form-element"
                            name="Email"
                            id="Email"
                            placeholder="eg. mail@example.com"
                            required="required"
                            value={password.Email}
                            onChange={passwordChange}
                            type="email"
                          />
                        </Form.Group>
                        <Button
                          type="submit"
                          className="directorist-btn directorist-btn-primary"
                          id="submit"
                          name="submit"
                        >
                          Get New Password
                        </Button>
                      </fieldset>
                    </Form>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
