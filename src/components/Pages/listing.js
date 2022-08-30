import React, { useState, useEffect } from "react";
import Navigation from "../Navbar/navbar-other";
import { Container, Form } from "react-bootstrap";
import axios from 'axios';


function Listing() {
  const [category, setCategory] = useState([]);
  const [categoryid,setCategoryid]=useState();
  const [listingdata, setListingdata] = useState({
    title: "",
    content: "",
    slogan: "",
   
  });

  const handleChange=(event)=>{
    setListingdata({ ...listingdata, [event.target.name]: event.target.value });

  }
  const handlecountry = (event) => {

    event.preventDefault();
    const categoryid= event.target.value;
    setCategoryid(categoryid); 
  };
  
  console.log(categoryid);
  const handlesubmit = (e) => {
    e.preventDefault();
    const data = {
      title: listingdata.title,
      content: listingdata.content,
      slogan: listingdata.slogan,
      categoryid:categoryid,
    };
    const res= axios.post('http://localhost:8000/addlisting/plans/62d7c39de6d860a8638b185a', data);
    console.log(res);


  };

  useEffect(() => {
    const getcountry = async () => {
      const req = await fetch("http://localhost:8000/get/category");
      const getres = await req.json();
      console.log(getres);
      setCategory(await getres);
    };
    getcountry();
  }, []);

  return (
    <>
      <div className="header-scroll-transparent">
        <Navigation></Navigation>
        {/* navbar */}
        <div className="bg-holder">
          {/* <img src="https://www.blogelse.com/wp-content/uploads/2019/10/breadcrumb1.jpg" style={{ height: '270px' }}>
                </img> */}

          <div className="wrapper-contact-above-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="title-content">
                    Add Listing - BlogElse | Blog Submission Site | Business
                    Listing Site
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        Add Listing - BlogElse | Blog Submission Site | Business
                        Listing Sit
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <h5 className="mt-4 mb-4 fw-bold">Output {}</h5>
<Form method="Post" onSubmit={handlesubmit}>
<div className="row mb-3">
              <Form.Group className="mb-3">
                <Form.Label>title</Form.Label>
                <Form.Control name="title" value={listingdata.title} onChange={handleChange} type="title" placeholder="title" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>content</Form.Label>
                <Form.Control
                  name="content"
                  type="content"
                  value={listingdata.content} onChange={handleChange}
                  placeholder="content"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>slogan</Form.Label>
                <Form.Control
                  name="slogan"
                  type="slogan"
                  value={listingdata.slogan} onChange={handleChange}
                  placeholder="slogan"
                />
              </Form.Group>

              <div className="form-group col-md-4">
                <label className="mb-2">Category</label>
                <select
                  name="categoryid"
                  className="form-control"
                  onChange={(e)=>handlecountry(e)}
                >
                  <option>--Select Category--</option>
                  {category.map((getcon) => (
                    <option key={getcon._id} value={getcon._id}>
                      {" "}
                      {getcon.categoryName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group col-md-2 mt-4">
                <button className="btn btn-success mt-2">Submit</button>
              </div>
            </div>
</Form>
          
          </div>
        </div>
      </Container>
    </>
  );
}

export default Listing;
