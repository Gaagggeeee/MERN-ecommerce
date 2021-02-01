import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './navbar.css';

function Navbar() {
    return (
        <>
            <Container className='navbar-container' fluid={true} >
                <Row>
                    <Col>
                        <div className='navbar-logo'>
                            <p>Nvidia</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='navbar-cart'>
                            <p>Shopping cart</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Navbar;
