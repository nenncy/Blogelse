
import '../../../Styles/Home/header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBusinessTime, faBuilding, faArrowRightLong, faBroom, faCar, faMobileScreenButton, faPersonBiking, faCartArrowDown, faUtensils, faCircle, faBaseball, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons"


const { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown, Offcanvas, Row, Col } = require('react-bootstrap');
const { BrowserRouter, Routes } = require('react-router-dom');


function Header() {
    return (
        <>

            <section className="section-container">
                <div className='col-md-8 offset-md-2'>
                    <div className="heading-container">
                        <h2 className="home-page-heading"> Find the good out there.  </h2>
                    </div>
                    <div className=''>
                        <form className="form">
                            <div className='lable'><label className="input-label-style"> Find </label>
                                <input className="input-style" placeholder="Ex: Shopping, resturant....." type="text" />
                            </div>
                            <div className='lable'><label className="input-label-style"> Where   </label>
                                <input className="input-style" placeholder="Your city...." type="text" /></div>
                            <div>
                                <button className="btn-header">  Search </button> </div>
                        </form>
                    </div>


                    <div className='directory-list-items'>
                        <Container>
                            <ul className='directory-listgrid'>
                                   <li className='category'>
                                    <a classname='list-category' href="#">
                                        <FontAwesomeIcon icon={faBusinessTime} style={{ color: "#FF367E", height: '20px' ,marginRight:'10px'}} className="icon-style" />
                                        Business
                                    </a>
                                </li>
                                <li className='category'>
                                    <a classname='list-category' href="#">
                                        <FontAwesomeIcon icon={faCircle} style={{ color: "purple", height: '20px' ,marginRight:'10px'}} className="icon-style" />
                                        Other
                                    </a>
                                </li>
                                <li className='category'>
                                    <a classname='list-category' href="#">
                                        <span> <FontAwesomeIcon icon={faHeart} style={{ color: "#32cc6f", height: '20px',marginRight:'10px' }} className="icon-style" />
                                        </span> Health & Fitness
                                    </a>
                                </li>
                                <li className='category'>
                                    <a classname='list-category' href="#">
                                        <FontAwesomeIcon icon={faCar} style={{ color: "#3a7dfd", height: '20px',marginRight:'10px' }} className="icon-style" />
                                        Automative
                                    </a>
                                </li>
                                <li className='category'>
                                    <a classname='list-category' href="#">Shopping
                                        <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#FF367E", height: '30px' , marginRight:'10px' }} className="icon-style"></FontAwesomeIcon>

                                    </a>
                                </li>


                            </ul>
                        </Container>


                    </div>
                </div>

            </section>
        </>

    );
}
export default Header;