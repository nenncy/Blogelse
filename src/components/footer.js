import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import '../Styles/footer.css'

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>

            <h5 className="text-about">About Us</h5>
            <ul className="list-unstyled">
              <p>
                BlogElse is one of the rising free blogging & Listing websites with the aim to provide a platform where bloggers or anybody else can showcase their great ideas about anything.
              </p>

            </ul>




          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5 className="text-about">Company Info</h5>
            <ul className="list-unstyled">
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Our listing</a></li>
              <li><a href="#!">Privacy POlicy</a></li>
              <li><a href="#!">Terms and condition</a></li>
              <li><a href="#!">Contact us</a></li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5 className="text-about">Helpful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Login</a></li>
              <li><a href="#!">Sign Up</a></li>
              <li><a href="#!">blog</a></li>
              <li><a href="#!">Pricing Plan</a></li>
              <li><a href="#!">Guest Posting</a></li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5 className="text-about">Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <span className="cd"> <FontAwesomeIcon color="rgb(0, 97, 193)" icon={faFacebook} /></span>
                <span style={{ marginLeft: "10px" }}> Facebook
                </span></li>
              <li> <span className="cd"> <FontAwesomeIcon color="rgb(47, 151, 255)" icon={faTwitter} /></span>
                <span style={{ marginLeft: "10px" }}> Twitter  </span></li>
              <li>  <span className="cd"> <FontAwesomeIcon color="rgb(0, 97, 193)" icon={faPinterest} /></span>
                <span style={{ marginLeft: "10px" }}> Pintrest  </span></li>

            </ul>
          </Col>

        </Row>

        <hr className="mt-4" style={{ color: "grey" }} />
        <div className="footer-end">
          <div className="footer-logo">
            <img alt="" className="logo-img" src="https://www.blogelse.com/wp-content/uploads/2020/06/Blog-Else-2.png" style={{ height: '23px' }} />

          </div>
          <div className="footer-copyright text-right ">© 2022 Copyright:
            <a href="https://www.infilon.com/"> Powerd By Infilon</a>
          </div>
        </div>

      </Container>

    </div>
  );
}

export default Footer;