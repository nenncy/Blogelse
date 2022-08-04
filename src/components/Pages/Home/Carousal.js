import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../Styles/Home/carousal.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBusinessTime, faBuilding, faArrowRightLong, faBroom, faCar, faMobileScreenButton, faPersonBiking, faCartArrowDown, faUtensils, faCircle, faBaseball, faHeart, faShoppingCart, faBicycle } from "@fortawesome/free-solid-svg-icons"
import { Container } from 'react-bootstrap';
// import '../Styles/blog.css'
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: [
        <div className="owl-dots">
            <button role="button" className="owl-dot active">
                <span />
            </button>
            <button role="button" className="owl-dot">
                <span />
            </button>
        </div>
    ],
    loop: true,
    autoplay: false,
    autoHeight: true,
    navText: [
        <div className="owl-nav">
            <button
                type="button"
                role="presentation"
                className="owl-prev disabled"
            >
                <span className="la la-long-arrow-left" />
            </button>
            <button
                type="button"
                role="presentation"
                className="owl-next"
            >
                <span className="la la-long-arrow-right" />
            </button>
        </div>
    ],

    // smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
            loop: false
        },
      
        400: {
            items: 1,
            loop: false
        },
        600: {
            items: 3,
            loop: false
        },
        700: {
            items: 4,
            loop: false
        },

        900: {
            items: 4,
            loop: false,
            nav: false,


        },
        1000: {
            items: 6,
            loop: false,
            nav: false,

        }
    },
};


function OwlCarousel1() {
    return (
        <Container>
            <div className="container ">
                <div className="row">

                    <div className="elementor-widget-container">
                        <div className="section-title">
                            {" "}
                            <h3> What are you interested in?​ </h3>{" "}
                            <p>
                                Discover best things to do restaurants, shopping, hotels,
                                cafes, places, and more around
                            </p>
                        </div>{" "}
                    </div>
                </div>
               
                    <div className="widget-container">
                        <div className="category-slider">
                            <OwlCarousel className='owl-theme' {...options}>
                                <div className='item'>
                                    <div className="category-slider__single" >
                                        <div className='list'>
                                        <FontAwesomeIcon icon={faCar} style={{
                                            color: 'white',
                                            height: '80px', background: '#ff8800',
                                            padding: '26px',
                                            width:'76px',
                                              height:'74px',
                                        
                                            borderRadius: '50%'
                                        }}></FontAwesomeIcon>
                                        </div>
                                   
                                        <a
                                            href="#"
                                            className="stretched-link"
                                        >
                                         Store
                                        </a>
                                      <p>1 Listing</p>
                                    </div>

                                </div>
                                <div className='item'>
                                    <div className="category-slider__single">
                                 
                                        <FontAwesomeIcon icon={faPersonBiking} style={{
                                            color: 'white',
                                            height: '80px', 
                                            background: '#f88858',
                                            padding: '26px',
                                            width:'76px',
                                        height:'74px',
                                            borderRadius: '50%'
                                        }}></FontAwesomeIcon>
                                        <a
                                            href="#"
                                            className="stretched-link"
                                        >
                                            Outdoor Activities
                                        </a>
                                        <p>1 Listing</p>
                                    </div>
                                </div>
                                <div className='item'><div className="category-slider__single" >
                                
                                    <FontAwesomeIcon icon={faBaseball} style={{
                                        color: 'white',
                                        height: '80px', background: '#08dee5',
                                        padding: '26px',
                                        width:'76px',
                                        height:'74px',
                                        borderRadius: '50%'
                                    
                                    }}></FontAwesomeIcon>
                                    <a
                                        href="#"
                                        className="stretched-link"
                                    >
                                        Sports
                                    </a>
                                    <p>1 Listing</p>
                                </div>
                                </div>
                                <div className='item'><div className="category-slider__single" >
                                
                                    <FontAwesomeIcon icon={faShoppingCart} style={{
                                        color: 'white',
                                        height: '80px', background: '#954ab3',
                                        padding: '26px',
                                        width:'76px',
                                        height:'74px',
                                        borderRadius: '50%'
                                    }}></FontAwesomeIcon>
                                    <a
                                        href="https://www.blogelse.com/single-category/restaurants-foods-beverages/"
                                        className="stretched-link"
                                    >
                                     Shopping
                                    </a>
                                    <p>1 Listing</p>
                                </div>
                                </div>
                                <div className='item'><div className="category-slider__single" >
                                
                                    <FontAwesomeIcon icon={faUtensils} style={{
                                        color: 'white',
                                        height: '80px', background: '#0d6efd',
                                        padding: '26px',
                                        width:'76px',
                                        height:'74px',
                                        borderRadius: '50%'
                                    }}></FontAwesomeIcon>
                                    <a
                                        href="https://www.blogelse.com/single-category/restaurants-foods-beverages/"
                                        className="stretched-link"
                                    >
                                        Restaurants
                                    </a>
                                    <p>1 Listing</p>
                                </div>
                                </div>
                                <div className='item'><div className="category-slider__single" >
                                    
                                    <FontAwesomeIcon icon={faBuilding} style={{
                                        color: 'white',
                                        height: '80px', background: 'pink',
                                        padding: '26px',
                                        width:'76px',
                                        height:'74px',
                                        borderRadius: '50%'
                                    }}></FontAwesomeIcon>
                                    <a
                                        href="#"
                                        className="stretched-link"
                                    >
                                        Real Estate
                                    </a>
                                    <p>1 Listing</p>
                                </div>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
               


            </div>
            <div className="container">
                <div className="section-title">
                    {" "}
                    <h3> Explore locations We Love </h3>{" "}
                    <p>
                        You can add your business to BlogElse, or find and claim it to manage its
                        lists listing profile.
                    </p>
                </div>{" "}
            </div>
        </Container>

    );
}

export default OwlCarousel1;