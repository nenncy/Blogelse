// import React, { useState, useEffect } from "react";
// import Navigation from "../Navbar/navbar-other";
// import { Container, Form } from "react-bootstrap";
// import axios from 'axios';

// function Listing() {
//   const [category, setCategory] = useState([]);
//   const [categoryid,setCategoryid]=useState();
//   const [listingdata, setListingdata] = useState({
//     title: "",
//     content: "",
//     slogan: "",

//   });

//   const handleChange=(event)=>{
//     setListingdata({ ...listingdata, [event.target.name]: event.target.value });

//   }
//   const handlecountry = (event) => {

//     event.preventDefault();
//     const categoryid= event.target.value;
//     setCategoryid(categoryid);
//   };

//   console.log(categoryid);
//   const handlesubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       title: listingdata.title,
//       content: listingdata.content,
//       slogan: listingdata.slogan,
//       categoryid:categoryid,
//     };
//     const res= axios.post('http://localhost:8000/addlisting/plans/62d7c39de6d860a8638b185a', data);
//     console.log(res);

//   };

//   useEffect(() => {
//     const getcountry = async () => {
//       const req = await fetch("http://localhost:8000/get/category");
//       const getres = await req.json();
//       console.log(getres);
//       setCategory(await getres);
//     };
//     getcountry();
//   }, []);

//   return (
//     <>
//       <div className="header-scroll-transparent">
//         <Navigation></Navigation>
//         {/* navbar */}
//         <div className="bg-holder">
//           {/* <img src="https://www.blogelse.com/wp-content/uploads/2019/10/breadcrumb1.jpg" style={{ height: '270px' }}>
//                 </img> */}

//           <div className="wrapper-contact-above-text">
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-12">
//                   <h1 className="title-content">
//                     Add Listing - BlogElse | Blog Submission Site | Business
//                     Listing Site
//                   </h1>
//                   <nav aria-label="breadcrumb">
//                     <ol className="breadcrumb">
//                       <li className="breadcrumb-item">
//                         <a href="/">Home </a>
//                       </li>
//                       <li
//                         className="breadcrumb-item active"
//                         aria-current="page"
//                       >
//                         {" "}
//                         Add Listing - BlogElse | Blog Submission Site | Business
//                         Listing Sit
//                       </li>
//                     </ol>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Container className="content">
//         <div className="row">
//           <div className="col-sm-12">
//             <h5 className="mt-4 mb-4 fw-bold">Output {}</h5>
// <Form method="Post" onSubmit={handlesubmit}>
// <div className="row mb-3">
//               <Form.Group className="mb-3">
//                 <Form.Label>title</Form.Label>
//                 <Form.Control name="title" value={listingdata.title} onChange={handleChange} type="title" placeholder="title" />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>content</Form.Label>
//                 <Form.Control
//                   name="content"
//                   type="content"
//                   value={listingdata.content} onChange={handleChange}
//                   placeholder="content"
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>slogan</Form.Label>
//                 <Form.Control
//                   name="slogan"
//                   type="slogan"
//                   value={listingdata.slogan} onChange={handleChange}
//                   placeholder="slogan"
//                 />
//               </Form.Group>

//               <div className="form-group col-md-4">
//                 <label className="mb-2">Category</label>
//                 <select
//                   name="categoryid"
//                   className="form-control"
//                   onChange={(e)=>handlecountry(e)}
//                 >
//                   <option>--Select Category--</option>
//                   {category.map((getcon) => (
//                     <option key={getcon._id} value={getcon._id}>
//                       {" "}
//                       {getcon.categoryName}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group col-md-2 mt-4">
//                 <button className="btn btn-success mt-2">Submit</button>
//               </div>
//             </div>
// </Form>

//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }

// export default Listing;

import React from "react";
import Navigation from "../Navbar/navbar-other";
import style from "../../Styles/Addlisting/listing.module.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Form, Row } from "react-bootstrap";
import Headroom from "react-headroom";
import axios from "axios";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";

function Addnew({ deleteHandeler, id }) {
  return (
    <div>
      <div
        style={{ display: "flex", marginBottom: "10px" }}
        className={style.fields}
      >
        <div>
          <select className={style.select} style={{ padding: "0 20px" }}>
            <option></option>
            <option>Instagram</option>
            <option>github</option>
            <option>LinkediIn</option>
          </select>
        </div>
        <div className={style.example}>
          <input
            type="url"
            placeholder="eg. http://example.com"
            className={style.url}
          />
        </div>
        <div className={style.delete}>
          <span
            className={style.dlt}
            onClick={deleteHandeler}
            style={{
              color: "#fff",
              background: "#e23636",
              padding: "0 20px 0 22px",
            }}
          >
            <FontAwesomeIcon
              icon={faTrash}
              style={{ fontSize: "15px", color: "white" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function Addnew1({ deleteHandeler1, id }) {
  return (
    <div>
      <div className={style.faqs}>
        <div className={style.faq}>
          <input
            type="text"
            className={style.titleinput1}
            placeholder="Question"
            style={{ width: "100%" }}
          ></input>
        </div>
        <div style={{ margin: "10px", width: "100%", position: "relative" }}>
          <textarea
            type="text"
            rows="5"
            placeholder="Answer.."
            className={style.txtarea}
          ></textarea>
        </div>
        <div className={style.delete}>
          <span className={style.dlt} onClick={deleteHandeler1}>
            <FontAwesomeIcon
              icon={faTrash}
              className={style.trash}
              style={{ fontSize: "15px" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

const Listing1 = () => {
  const [feature, setFeatures] = useState([]);

  const featurearray = [
    {
      id:1,
      name:"Accepts Credit Cards"
    },
    {
      id:2,
      name:"Parking"
    },
    {
      id:3,
      name:"Coupons"
    },  {
      id:4,
      name:"Parking Street"
    }
  ];

  // const [check, setCheck] = useState({
  //   isCredit: false,
  //   isParking: false,
  //   isCoupons: false,
  //   isParkingStreet: false,
  //   isInternet: false,
  // });

  const [check, setCheck] = useState([]);

  const onChangeCredit = (e, ele) => {

    const value = e.target.value;
    setCheck((prev) =>
      check.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, e.target.value]
    );
    
  };

  useEffect(() => {
    //Print data each time the checkbox is "checked" or "unchecked"
    console.log(check);
  }, [check]);

  let { planid } = useParams();

  // start form submit
  const [category, setCategory] = useState([]);
  const [categoryid, setCategoryid] = useState();
  const [locationid, setLocationid] = useState();
  const [location, setLocation] = useState();
  const [tags, setTags] = useState();
  const [listingdata, setListingdata] = useState({
    title: "",
    content: "",
    slogan: "",
    price: "",
    features:[]
  });

  const handleChange = (event) => {
    setListingdata({ ...listingdata, [event.target.name]: event.target.value });
  };
  const handlecountry = (event) => {
    event.preventDefault();
    const categoryid = event.target.value;
    setCategoryid(categoryid);
  };

  const handleLocation = (event) => {
    event.preventDefault();
    const locationid = event.target.value;
    setLocationid(locationid);
  };

  console.log(locationid);

  const handlesubmit = (e) => {
    e.preventDefault();

    const data = {
      title: listingdata.title,
      content: listingdata.content,
      slogan: listingdata.slogan,
      categoryid: categoryid,
      locationid: locationid,
      price: listingdata.price,
      features:check
    };

    const res = axios.post(
      `http://localhost:8000/addlisting/plans/${planid}`,
      data
    );
    console.log(res);
  };

  //get dropdown value
  const getcategory = async () => {
    const req = await fetch("http://localhost:8000/get/category");
    const getres = await req.json();
    console.log(getres);
    setCategory(await getres);
  };
  const getLocation = async () => {
    const req = await fetch("http://localhost:8000/get/alllocations");
    const res = await req.json();
    console.log(res);
    setLocation(await res);
  };
  const getTags = async () => {
    const req = await fetch("http://localhost:8000/get/allltags");
    const res = await req.json();
    console.log(res);
    setTags(await res);
  };

  useEffect(() => {
    getcategory();
    getLocation();
    getTags();
  }, []);

  //ending form submit
  const [checked, setChecked] = useState(true);

  const prices = (e) => {
    if (e.target.value === "price") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const [ids, setIds] = useState([]);
  const addHandeler = () => {
    const newId = nanoid();
    setIds((ids) => [...ids, newId]);
  };

  const deleteHandeler = (removeId) =>
    setIds((ids) => ids.filter((id) => id !== removeId));

  const [id1, setId1] = useState([]);
  const addHandeler1 = () => {
    const newId1 = nanoid();
    setId1((id1) => [...id1, newId1]);
  };

  const deleteHandeler1 = (removeId1) =>
    setId1((id1) => id1.filter((id) => id !== removeId1));

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
                {" "}
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
      <section className={style.section1}>
        <div>
          <div>
            <div className="row">
              <div className={style.formstart}>
                <div className="col-lg-8 offset-lg-2">
                  <Form method="POST" action="/" onSubmit={handlesubmit}>
                    <div className={style.form}>
                      <div className={style.title}>
                        <h4>General Group</h4>
                      </div>
                      <div className={style.body}>
                        <div className={style.title1}>
                          <div className={style.label}>
                            Title : <span className={style.star}>*</span>
                          </div>
                          <input
                            type="text"
                            className={style.titleinput}
                            placeholder="Enter a title"
                            required
                            name="title"
                            value={listingdata.title}
                            onChange={handleChange}
                          />
                        </div>
                        <div className={style.discription}>
                          <div className={style.content}>
                            {" "}
                            Listing Content :
                          </div>
                          <input
                            type="text"
                            className={style.titleinput}
                            placeholder=" "
                            required
                            name="content"
                            value={listingdata.content}
                            onChange={handleChange}
                          />
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>Slogan : </div>
                          <input
                            type="text"
                            className={style.titleinput}
                            placeholder="Your Listing's motto"
                            required
                            name="slogan"
                            value={listingdata.slogan}
                            onChange={handleChange}
                          />
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>Pricing : </div>
                          <div className={style.pricing}>
                            <div className={style.option}>
                              <input
                                type="radio"
                                name="chk1"
                                className={style.chkbox}
                                value="price"
                                checked="checked"
                                onChange={prices}
                              />
                              <label className={style.lbl}>Price</label>
                            </div>
                            <span
                              style={{
                                fontSize: "14px",
                                padding: "0 5px",
                                color: "#7a82a6",
                                marginBottom: "5px",
                              }}
                            >
                              Or
                            </span>
                            <div className={style.option}>
                              <input
                                type="radio"
                                name="chk1"
                                className={style.chkbox}
                                value="price1"
                                onChange={prices}
                              />
                              <label className={style.lbl}>Price Range</label>
                            </div>
                            <div>
                              {checked ? (
                                <input
                                  type="number"
                                  className={style.titleinput}
                                  name="price"
                                  value={listingdata.price}
                                  onChange={handleChange}
                                />
                              ) : (
                                <select
                                  className={style.select}
                                  required
                                  style={{ marginTop: "5px" }}
                                  onChange={handlecountry}
                                >
                                  <option>Select Price Range</option>
                                  <option value="skimming">
                                    Ultra High ($$$$)
                                  </option>
                                  <option value="moderate">
                                    Expensive ($$$)
                                  </option>
                                  <option value="economy">Moderate ($$)</option>
                                  <option value="bellow_economy">
                                    Cheap ($)
                                  </option>
                                </select>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>
                            Select Category :{" "}
                            <span className={style.star}>*</span>
                          </div>
                          <select
                            className={style.select}
                            required
                            onChange={(e) => handlecountry(e)}
                          >
                            <option></option>
                            {category.map((getcon) => (
                              <option key={getcon._id} value={getcon._id}>
                                {getcon.categoryName}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>Location : </div>
                          <select
                            className={style.select}
                            required
                            onChange={handleLocation}
                          >
                            <option></option>
                            {location?.map((getcon) => (
                              <option key={getcon._id} value={getcon._id}>
                                {getcon.LocationName}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>Tag : </div>
                          <select className={style.select} required>
                            <option></option>
                            {tags?.map((getcon) => (
                              <option key={getcon._id} value={getcon._id}>
                                {getcon.tagname}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className={style.features}>
                          <div className={style.feature}>Features ?:</div>
                          {featurearray.map((ele) => {
                            return (
                              <div className={style.feature1}>
                                <input
                                  type="checkbox"
                                  value={ele.name}
                                  name="features"
                                  className={style.chkbox}
                                  checked={check.find((p)=> p.id === ele.id)}
                                  onChange={(e) => onChangeCredit(e,ele)}
                                />
                                <label className={style.lbl}>{ele.name}</label>
                              </div>
                            );
                          })}

                          <div className={style.feature1}>
                            <input
                              type="checkbox"
                              className={style.chkbox}
                              name="isParking"
                              value="isParking"
                              onChange={onChangeCredit}
                            />
                            <label className={style.lbl}> Parkings</label>
                          </div>
                          <div className={style.feature1}>
                            <input type="checkbox" className={style.chkbox} />
                            <label className={style.lbl}> Coupons</label>
                          </div>
                          <div className={style.feature1}>
                            <input type="checkbox" className={style.chkbox} />
                            <label className={style.lbl}>Parking Street</label>
                          </div>
                          <div className={style.feature1}>
                            <input type="checkbox" className={style.chkbox} />
                            <label className={style.lbl}>Internet</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-md-2 mt-4">
                      <button className="btn btn-success mt-2">Submit</button>
                    </div>
                    <div className={style.form}>
                      <div className={style.title}>
                        <h4>Contact Info</h4>
                      </div>
                      <div className={style.body}>
                        <div style={{ marginBottom: "10px" }}>
                          <input
                            type="checkbox"
                            className={style.checkbox}
                            style={{ width: "18px", marginRight: "7px" }}
                          />
                          <label
                            style={{ fontSize: "14px", fontWeight: "600" }}
                          >
                            Hide contact owner form for single listing page
                          </label>
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>Zip/Post Code : </div>
                          <input
                            type="text"
                            className={style.titleinput}
                            placeholder="Enter Zip/Post Code"
                            required
                          />
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>Phone 1 : </div>
                          <input
                            type="text"
                            className={style.titleinput}
                            placeholder="Phone Number 1"
                            required
                          />
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>Phone 2 : </div>
                          <input
                            type="text"
                            className={style.titleinput}
                            placeholder="Phone Number "
                            required
                          />
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>Fax : </div>
                          <input
                            type="text"
                            className={style.titleinput}
                            placeholder="Enter Fax"
                            required
                          />
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>Email: </div>
                          <input
                            type="text"
                            className={style.titleinput}
                            placeholder="Enter Email"
                            required
                          />
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>Website : </div>
                          <input
                            type="text"
                            className={style.titleinput}
                            placeholder="Listing website eg. http://example.com"
                            required
                          />
                        </div>
                        <div className={style.title1}>
                          <div className={style.label}>
                            Add Social:
                            <div>
                              {ids.map((id) => (
                                <Addnew
                                  key={id}
                                  id={id}
                                  deleteHandeler={() => deleteHandeler(id)}
                                />
                              ))}
                            </div>
                            <buton
                              type="button"
                              className={style.btn}
                              onClick={addHandeler}
                            >
                              + Add New
                            </buton>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.form}>
                      <div className="container">
                        <div className={style.title}>
                          <h4> Opening/Business Hour Information</h4>
                        </div>
                        <div className={style.body}>
                          <div>
                            <div style={{ display: "flex" }}>
                              <input
                                type="radio"
                                className={style.radio}
                                name="business"
                                style={{
                                  appearance: "radio",
                                  height: "20px",
                                  width: "20px",
                                  margin: "0px 8px",
                                }}
                              />
                              <label> Open 24 hours and 7 days</label>
                            </div>
                            <div style={{ display: "flex" }}>
                              <input
                                type="radio"
                                className={style.radio}
                                name="business"
                                style={{
                                  appearance: "radio",
                                  height: "20px",
                                  width: "20px",
                                  margin: "0px 8px",
                                }}
                              />
                              <label> Hide business hours</label>
                            </div>
                            <div style={{ display: "flex" }}>
                              <input
                                type="radio"
                                className={style.radio}
                                name="business"
                                style={{
                                  appearance: "radio",
                                  height: "20px",
                                  width: "20px",
                                  margin: "0px 8px",
                                }}
                              />
                              <label> Openfor selected hours</label>
                            </div>
                          </div>
                        </div>
                        <div className={style.toggle}>
                          <div className={style.togl}>
                            <label className={style.switch}>
                              <input
                                type="checkbox"
                                style={{ display: "none" }}
                              />
                              <span class={style.sliderround}></span>
                            </label>
                            <label className={style.day}>Monday</label>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>12:00 am</option>
                                  <option>12:15 am</option>
                                  <option>12:30 am</option>
                                </select>
                              </div>
                            </div>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>No result</option>
                                </select>
                              </div>
                            </div>
                            <div style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                className={style.checkbox1}
                              />
                              <div className={style.hr}>24 hours open</div>
                            </div>
                          </div>
                          <div className={style.togl}>
                            <label className={style.switch}>
                              <input
                                type="checkbox"
                                style={{ display: "none" }}
                              />
                              <span class={style.sliderround}></span>
                            </label>
                            <label className={style.day}>Tuesday</label>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>12:00 am</option>
                                  <option>12:15 am</option>
                                  <option>12:30 am</option>
                                </select>
                              </div>
                            </div>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>No result</option>
                                </select>
                              </div>
                            </div>
                            <div style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                className={style.checkbox1}
                              />
                              <div className={style.hr}>24 hours open</div>
                            </div>
                          </div>
                          <div className={style.togl}>
                            <label className={style.switch}>
                              <input
                                type="checkbox"
                                style={{ display: "none" }}
                              />
                              <span class={style.sliderround}></span>
                            </label>
                            <label className={style.day}>Wednesday</label>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>12:00 am</option>
                                  <option>12:15 am</option>
                                  <option>12:30 am</option>
                                </select>
                              </div>
                            </div>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>No result</option>
                                </select>
                              </div>
                            </div>
                            <div style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                className={style.checkbox1}
                              />
                              <div className={style.hr}>24 hours open</div>
                            </div>
                          </div>
                          <div className={style.togl}>
                            <label className={style.switch}>
                              <input
                                type="checkbox"
                                style={{ display: "none" }}
                              />
                              <span class={style.sliderround}></span>
                            </label>
                            <label className={style.day}>Thursday</label>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>12:00 am</option>
                                  <option>12:15 am</option>
                                  <option>12:30 am</option>
                                </select>
                              </div>
                            </div>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>No result</option>
                                </select>
                              </div>
                            </div>
                            <div style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                className={style.checkbox1}
                              />
                              <div className={style.hr}>24 hours open</div>
                            </div>
                          </div>
                          <div className={style.togl}>
                            <label className={style.switch}>
                              <input
                                type="checkbox"
                                style={{ display: "none" }}
                              />
                              <span class={style.sliderround}></span>
                            </label>
                            <label className={style.day}>Friday</label>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>12:00 am</option>
                                  <option>12:15 am</option>
                                  <option>12:30 am</option>
                                </select>
                              </div>
                            </div>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>No result</option>
                                </select>
                              </div>
                            </div>
                            <div style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                className={style.checkbox1}
                              />
                              <div className={style.hr}>24 hours open</div>
                            </div>
                          </div>
                          <div className={style.togl}>
                            <label className={style.switch}>
                              <input
                                type="checkbox"
                                style={{ display: "none" }}
                              />
                              <span class={style.sliderround}></span>
                            </label>
                            <label className={style.day}>Saturday</label>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>12:00 am</option>
                                  <option>12:15 am</option>
                                  <option>12:30 am</option>
                                </select>
                              </div>
                            </div>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>No result</option>
                                </select>
                              </div>
                            </div>
                            <div style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                className={style.checkbox1}
                              />
                              <div className={style.hr}>24 hours open</div>
                            </div>
                          </div>
                          <div className={style.togl}>
                            <label className={style.switch}>
                              <input
                                type="checkbox"
                                style={{ display: "none" }}
                              />
                              <span class={style.sliderround}></span>
                            </label>
                            <label className={style.day}>Sunday</label>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>12:00 am</option>
                                  <option>12:15 am</option>
                                  <option>12:30 am</option>
                                </select>
                              </div>
                            </div>
                            <div className={style.open}>
                              <div className={style.time}>
                                <select className={style.select1}>
                                  <option>Open</option>
                                  <option>No result</option>
                                </select>
                              </div>
                            </div>
                            <div style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                className={style.checkbox1}
                              />
                              <div className={style.hr}>24 hours open</div>
                            </div>
                          </div>
                        </div>
                        <div style={{ margin: "20px 0 14px 0" }}>
                          <label
                            style={{
                              display: "block",
                              color: "#202428",
                              marginBottom: "10px",
                              fontWeight: "500",
                            }}
                          >
                            TimeZone{" "}
                          </label>
                          <select className={style.select} required>
                            <option></option>
                            <option>India</option>
                            <option>USA</option>
                            <option>CANADA</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className={style.form}>
                      <div className={style.title}>
                        <h4> Map</h4>
                      </div>
                      <div className={style.body}>
                        {/* <StoreLocator /> */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.85682014613!2d72.52728671489075!3d23.029028784949716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f466a8194f%3A0xbdcde14274fb0096!2sInfilon%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1659072421857!5m2!1sen!2sin"
                          width="100%"
                          height="500"
                          style={{
                            borderRadius: "10px",
                            boxShadow: " 0px 2px 2px 1px #ccc",
                          }}
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                          title=" "
                        ></iframe>
                      </div>
                    </div>
                    <div className={style.form}>
                      <div className={style.title}>
                        <h4> Listings FAQs</h4>
                      </div>
                      <div className={style.body} style={{ padding: "30px" }}>
                        <div>
                          <label
                            style={{ fontSize: "15px", fontWeight: "600" }}
                          >
                            {" "}
                            FAQs :
                          </label>
                        </div>
                        {id1.map((id) => (
                          <Addnew1
                            key={id}
                            id={id}
                            deleteHandeler1={() => deleteHandeler1(id)}
                          />
                        ))}
                      </div>
                      <div className="container mb-4">
                        <button
                          type="button"
                          className={style.addbtn}
                          onClick={addHandeler1}
                        >
                          <span className={style.plussign}>+</span>
                          Add New
                        </button>
                      </div>
                    </div>
                    <div className={style.form}>
                      <div className={style.title}>
                        <h4>Images & Video</h4>
                      </div>
                      <div className={style.body}>
                        <div>
                          <div></div>
                        </div>

                        <div className={style.title1}>
                          <div className={style.label}>Video Url : </div>
                          <input
                            type="text"
                            className={style.titleinput}
                            placeholder="Only YouTube & Video URLs"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container" style={{ textAlign: "center" }}>
                      <div className={style.title1}>
                        <div className={style.label}>
                          Your Email :{" "}
                          <span className={style.star} style={{ color: "red" }}>
                            *
                          </span>
                        </div>
                        <input
                          type="text"
                          className={style.titleinput1}
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing1;
