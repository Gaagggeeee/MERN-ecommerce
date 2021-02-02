import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Axios from 'axios';

function Addstock() {

    const product = (event) => {
        Axios.post('http://localhost:3001/api/post', {
            name: event.target.name.value, 
            cooling: event.target.cooling.value,
            boost: event.target.boost.value, 
            memory: event.target.boost.value,
            price: event.target.price.value
        }).then((response) => {
            console.log(response);
        });
     };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <form onSubmit={product}>
                            <div className=''>
                                <input 
                                    type='text'
                                    placeholder='Name of GPU'
                                    name='name'
                                />
                            </div>
                            <div>
                                <input 
                                    type='text'
                                    placeholder='Type of cooling'
                                    name='cooling'
                                />
                            </div>
                            <div>
                                <input 
                                    type='text'
                                    placeholder='Boost clock'
                                    name='boost'
                                />
                            </div>
                            <div>
                                <input 
                                    type='text'
                                    placeholder='amount of memory in GHz'
                                    name='memory'
                                />
                            </div>
                            <div>
                                <input 
                                    type='text'
                                    placeholder='Price of GPU'
                                    name='price'
                                />
                            </div>
                            <button>Add Item</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Addstock;
