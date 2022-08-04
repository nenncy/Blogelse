import logo from '../assets/logo512.png';

import Headroom from "react-headroom";
import Example from './Register';
import React, { useState } from 'react';
import Navigation from '../components/Navbar/navbar-other';
import '../Styles/about.css';

function About() {

  return (
    <>
      <div className='header-scroller-transparent'>
        <Navigation ></Navigation>
        {/* navbar */}
        <div className='bg-about'>
          <div className='wrapper-contact'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-5 col-md-6'>
                  <h1>
                    Place your Business or Explore Anything what you want
                  </h1>
                </div>
                <div className='col-lg-6 offset-lg-1 col-md-6 offset-md-0 col-sm-8 offset-sm-2'>
                  <div className='img-fluid'>
                    <img src='https://www.blogelse.com/wp-content/uploads/2019/10/about-illustration.png'>
                    </img>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='ImageFeatureContainer'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7'>
              <div className='LeftResourceBox'>
                <img src='https://www.blogelse.com/wp-content/uploads/2019/10/about-img1.png'>
                </img>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className='RightResourceBox'>
                <h1>
                  About Our Community and Our Expertise
                </h1>
                <p>
                  BlogElse is one of the rising free blogging & Listing websites with the aim to provide a platform where bloggers or anybody else can showcase their great ideas about anything.
                </p>
                <p>
                  We are building the largest and most comprehensive portal about the world’s best listing. In BlogElse you can easily find detailed information about, see what others have to say, and even share your own business details and experiences. This information is fun and useful!
                </p>
              </div>

            </div>
          </div>
          <hr className='mt-5' />
        </div>

      </div>
      <div className='WhyListContainer'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5 col-md-6 '>
              <div className='LeftBox'>
                <h2>Why List on <span>BlogElse</span></h2>
                <div className='steps'>
                  <ul>
                    <li>
                      <div className='list-count'>
                        <span>1</span>
                      </div>
                      <div className='list-content'>
                        <h4>Easy Registration</h4>
                        <p>
                          Select from service categories to drop your business name in and it is always free for your paid promotion!
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='list-count'>
                        <span>1</span>
                      </div>
                      <div className='list-content'>
                        <h4>Easy Registration</h4>
                        <p>
                          Select from service categories to drop your business name in and it is always free for your paid promotion!
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='list-count'>
                        <span>1</span>
                      </div>
                      <div className='list-content'>
                        <h4>Easy Registration</h4>
                        <p>
                          Select from service categories to drop your business name in and it is always free for your paid promotion!
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='list-count'>
                        <span>1</span>
                      </div>
                      <div className='list-content'>
                        <h4>Easy Registration</h4>
                        <p>
                          Select from service categories to drop your business name in and it is always free for your paid promotion!
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-6  offset-lg-2'>
              <div className='RightBox'>
                <img src='https://www.blogelse.com/wp-content/uploads/2019/10/about-img2.png'>
                </img>
              </div>

            </div>
          </div>

        </div>

      </div>

        <div className='subscriberWrapper'>
          <div className='container'>
            <div className='row'>
              <div className="col-md-8 offset-md-2">
                <h1>Subscribe to Newsletter</h1><p>Subscribe to get update and information. Don't worry, we won't send spam!</p>
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-8 offset-sm-2">
                    <form action="#" method="post" className="subscribe-form m-top-40">
                      <div className="form-group">
                        <span className="la la-envelope-o"></span>
                        <input type="email" placeholder="Enter your email" name="EMAIL" required="" />
                      </div>
                      <input type="submit" className="btn-sub-gradient-one" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About;