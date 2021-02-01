import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './mainpage.css';
import rtx3070 from '../images/rtx3070.png';

function Mainpage() {
    return (
        <>
            <Container className='mainpage-container' fluid={true} >
                <Row className='mainpage-top-row'>
                    <Col>
                        <div className='mainpage-top-title'>
                            <p>GeForce</p>
                        </div>
                    </Col>
                </Row>
                <Row className='mainpage-shop-title-row'>
                    <Col>
                        <div className='mainpage-shop-title'>
                            <p>shop geforce graphics cards and gaming laptops</p>
                        </div>
                    </Col>
                </Row>
                <Row className='mainpage-search-row'>
                    <Col>
                        <div className='mainpage-search'>
                            <input 
                                className='search-bar'
                                type='text'
                                placeholder='Example: GeForce RTX'
                            />
                        </div>
                    </Col>
                </Row>
                <Row className='mainpage-filter-row'>
                    <Col className='filter-col'>
                        <div className='mainpage-filter'>
                            <p>Sort by: </p>
                        </div>
                    </Col>
                </Row>
                <Row className='mainpage-results-row'>
                    <Col>
                        <div className='mainpage-results'>
                            <p>8 results found</p>
                        </div>
                    </Col>
                </Row>
                <Row className='mainpage-featured-row'>
                    <Col>
                        <div className='mainpage-featured'>
                            <div className='feature-box'>
                                <p>Featured</p>
                            </div>
                            <div className='gpu-pic'>
                                <img src={rtx3070}/>
                            </div>
                            <div>
                                <p>NVIDIA GEFORCE RTX 3070</p>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Mainpage;
