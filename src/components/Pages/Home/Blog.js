
import '../../../Styles/Home/blog.css'
const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas, Row, Col } = require('react-bootstrap');

function Blog() {
  return (
    <>
      <div>
        <Container>
          <div>
            <div className="blog-container">
              <div className="blog-posts row" >
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-posts__single">
                    <img
                      width={300}
                      height={224}
                      src="https://www.blogelse.com/wp-content/uploads/2021/03/5d807848c5cc1-730x413-1-350x224.jpg"
                
                      alt="Know how to choose the best web development company"
                      loading="lazy"
                    />{" "}
                    <div className="blog-posts__single__contents">
                      <h4>
                        <a href="#">
                          Know how to choose the best web development company
                        </a>
                      </h4>{" "}
                      <ul>
                        <li>
                          <a
                            href="#"
                         
                          >
                            <time
                              className="entry-date published updated"
                              dateTime="2021-03-23T11:17:07+00:00"
                            >
                              March 23, 2021
                            </time>
                          </a>
                        </li>
                        <li>1 min read</li>
                        <li>
                          in{" "}
                          <a  style={{color:"#47C9EA"}}
                            href="#"
                       
                          >
                            Web Design &amp; Development
                          </a>
                        </li>{" "}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-posts__single">
                    <img
                      width={300}
                      height={224}
                      src="https://www.blogelse.com/wp-content/uploads/2021/03/Add-a-subheading-8-730x413-1-350x224.png"
                   
                      alt="Hiring a Professional Web Development Company in Ahmedabad"
                      loading="lazy"
                    />{" "}
                    <div className="blog-posts__single__contents">
                      <h4>
                        <a href="#">
                          Hiring a Professional Web Development Company in Ahmedabad
                        </a>
                      </h4>{" "}
                      <ul>
                        <li>
                          <a
                            href="#"
                      
                          >
                            <time
                              className="entry-date published updated"
                              dateTime="2021-03-23T11:20:36+00:00"
                            >
                              March 23, 2021
                            </time>
                          </a>
                        </li>
                        <li>1 min read</li>
                        <li>
                          in{" "}
                          <a  style={{color:"#47C9EA"}}
                            href="#"
                          
                          >
                            Web Design &amp; Development
                          </a>
                        </li>{" "}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-posts__single">
                    <img
                      width={300}
                      height={224}
                      src="https://www.blogelse.com/wp-content/uploads/2021/03/Web-Designing-730x413-1-350x224.png"
                   
                      alt="The Best Web Designing Tips For Your Business Website"
                      loading="lazy"
                    />{" "}
                    <div className="blog-posts__single__contents">
                      <h4>
                        <a href="#" >
                          The Best Web Designing Tips For Your Business Website
                        </a>
                      </h4>{" "}
                      <ul>
                        <li>
                          <a
                            href="#"
                          
                          >
                            <time
                              className="entry-date published updated"
                              dateTime="2021-03-23T11:24:06+00:00"
                            >
                              March 23, 2021
                            </time>
                          </a>
                        </li>
                        <li>1 min read</li>
                        <li>
                          in{" "}
                          <a  style={{color:"#47C9EA"}}
                            href="#"
                      
                          >
                            Web Design &amp; Development
                          </a>
                        </li>{" "}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

      </div>
      <div>
  <div className="container">
    <div className="button-wrapper">
      <a
        href="#"
        className="elementor-button-link "
       
      >
        <span className="button-content-wrapper">
          <span className="find-button-text">Find more cities</span>
        </span>
      </a>
    </div>
  </div>
</div>




    </>
  );
}

export default Blog;