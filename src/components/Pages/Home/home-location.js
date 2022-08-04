
import '../../../Styles/Home/location.css';

import TypeAnimation from 'react-type-animation';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBusinessTime, faBuilding, faArrowRightLong, faBroom, faCar, faMobileScreenButton, faPersonBiking, faCartArrowDown, faUtensils, faCircle, faBaseball, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas, Row, Col } = require('react-bootstrap');
const { BrowserRouter, Routes } = require('react-router-dom');

function Location() {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="box mt-3">
              <div className="countries-image-container">
                <img alt="" src="https://www.blogelse.com/wp-content/uploads/2021/03/others.jpg" />
                <div className="countries-detail-section">
                  <h2 className="card-title" > Others </h2>
                  <p className="card-title"> 1 Listing </p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="box mt-3">
              <div className="countries-image-container">
                <img alt="" src="https://www.blogelse.com/wp-content/uploads/2021/03/USA.jpg" />
                <div className="countries-detail-section">
                  <h2 className="card-title" style={{ fontFamily: "sans-serif", color: "white", marginTop: "180px", fontSize: "22px", fontWeight: "600" }}> USA </h2>
                  <p className="card-title"> 1 Listing </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="box mt-3">
              <div className="countries-image-container">
                <img alt="" src="https://www.blogelse.com/wp-content/uploads/2021/03/UAE.jpg" />
                <div className="countries-detail-section">
                  <h2 className="card-title" style={{ fontFamily: "sans-serif", marginTop: "180px", color: "white", fontSize: "22px", fontWeight: "600" }}> UAE  </h2>
                  <p className="card-title"> 1 Listing </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="box mt-3">
              <div className="countries-image-container">
                <img alt="" src="https://www.blogelse.com/wp-content/uploads/2021/03/India.jpg" />
                <div className="countries-detail-section">
                  <h2 className="card-title" style={{ fontFamily: "sans-serif", marginTop: "180px", color: "white", fontSize: "22px", fontWeight: "600" }}> INDIA  </h2>
                  <p className="card-title"> 1 Listing </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="box mt-3">
              <div className="countries-image-container">
                <img alt="" src="https://www.blogelse.com/wp-content/uploads/2021/03/Canada.jpg" />
                <div className="countries-detail-section">
                  <h2 style={{ fontFamily: "sans-serif", color: "white", fontSize: "22px", marginTop: "150px", fontWeight: "600" }} className="card-title"> CANADA  </h2>
                  <p className="card-title"> 1 Listing </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="explore-ct">
        <div className="trip-section">
          <div className="row justify-content-center align-items-center">
            <div className="ct-header col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h1> Find <span style={{ color: '#fa8b0c'}} >
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    'Restaurants',
                    1000,
                    'Hotels',
                    1000,
                    'Shopping',
                    1000,
                    'Events',
                    1000
                  ]}
                  wrapper="a"
                  repeat={Infinity}
               
                />
              </span> <br /> for your next trip </h1>
              <div>
                <button className="add-business-btn">  Explore Now </button>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img alt="" className="explore-image " src="https://www.blogelse.com/wp-content/uploads/2020/12/cta-img.png" />
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Location;