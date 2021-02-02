import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './footer.css';

function Footer() {
    return (
        <>
            <Container className='footer-container' fluid={true} >
                <Row>
                    <Col>
                        <div className='product-title-box'>
                            <p>Products</p>
                        </div>
                    </Col>
                </Row>
                <Row className='support-row'>
                    <Col>
                        <div className='support-box'>
                            <p>Graphics Cards</p>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}

export default Footer;
