import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './mainpage.css';
import rtx3070 from '../images/rtx3070.png';
import { useSelector, useDispatch } from 'react-redux';
import Product from './product';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const Mainpage = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products , loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

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
{/* Featured product row */}
                <Row className='mainpage-featured-row'>
                    <Col>
                        {loading ? (
                            <h2>Loading...</h2>
                        ) : error ? (
                            <h2>{error}</h2>
                        ) : (
                            products.map((product) => (
                                <Product 
                                    key={product._id} 
                                    productId={product._id} 
                                    name={product.name}
                                    cooling={product.cooling}
                                    boost={product.boost}
                                    memory={product.memory}
                                    price={product.price}
                                /> 
                            ))
                        )}
                   </Col>
                </Row>
            </Container>
        </>
    );
}

export default Mainpage;
