
import '../Styles/header.css'
import '../Styles/blog.css'
const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas, Row, Col } = require('react-bootstrap');

function Blog() {
  return (
    <>
      <div>
        <Container>
          <div>
            <div className="elementor-widget-container">
              <div className="blog-posts row" data-uk-grid="">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-posts__single">
                    <img
                      width={300}
                      height={224}
                      src="https://www.blogelse.com/wp-content/uploads/2021/03/5d807848c5cc1-730x413-1-350x224.jpg"
                      className="attachment-direo_blog_grid size-direo_blog_grid wp-post-image"
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
                            rel="bookmark"
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
                          <a
                            href="#"
                            rel="category tag"
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
                      className="attachment-direo_blog_grid size-direo_blog_grid wp-post-image"
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
                            rel="bookmark"
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
                          <a
                            href="#"
                            rel="category tag"
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
                      className="attachment-direo_blog_grid size-direo_blog_grid wp-post-image"
                      alt="The Best Web Designing Tips For Your Business Website"
                      loading="lazy"
                    />{" "}
                    <div className="blog-posts__single__contents">
                      <h4>
                        <a href="#">
                          The Best Web Designing Tips For Your Business Website
                        </a>
                      </h4>{" "}
                      <ul>
                        <li>
                          <a
                            href="#"
                            rel="bookmark"
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
                          <a
                            href="#"
                            rel="category tag"
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
  <div className="elementor-widget-container">
    <div className="elementor-button-wrapper">
      <a
        href="#"
        className="elementor-button-link elementor-button elementor-size-sm"
        role="button"
      >
        <span className="elementor-button-content-wrapper">
          <span className="elementor-button-text">Find more cities</span>
        </span>
      </a>
    </div>
  </div>
</div>




    </>
  );
}

export default Blog;