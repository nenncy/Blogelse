
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import NavbarOther from '../Navbar/navbar-other';
import HttpService from '../../utils/http.service';



function Location() {

    const [location, setLocation] = useState([]);

    const fetchLocation = async () => {
        const location = await axios.get(HttpService.GetLocationUrl);

        console.log(location);
        setLocation(location.data.data);

    }

    useEffect(() => {
        fetchLocation();
    }, [])

    return (
        <>
            <div className='header-scroll-transparent'>
                <NavbarOther />
                <div className='bg-holder'>

                    <div className='wrapper-contact-above-text'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <h1 className='title-content'>
                                        All Locations - BlogElse | Blog Submission Site | Business Listing Site
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="location-container">
          
                <div className="row">
                {location.map((curEle) => {
                        return (
                    <div className="col-sm-12 col-12 col-md-4 col-xl-4" key={curEle._id}>
                                <div className="box mt-3">
                                    <div className="countries-image-container">
                                        <img alt="" style={{ height: '173px' }} src={curEle.LocationImage} />
                                        <div className="allcountries-detail-section">
                                            <h2 className="country-title"> {curEle.LocationName}</h2>
                                            <p className="country-title"> 1 Listing </p>
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

export default Location;