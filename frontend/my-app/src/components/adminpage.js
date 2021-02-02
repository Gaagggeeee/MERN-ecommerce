import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './adminpage.css';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

const AdminPage = () => {
    
    const history = useHistory();
    
    
    const login = (event) => {
        Axios.get('http://localhost:3001/api/post/admin', {
            username: event.target.username.value, 
            password: event.target.password.value
        }).then((response) => {
            console.log(response);
        });
     };

     


        return (
            <>
                <Container className='admin-container' fluid={true} >
                    <Row>
                        <Col>
                            <div className='signin-title-box'>
                                <p>Sign In</p>
                            </div>
                            <div className='signin-info'>
                                <p>To get access to the admin section of the website to edit stock use the username: Nvidia & password: password</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='signin-form-box'>
                                <form onSubmit={login} 
                                >
                                    <div className='signin-username'>
                                        <input 
                                            className='signin-input'
                                            type='text'
                                            placeholder='Username: username'
                                            name='username'
                                        />
                                    </div>
                                    <div className='signin-password'>
                                        <input 
                                            className='signin-input'
                                            type='text'
                                            placeholder='Password: password'
                                            name='password'
                                        />
                                    </div>
                                    <button >
                                        submit
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
}

export default AdminPage;
