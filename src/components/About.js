import logo from '../assets/logo512.png';
import '../Styles/navbar.css'
import Headroom from "react-headroom";
import Example from './Register';
import React, { useState } from 'react';


function About() {

  return (
    <>

      <section className="about-wrapper bg-gradient-ps">
        <div className="about-intro content_above">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <h1 id="header_title">
                  Place your Business or Explore Anything what you want
                </h1>{" "}
              </div>
              <div className="col-lg-6 offset-lg-1 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
                <img
                  width={540}
                  height={478}
                  src="https://www.blogelse.com/wp-content/uploads/2019/10/about-illustration.png"
                  className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                  alt=""
                  loading="lazy"
                  srcSet="https://www.blogelse.com/wp-content/uploads/2019/10/about-illustration.png 540w, https://www.blogelse.com/wp-content/uploads/2019/10/about-illustration-300x266.png 300w"
                  sizes="(max-width: 540px) 100vw, 540px"
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
      <section
  className="elementor-section elementor-top-section elementor-element elementor-element-fce6232 elementor-section-boxed elementor-section-height-default elementor-section-height-default overflow-visible"
  data-id="fce6232"
  data-element_type="section"
>
  <div className="elementor-container elementor-column-gap-default">
    <div className="elementor-row">
      <div
        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-da243c1"
        data-id="da243c1"
        data-element_type="column"
      >
        <div className="elementor-column-wrap elementor-element-populated">
          <div className="elementor-widget-wrap">
            <div
              className="elementor-element elementor-element-1c01761 elementor-widget elementor-widget-image"
              data-id="1c01761"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-image">
                  <img
                    width={445}
                    height={373}
                    src="https://www.blogelse.com/wp-content/uploads/2019/10/about-img1.png"
                    className="attachment-large size-large"
                    alt=""
                    loading="lazy"
                    srcSet="https://www.blogelse.com/wp-content/uploads/2019/10/about-img1.png 445w, https://www.blogelse.com/wp-content/uploads/2019/10/about-img1-300x251.png 300w"
                    sizes="(max-width: 445px) 100vw, 445px"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a2d4ed4"
        data-id="a2d4ed4"
        data-element_type="column"
      >
        <div className="elementor-column-wrap">
          <div className="elementor-widget-wrap"></div>
        </div>
      </div>
      <div
        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b7fab4e"
        data-id="b7fab4e"
        data-element_type="column"
      >
        <div className="elementor-column-wrap elementor-element-populated">
          <div className="elementor-widget-wrap">
            <div
              className="elementor-element elementor-element-80ef37b elementor-widget elementor-widget-heading"
              data-id="80ef37b"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-default">
                  About Our Community and Our Expertise
                </h1>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-c2922b7 elementor-widget elementor-widget-text-editor"
              data-id="c2922b7"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p>
                    BlogElse is one of the rising free blogging &amp; Listing
                    websites with the aim to provide a platform where bloggers
                    or anybody else can showcase their great ideas about
                    anything.
                  </p>
                  <p>
                    We are building the largest and most comprehensive portal
                    about the world’s best listing. In BlogElse you can easily
                    find detailed information about, see what others have to
                    say, and even share your own business details and
                    experiences. This information is fun and useful!
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default About;