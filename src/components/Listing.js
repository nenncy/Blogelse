
import '../Styles/header.css'
const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas, Row, Col } = require('react-bootstrap');


function Listing() {
    return (
        <>
            <Container>
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-01a37ca"
                            data-id="01a37ca"
                            data-element_type="column"
                        >
                            <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                    <div
                                        className="elementor-element elementor-element-4eec905 elementor-widget elementor-widget-spacer"
                                        data-id="4eec905"
                                        data-element_type="widget"
                                        data-widget_type="spacer.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner" />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-971c267 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
                                        data-id="971c267"
                                        data-element_type="widget"
                                        data-widget_type="image-box.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                    <img
                                                        width={150}
                                                        height={150}
                                                        src="https://www.blogelse.com/wp-content/uploads/2021/04/606c4b480b473-150x150.jpg"
                                                        className="attachment-thumbnail size-thumbnail"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                    <h3 className="elementor-image-box-title">
                                                        Business Listing
                                                    </h3>
                                                    <p className="elementor-image-box-description">
                                                        Add your free business listing to <br />
                                                        BlogElse <br />
                                                        <a
                                                            href="https://www.blogelse.com/add-listing/"
                                                            className="btn-gradient btn-gradient-two"
                                                        >
                                                            Add Your Business
                                                        </a>
                                                        <a href="https://backlinktool.io/p/AhO6gH0auaiDSnB1Fa4P.html">
                                                            .
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a8dff60"
                            data-id="a8dff60"
                            data-element_type="column"
                        >
                            <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                    <div
                                        className="elementor-element elementor-element-3d8b902 elementor-widget elementor-widget-spacer"
                                        data-id="3d8b902"
                                        data-element_type="widget"
                                        data-widget_type="spacer.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner" />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-c71fe3f elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
                                        data-id="c71fe3f"
                                        data-element_type="widget"
                                        data-widget_type="image-box.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                    <img
                                                        width={150}
                                                        height={150}
                                                        src="https://www.blogelse.com/wp-content/uploads/2021/04/606c4d28df613-150x150.jpg"
                                                        className="attachment-thumbnail size-thumbnail"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                    <h3 className="elementor-image-box-title">Guest Post</h3>
                                                    <p className="elementor-image-box-description">
                                                        Guest post to help grow your audience and your reach
                                                        <br />
                                                        <a
                                                            href="https://www.blogelse.com/guest-posting/"
                                                            className="btn-gradient btn-gradient-two"
                                                        >
                                                            Add Guest Posting
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <h1 class="elementor-heading-title elementor-size-default">Blogs</h1>

        </>
    )
}
export default Listing;