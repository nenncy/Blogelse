
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import NavbarOther from '../Navbar/navbar-other';
import '../../Styles/Addlisting/addlisting.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import {Row,Col} from 'react-bootstrap'
import HttpService from '../../utils/http.service';

function AddListing() {

    //get plan 

    const [plan, setPlan] = useState([])

    const fetchPlans = async () => {
        const plan = await axios.get(HttpService.addListingUrl);
        console.log(plan);
        setPlan(plan.data);
    }
    useEffect(() => {
        fetchPlans();
    }, [])



    return (
        <>
            <div className='header-scroll-transparent'>
                <NavbarOther />
                {/* navbar */}
                <div className='bg-holder'>
                    {/* <img src="https://www.blogelse.com/wp-content/uploads/2019/10/breadcrumb1.jpg" style={{ height: '270px' }}>
                </img> */}

                    <div className='wrapper-contact-above-text'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <h1 className='title-content'>
                                        Add Listing - BlogElse | Blog Submission Site | Business Listing Site
                                    </h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="/">Home </a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                {" "}
                                                Add Listing - BlogElse | Blog Submission Site | Business Listing Site
                                            </li>
                                        </ol>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>


                <div className='card-container'>

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                        <div className='row'>
                        {plan.map((item) => {
                            return (

                                <div className='col-12 col-md-3 col-xl-6 col-md-6 justify-content-center md-offset-4' key={item._id}>
                                    <div className='plan-card'>
                                        <div className='container-plans'>
                                            <div className="box mt-5 mb-3" style={{ "textAlign": "center" }}>
                                            {(item.PlanName == 'Free')?    <span className="atbd_popular_badge">  Recommended  </span> : <span className="atbd_badge"></span>}
                                                <h3 className="plan-heading-style"> {item.PlanName} </h3>
                                            </div>
                                            <hr />
                                            <div className=" box mt-5 mb-5" style={{ "textAlign": "center" }}>
                                                <h3 className="days-plan-styling"> <span> $ </span>
                                                    {item.PlanPrize} <span> / {item.Duration}</span> </h3>
                                                <p> Per Package</p>
                                            </div>
                                            <hr />
                                            {item.features.map((feature) => {
                                                return (
                                                    <ul className="ul-styling" key={feature._id}>


                                                        <div className="d-flex">
                                                            <li className="list-style" >
                                                                <FontAwesomeIcon className="font-awesome-style" style={{ color: feature.active ? "green" : "red", marginRight: '10px', height: '16px' }} icon={feature.active ? faCheck : faTimes} />
                                                                <span>{feature.Featurename}</span>
                                                            </li>
                                                        </div>

                                                    </ul>

                                                )
                                            })}

                                            <div style={{ "textAlign": "center" }}>
                                                <button className="continue-btn" >  Continue  </button>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            )
                        }
                        )}
                    </div>

                        </Col>
                    </Row>

                   


                </div>
            </div>
        </>

    );
}

export default AddListing;
