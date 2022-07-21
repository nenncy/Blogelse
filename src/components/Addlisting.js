
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Container, Input, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Headroom from "react-headroom";

function AddListing() {

    //get plan 

    const [plan, setPlan] = useState([])

    const fetchPlans = async () => {
        const plan = await axios.get('http://localhost:8000/get/plans/features');
        console.log(plan);
        setPlan(plan.data);
    }
    useEffect(() => {
        fetchPlans();
    }, [])







    return (
        <>
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
                        className="elementor-section elementor-top-section elementor-element elementor-element-093eaca elementor-section-boxed elementor-section-height-default elementor-section-height-default overflow-visible"
                        data-id="093eaca"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                                <div
                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-713a1bf"
                                    data-id="713a1bf"
                                    data-element_type="column"
                                >
                                    <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                            <div
                                                className="elementor-element elementor-element-abb6d05 elementor-widget elementor-widget-add_listing_form"
                                                data-id="abb6d05"
                                                data-element_type="widget"
                                                data-widget_type="add_listing_form.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <div id="directorist-pricing-plan-container">
                                                        <div className="directorist-container-fluid">
                                                            <div className="directorist-row directorist-justify-content-center">
                                                                <div className="directorist-col-md-4 atpp_free plan">
                                                                    <div className="directorist-pricing directorist-pricing--1 directorist-pricing-special">
                                                                        <span className="atbd_popular_badge">
                                                                            Recommended
                                                                        </span>{" "}
                                                                        {plan.map((item)=>{
                                                                            return(
                                                                                <div className="directorist-pricing__title">
                                                                                <h4>{item.PlanName} Plan</h4>
                                                                                </div>

                                                                            )
                                                                        })}
                                                                       
                                                                        <div className="directorist-pricing__price">
                                                                            <p className="directorist-pricing__value">
                                                                                Free <small>/ 45 days</small>
                                                                                <small></small>
                                                                            </p>
                                                                            <p className="directorist-pricing_subtitle">
                                                                                <small>Per Package </small>
                                                                            </p>
                                                                            <small></small>
                                                                            <p />
                                                                            <p className="directorist-pricing__description" />
                                                                        </div>
                                                                        <div className="directorist-pricing__features">
                                                                            <ul>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>Auto
                                                                                    renewing{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check" />
                                                                                    15 Regular Listings{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check" />1 Featured
                                                                                    Listings{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Contact Owner{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Title
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Listing Content
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Slogan
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Pricing
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Location <small>(Maximum of 3) </small>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Tag <small>(Maximum of 3) </small>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Select Category{" "}
                                                                                    <small>(Maximum of 2) </small>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Hide contact owner form for single listing
                                                                                    page
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Zip/Post Code
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Phone 1
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Phone 2
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Fax
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Email
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Website
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Add Social
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Google Address
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Map
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Images <small>(Maximum of 3) </small>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Video Url
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Business Hours
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Features ?
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>Allow
                                                                                    Customer Review{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>All
                                                                                    Categories
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-times"> </span>Claim
                                                                                    Badge Included{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Booking Included{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>Live
                                                                                    Chat Included{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>Mark
                                                                                    as Sold Included{" "}
                                                                                </li>
                                                                            </ul>

                                                                            
                                                                            <div className="directorist-pricing__action">
                                                                                <input
                                                                                    id="fee_plans[1777]"
                                                                                    type="hidden"
                                                                                    defaultValue={1777}
                                                                                    name="fm_plans"
                                                                                />
                                                                                <label htmlFor="fee_plans[1777]">
                                                                                    <a
                                                                                        className="directorist-btn directorist-btn-block directorist-pricing__action--btn"
                                                                                        href="https://www.blogelse.com/add-listing/?directory_type=73&plan=1777"
                                                                                        onclick="return true;"
                                                                                    >
                                                                                        Continue
                                                                                    </a>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="directorist-col-md-4 atpp_business plan">
                                                                    <div className="directorist-pricing directorist-pricing--1 ">
                                                                        <div className="directorist-pricing__title">
                                                                            <h4>Business Plan</h4>
                                                                        </div>
                                                                        <div className="directorist-pricing__price">
                                                                            <p className="directorist-pricing__value">
                                                                                <sup>$</sup>
                                                                                10 <sup />
                                                                                <small>/ Lifetime</small>
                                                                                <small></small>
                                                                            </p>
                                                                            <p className="directorist-pricing_subtitle">
                                                                                <small>Per Package </small>
                                                                            </p>
                                                                            <small></small>
                                                                            <p />
                                                                            <p className="directorist-pricing__description" />
                                                                        </div>
                                                                        <div className="directorist-pricing__features">
                                                                            <ul>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>Auto
                                                                                    renewing{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check" />
                                                                                    <span className="atbd_color-success">
                                                                                        Unlimited
                                                                                    </span>{" "}
                                                                                    Regular Listings{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check" />8 Featured
                                                                                    Listings{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Contact Owner{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Title
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Listing Content
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Slogan
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Pricing
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Location{" "}
                                                                                    <small>(Unlimited Location) </small>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Tag <small>(Unlimited Tag) </small>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Select Category{" "}
                                                                                    <small>(Unlimited Select Category) </small>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Hide contact owner form for single listing
                                                                                    page
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Zip/Post Code
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Phone 1
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Phone 2
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Fax
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Email
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Website
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Add Social
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Google Address
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Map
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Images <small>(Unlimited Images) </small>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Video Url
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Business Hours
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Features ?
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>Allow
                                                                                    Customer Review{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>All
                                                                                    Categories
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>Claim
                                                                                    Badge Included{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>
                                                                                    Booking Included{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>Live
                                                                                    Chat Included{" "}
                                                                                </li>
                                                                                <li>
                                                                                    <span className="fa fa-check"> </span>Mark
                                                                                    as Sold Included{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <div className="directorist-pricing__action">
                                                                                <input
                                                                                    id="fee_plans[1776]"
                                                                                    type="hidden"
                                                                                    defaultValue={1776}
                                                                                    name="fm_plans"
                                                                                />
                                                                                <label htmlFor="fee_plans[1776]">
                                                                                    <a
                                                                                        className="directorist-btn directorist-btn-block directorist-pricing__action--btn"
                                                                                        href="https://www.blogelse.com/add-listing/?directory_type=73&plan=1776"
                                                                                        onclick="return true;"
                                                                                    >
                                                                                        Continue
                                                                                    </a>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*ends. row*/}
                                                        </div>
                                                    </div>
                                                    {/*ends. directorist-pricing-plan-container*/}
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

export default AddListing;
