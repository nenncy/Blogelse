
import logo from '../assets/logo512.png';
import '../App.css'

import '../Styles/header.css'

const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas, Row, Col } = require('react-bootstrap');
const { BrowserRouter, Routes } = require('react-router-dom');

function Header() {
    return (
        <>
            {/* <section className='header-section-intro'>HELLO THERE!</section> */}
            <div className='elementor-section-wrap'>
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-7892faec elementor-section-boxed elementor-section-height-default elementor-section-height-default overflow-visible"
                    data-id="7892faec"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-49a2e5b9"
                                data-id="49a2e5b9"
                                data-element_type="column"
                            >
                                <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div
                                            className="elementor-element elementor-element-64a1f525 elementor-widget elementor-widget-heading"
                                            data-id="64a1f525"
                                            data-element_type="widget"
                                            data-widget_type="heading.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <h1 className="elementor-heading-title elementor-size-default">
                                                    Find the good out there.
                                                </h1>{" "}
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-55a16ea elementor-widget elementor-widget-search_form"
                                            data-id="55a16ea"
                                            data-element_type="widget"
                                            data-widget_type="search_form.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <div
                                                    id="directorist"
                                                    className="atbd_wrapper directory_search_area ads-advaced--wrapper search-home-style2"
                                                >
                                                    <Row>
                                                        <Col className="col-md-8 offset-md-2">
                                                            <div className="directorist-search-contents">
                                                                <form>

                                                                    <div className="directorist-search-form-wrap directorist-with-search-border">
                                                                        <input
                                                                            type="hidden"
                                                                            name="directory_type"
                                                                            id="listing_type"
                                                                            defaultValue="general"
                                                                        />
                                                                        <div className="directorist-search-form-box">
                                                                            <div className="directorist-search-form-top directorist-flex directorist-align-center directorist-search-form-inline">
                                                                                <div className="row atbdp-search-form atbdp-search-form--two">
                                                                                    <Col xs={8} md={6}>
                                                                                        <div className="single_search_field search_query">
                                                                                            <span className="search_query__label">
                                                                                                Find
                                                                                            </span>
                                                                                            <input
                                                                                                className="form-control search_fields"
                                                                                                type="text"
                                                                                                name="q"
                                                                                                autoComplete="off"
                                                                                                placeholder="Ex: shopping, restaurant..."
                                                                                            />
                                                                                            <div className="directory_home_category_area">
                                                                                                <ul>
                                                                                                    <li>
                                                                                                        <a href="https://www.blogelse.com/single-category/business/">
                                                                                                            <span
                                                                                                                className="sc-icon fa fas fa-business-time color-1"
                                                                                                                aria-hidden="true"
                                                                                                            />{" "}
                                                                                                            <span>Business</span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a href="https://www.blogelse.com/single-category/others/">
                                                                                                            <span
                                                                                                                className="sc-icon fa fas fa-circle color-2"
                                                                                                                aria-hidden="true"
                                                                                                            />{" "}
                                                                                                            <span>Others</span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a href="https://www.blogelse.com/single-category/automotive/">
                                                                                                            <span
                                                                                                                className="sc-icon fa fas fa-car color-3"
                                                                                                                aria-hidden="true"
                                                                                                            />{" "}
                                                                                                            <span>Automotive</span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a href="https://www.blogelse.com/single-category/financial-services/">
                                                                                                            <span
                                                                                                                className="sc-icon fa fas fa-mobile color-4"
                                                                                                                aria-hidden="true"
                                                                                                            />{" "}
                                                                                                            <span>Financial Services</span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a href="https://www.blogelse.com/single-category/health-fitness/">
                                                                                                            <span
                                                                                                                className="sc-icon fa fas fa-heart color-5"
                                                                                                                aria-hidden="true"
                                                                                                            />{" "}
                                                                                                            <span>Health &amp; Fitness</span>
                                                                                                        </a>
                                                                                                    </li>{" "}
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Col>
                                                                                    <Col xs={8} md={4}><div className="single_search_field atbdp_map_address_field">
                                                                                        <div className="atbdp_get_address_field">
                                                                                            <span className="search_query__label">
                                                                                                Where
                                                                                            </span>
                                                                                            <input
                                                                                                type="text"
                                                                                                id="address"
                                                                                                name="address"
                                                                                                autoComplete="off"
                                                                                                defaultValue=""
                                                                                                placeholder="Your city..."
                                                                                                className="form-control location-name"
                                                                                            />
                                                                                            {/* <span class="atbd_get_loc la la-crosshairs"></span> */}
                                                                                        </div>
                                                                                        <div className="address_result" />{" "}
                                                                                        <input
                                                                                            type="hidden"
                                                                                            id="cityLat"
                                                                                            name="cityLat"
                                                                                            defaultValue=""
                                                                                        />
                                                                                        <input
                                                                                            type="hidden"
                                                                                            id="cityLng"
                                                                                            name="cityLng"
                                                                                            defaultValue=""
                                                                                        />
                                                                                    </div>
                                                                                    </Col>
                                                                                    <Col xs={8} md={2}>
                                                                                        <div className="atbd_submit_btn">
                                                                                            <button
                                                                                                type="submit"
                                                                                                className="btn-gradient btn-gradient-two"
                                                                                            >
                                                                                                Search{" "}
                                                                                            </button>
                                                                                        </div>
                                                                                    </Col>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                                <div className="directorist-listing-category-top">
                                                                    <ul>
                                                                        <Row className='justify-content-md-center'>

                                                                            <Col xs={6} md={3}>
                                                                                <li>
                                                                                    <a href="#">
                                                                                        <span className="fa fas fa-business-time color1 " />
                                                                                        <p>Business</p>
                                                                                    </a>
                                                                                </li>
                                                                            </Col>
                                                                            <Col xs={6} md={3}>
                                                                                <li>
                                                                                    <a href="#">
                                                                                        <span className="fa fas fa-circle color2 " />
                                                                                        <p>Others</p>
                                                                                    </a>
                                                                                </li>
                                                                            </Col>
                                                                            <Col xs={6} md={3}>
                                                                                <li>
                                                                                    <a href="#">
                                                                                        <span className="fa fas fa-car color3 " />
                                                                                        <p>Automotive</p>
                                                                                    </a>
                                                                                </li>
                                                                            </Col>
                                                                            <Col xs={6} md={3}>
                                                                                <li>
                                                                                    <a href="#">
                                                                                        <span className="fa fas fa-car color3 " />
                                                                                        <p>Automotive</p>
                                                                                    </a>
                                                                                </li>
                                                                            </Col>
                                                                            <Col xs={6} md={3}>
                                                                                <li>
                                                                                    <a href="#">
                                                                                        <span className="fa fas fa-car color3 " />
                                                                                        <p >Automotive</p>
                                                                                    </a>
                                                                                </li>
                                                                            </Col>
                                                                        </Row>
                                                                    </ul>
                                                                </div>{"            "}
                                                            </div>
                                                        </Col>
                                                    </Row>
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
        </>

    );
}
export default Header;