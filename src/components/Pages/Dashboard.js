import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import '../../Styles/dashboard.css'
import Dropzone from 'react-dropzone';
import { PersonFill , List} from 'react-bootstrap-icons';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Sidebar from "react-sidebar";

const Dashboard = (props) => {


    const [sidebarOpen, SetSidebarOpen] = useState(false);

    const onSetSidebarOpen = () => {
      
        SetSidebarOpen({ sidebarOpen: true });
        
    }
    const onSetSidebarClose=()=>{

        SetSidebarOpen(false);
    }
   

    const [file, setFile] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage

    const [state, setState] = useState({
        ProfileImage: '',
        DisplayName: ''
    });

    const [errorMsg, setErrorMsg] = useState('');

    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
    const dropRef = useRef(); // React ref for managing the hover state of droppable area

    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();
    };

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const onDrop = (files) => {
        const [uploadedFile] = files;
        setFile(uploadedFile);

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewSrc(fileReader.result);
        };

        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    };

    return (
        <>
            <div className='dashboard'>
            <Container>
                
            <Sidebar
                    sidebar={<><b>Sidebar content</b>
                    <button onClick={onSetSidebarClose}>
                    close sidebar
                </button></>}
                    open={sidebarOpen}
               
                    onSetOpen={onSetSidebarOpen}
                
                    styles={{ sidebar: { background: "white" } }}
                >
                   

                 </Sidebar>

                <Button  onClick={onSetSidebarOpen}>
                        Open sidebar
                </Button>


                <Form className="search-form" >
                    {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                    <Row>
                        <Col>
                            <Form.Group controlId="title">
                                <Form.Control
                                    type="text"
                                    name="ProfileImage"
                                    value={state.title || ''}
                                    placeholder="Enter title"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="description">
                                <Form.Control
                                    type="text"
                                    name="DisplayName"
                                    value={state.description || ''}
                                    placeholder="Enter description"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                
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
                
                    {/* <List color="black" size={20} onClick={onSetSidebarOpen} /> */}
            </Container>
            </div>
        </>
    );
};

export default Dashboard;