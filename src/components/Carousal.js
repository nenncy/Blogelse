import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Styles/carousal.css'
import '../Styles/header.css'
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
            items: 2,
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
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c7656e1"
                        data-id="c7656e1"
                        data-element_type="column"
                    >
                        <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                                <div
                                    className="elementor-element elementor-element-38cc39d elementor-widget elementor-widget-text-editor"
                                    data-id="38cc39d"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix"></div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-1517a42 elementor-widget elementor-widget-heading_pro section-title"
                                    data-id="1517a42"
                                    data-element_type="widget"
                                    data-widget_type="heading_pro section-title.default"
                                >
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
                                <div
                                    className="elementor-element elementor-element-da2cc69 elementor-widget elementor-widget-categories"
                                    data-id="da2cc69"
                                    data-element_type="widget"
                                    data-widget_type="categories.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="category-slider owl-carousel owl-loaded owl-drag">
                                            <OwlCarousel className='owl-theme' {...options}>
                                                <div className='item'>
                                                    <div className="category-slider__single" >
                                                        <span
                                                            className="category-icon fa fas fa-utensils color-3"
                                                            aria-hidden="true"
                                                        />
                                                        <a
                                                            href="https://www.blogelse.com/single-category/restaurants-foods-beverages/"
                                                            className="stretched-link"
                                                        >
                                                            Restaurants, Foods, Beverages
                                                        </a>
                                                        <span className="listing-count">
                                                            {" "}
                                                            1<span className="listing-label"> Listing</span>
                                                        </span>{" "}
                                                    </div>

                                                </div>
                                                <div className='item'>
                                                    <div className="category-slider__single">
                                                        <span className="category-icon fa fas fa-biking color-5" aria-hidden="true" />
                                                        <a
                                                            href="https://www.blogelse.com/single-category/outdoor-activities/"
                                                            className="stretched-link"
                                                        >
                                                            Outdoor Activities
                                                        </a>
                                                        <span className="listing-count">
                                                            {" "}
                                                            1<span className="listing-label"> Listing</span>
                                                        </span>{" "}
                                                    </div>
                                                </div>
                                                <div className='item'><div className="category-slider__single" >
                                                    <span
                                                        className="category-icon fa fas fa-utensils color-3"
                                                        aria-hidden="true"
                                                    />
                                                    <a
                                                        href="https://www.blogelse.com/single-category/restaurants-foods-beverages/"
                                                        className="stretched-link"
                                                    >
                                                        Restaurants
                                                    </a>
                                                    <span className="listing-count">
                                                        {" "}
                                                        1<span className="listing-label"> Listing</span>
                                                    </span>{" "}
                                                </div>
                                                </div>
                                                <div className='item'><div className="category-slider__single" >
                                                    <span
                                                        className="category-icon fa fas fa-utensils color-3"
                                                        aria-hidden="true"
                                                    />
                                                    <a
                                                        href="https://www.blogelse.com/single-category/restaurants-foods-beverages/"
                                                        className="stretched-link"
                                                    >
                                                        Restaurants
                                                    </a>
                                                    <span className="listing-count">
                                                        {" "}
                                                        1<span className="listing-label"> Listing</span>
                                                    </span>{" "}
                                                </div>
                                                </div>
                                                <div className='item'><div className="category-slider__single" >
                                                    <span
                                                        className="category-icon fa fas fa-utensils color-3"
                                                        aria-hidden="true"
                                                    />
                                                    <a
                                                        href="https://www.blogelse.com/single-category/restaurants-foods-beverages/"
                                                        className="stretched-link"
                                                    >
                                                        Restaurants
                                                    </a>
                                                    <span className="listing-count">
                                                        {" "}
                                                        1<span className="listing-label"> Listing</span>
                                                    </span>{" "}
                                                </div>
                                                </div>
                                                <div className='item'><div className="category-slider__single" >
                                                    <span
                                                        className="category-icon fa fas fa-utensils color-3"
                                                        aria-hidden="true"
                                                    />
                                                    <a
                                                        href="#"
                                                        className="stretched-link"
                                                    >
                                                        Restaurants
                                                    </a>
                                                    <span className="listing-count">
                                                        {" "}
                                                        1<span className="listing-label"> Listing</span>
                                                    </span>{" "}
                                                </div>
                                                </div>

                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-widget-container">
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