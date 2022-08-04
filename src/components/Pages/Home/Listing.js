
import '../../../Styles/Home/listing.css'
const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas, Row, Col } = require('react-bootstrap');


function Listing() {
    return (
        <>
            <Container>
                <div className='listing-type'>
                    <div className='listing-sub'>
                        <Row className='listing-row'>
                        <Col xs={12} md={6} >
                                <figure className="image-box-img">
                                    <img
                                        width={150}
                                        height={150}
                                        src="https://www.blogelse.com/wp-content/uploads/2021/04/606c4b480b473-150x150.jpg"
                                        className="attachment-thumbnail size-thumbnail"
                                        alt=""
                                        loading="lazy"
                                    />
                                </figure>
                                <div className="image-box-content">
                                    <h3 className="elementor-image-box-title">
                                        Business Listing
                                    </h3>
                                    <p className="image-box-description">
                                        Add your free business listing to <br />
                                        BlogElse <br />
                                        <a
                                            href="/addlisting"
                                            className="btn-gradient btn-gradient-two"
                                        >
                                            Add Your Business
                                        </a>
                                        <a href="https://backlinktool.io/p/AhO6gH0auaiDSnB1Fa4P.html">
                                            
                                        </a>
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={6} >
                                <figure className="image-box-img">
                                    <img
                                        width={150}
                                        height={150}
                                        src="https://www.blogelse.com/wp-content/uploads/2021/04/606c4b480b473-150x150.jpg"
                                        className="attachment-thumbnail size-thumbnail"
                                        alt=""
                                        loading="lazy"
                                    />
                                </figure>
                                <div className="image-box-content">
                                    <h3 className="elementor-image-box-title">
                                        Business Listing
                                    </h3>
                                    <p className="image-box-description">
                                        Add your free business listing to <br />
                                        BlogElse <br />
                                        <a
                                            href="/addlisting"
                                            className="btn-gradient btn-gradient-two"
                                        >
                                            Add Your Business
                                        </a>
                                        <a href="https://backlinktool.io/p/AhO6gH0auaiDSnB1Fa4P.html">
                                            
                                        </a>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>
         
            </Container>

            <h1 className="heading-title-blogs">Blogs</h1>

        </>
    )
}
export default Listing;