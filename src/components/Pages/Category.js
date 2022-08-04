import Navigation from '../Navbar/navbar-other';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import HttpService from '../../utils/http.service';

function Category() {

    const [category, setCategory] = useState([]);

    const fetchCategory = async () => {
        const category = await axios.get(HttpService.GetCategoryUrl);

        console.log(category);
        setCategory(category.data);

    }

    useEffect(() => {
        fetchCategory();
    }, [])



    return (
        <>
            <div className='header-scroll-transparent'>
                <Navigation />
                <div className='bg-holder'>

                    <div className='wrapper-contact-above-text'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <h1 className='title-content'>
                                        All Categories - BlogElse | Blog Submission Site | Business Listing Site
                                    </h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='category-container'>
                <div className="row">
                    {category.map((curEle) => {
                        return (
                            <div className="col-sm-12 col-12 col-md-4 col-xl-3" key={curEle._id}>
                                <div className="box mt-3">
                                    <div className="countries-image-container">
                                        <img alt="" style={{ height: '173px' }} src={curEle.CategoryImage} />
                                        <div className="allcountries-detail-section">
                                            <FontAwesomeIcon icon={Icons[curEle.icons]} style={{marginLeft: '123px',marginTop: '20px' , height:'30px'}} />
                                            <div className='category'>
                                                <h2 className="category-title">{curEle.categoryName} </h2>
                                                <p className="category-title"> 1 Listing </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                </div>


            </div>



        </>

    )
}

export default Category;
