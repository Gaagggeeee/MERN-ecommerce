import './product.css';
import { Link } from 'react-router-dom';
import rtx3070 from '../images/rtx3070.png';

const Product = ({ name, cooling, boost, memory, price, productId }) => {
    return (
        <div className='mainpage-featured'>
            <div className='feature-box'>
                <p>Featured</p>
            </div>
            <div className='gpu-pic'>
                <img src={rtx3070}/>
            </div>
            <div className='gpu-info'>
                <p>{name}</p>
                <p className='info'>Cooling System: {cooling}</p>
                <p className='info'>Boost Clock Speed: {boost}</p>
                <p className='info'>GPU Memory Size: {memory}</p>
            </div>
            <div className='gpu-price-box'>
                <p>{price}</p>
            </div>
            <div className='add-to-cart-box'>
                <Link to={`/products/${productId}`} className='cart-button'>
                    Add to cart
                </Link>
            </div>
        </div>
    );
}

export default Product;