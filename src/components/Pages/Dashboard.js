import React, { useState, useRef, useEffect } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import '../../Styles/dashboard.css'
import Dropzone from 'react-dropzone';
import { PersonFill, List } from 'react-bootstrap-icons';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Sidebar from "react-sidebar";
import Navigation from '../Navbar/navigation';
import Login from '../Login';
import HttpService from '../../utils/http.service';


const Dashboard = (props) => {

    const [file, setFile] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage



    const [errorMsg, setErrorMsg] = useState('');

    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
    const dropRef = useRef(); // React ref for managing the hover state of droppable are

    const onDrop = (files) => {
        const [ProfileImage] = files;
        setFile(ProfileImage);

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewSrc(fileReader.result);
        };

        fileReader.readAsDataURL(ProfileImage);
        setIsPreviewAvailable(ProfileImage.name.match(/\.(jpeg|jpg|png)$/));
    };

    //form submit 


    const [edit, setEdit] = useState([]);
    const tokenid = localStorage.getItem('token');

    const fetchUserdetails = async () => {


        await axios.get(HttpService.FetchUserDetailUrl + `${tokenid}`)
            .then((response) => {

                setEdit(response.data);


            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {

        if(tokenid){
            fetchUserdetails()
        }
      
    }, [tokenid])

    const [user, setUser] = useState({
        ProfileImage: '',
        DisplayName: '',
        Firstname: '',
        Lastname: '',
        Email: '',
        Phone: '',
        Website: '',
        Address: '',
        Password: '',
        Bio: ''

    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handlePhoto = (e) => {
        setUser({ ...user, ProfileImage: e.target.files[0] });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('ProfileImage', user.ProfileImage);
        formData.append('DisplayName', user.DisplayName);
        formData.append('Firstname', user.Firstname);
        formData.append('Lastname', user.Lastname);
        formData.append('Email', user.Email);
        formData.append('Phone', user.Phone);
        formData.append('Website', user.Website);
        formData.append('Address', user.Address);
        formData.append('Password', user.Password);
        formData.append('Bio', user.Bio);

        axios.post(`http://localhost:8000/api/edit/dashboard/add/${edit._id}`, formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };



    return (
        <>
            {!localStorage.getItem("token") ? <Login /> : null}
            <Navigation />
            <div className='dashboard'>
                <Container>
                    <Form method='post' onSubmit={handleOnSubmit} encType='multipart/form-data'>
                        <div className='row'>

                            <div className='col-lg-3'>

                                <div className="upload-section">
                                    <Dropzone onDrop={onDrop}>
                                        {({ getRootProps, getInputProps }) => (
                                            <div {...getRootProps({ className: 'dropzone' })} ref={dropRef} id='dropzone' >
                                                <input {...getInputProps()} />
                                                {previewSrc ? <img className="preview-image" src={previewSrc} alt="Preview" /> :
                                                    <PersonFill color="grey" size={100} />
                                                }
                                                <Button variant="light">Select</Button>{' '}
                                            </div>
                                        )}
                                    </Dropzone>

                                </div>
                            </div>
                            <div className='col-lg-9'>
                                <div className='dashboard-container'>
                                    <Container>
                                        <h1>My Profile</h1>
                                        <hr />
                                        <input
                                            type="file"
                                            accept=".png, .jpg, .jpeg"
                                            name="ProfileImage"
                                            onChange={handlePhoto}
                                        />
                                        <Form.Group >
                                            <Form.Label className='lable-tag'>DisplayName</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="directorist-form-element"
                                                id="DisplayName"
                                                name="DisplayName"
                                                value={user.DisplayName}
                                                onChange={handleChange}

                                            />

                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label className='lable-tag'>Username</Form.Label>
                                            <Form.Control

                                                type="text"
                                                className="directorist-form-element"
                                                id="Username"
                                                name="Username"

                                                value={edit?.Username}
                                                onChange={handleChange}

                                            />
                                            username can not be changed

                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label className='lable-tag'>Firstname</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="Firstname"
                                                autoComplete="off"
                                                name="Firstname"
                                                className="directorist-form-element"
                                                // value={user.Firstname}
                                                defaultValue={edit.Firstname}
                                                onChange={handleChange}

                                            />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label className='lable-tag'>Lastname</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="directorist-form-element"
                                                id="Lastname"
                                                name="Lastname"
                                                defaultValue={edit.Lastname}
                                                onChange={handleChange}

                                            />

                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label className='lable-tag'>Phone</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="Phone"
                                                autoComplete="off"
                                                name="Phone"
                                                className="directorist-form-element"
                                                defaultValue={edit.Phone}
                                                onChange={handleChange}

                                            />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label className='lable-tag'>Email</Form.Label>
                                            <Form.Control
                                              
                                                type="text"
                                                id="Email"
                                                autoComplete="off"
                                                name="Email"
                                                className="directorist-form-element"
                                               
                                                defaultValue={edit.Email}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label className='lable-tag'>Website</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="Website"
                                                autoComplete="off"
                                                name="Website"
                                                className="directorist-form-element"
                                                defaultValue={edit.Website}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group >
                                            <Form.Label className='lable-tag'>Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="Address"
                                                autoComplete="off"
                                                name="Address"
                                                className="directorist-form-element"
                                                defaultValue={edit.Address}
                                                onChange={handleChange}

                                            />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label className='lable-tag'>New Password</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="Password"
                                                autoComplete="off"
                                                name="Password"
                                                className="directorist-form-element"
                                                defaultValue={edit.Password}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        {/* <Form.Group controlId="Lastname">
                                            <Form.Label className='lable-tag'>Confirm Password</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="Password"
                                                autoComplete="off"
                                                name="Password"
                                                className="directorist-form-element"
                                                value={user.DisplayName}
                                                onChange={handleChange}

                                            />
                                        </Form.Group> */}


                                        <Form.Group >
                                            <Form.Label className='lable-tag'>Bio</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="Bio"
                                                as="textarea" rows={3}
                                                autoComplete="off"
                                                name="Bio"
                                                className="directorist-form-element"
                                                defaultValue={edit.Bio}
                                                onChange={handleChange}

                                            />
                                        </Form.Group>

                                        <Button className='submit-btn' variant="primary" type="submit" name="submit">
                                            Save
                                        </Button>



                                    </Container>

                                </div>


                            </div>

                        </div>
                    </Form>
                </Container>
            </div>


        </>
    );
};

export default Dashboard;