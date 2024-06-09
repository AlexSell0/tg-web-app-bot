import React from 'react';
import './ProductItem.css'
import Button from "../ui/button/Button";

const ProductItem = (props) => {
    const {product} = props
    console.log(props)
    return (
        <div className={'card'}>
            <div className="card__image"></div>
            <h2 className="card__header">{product.name}</h2>
            <p className="card__description">{ product.description }</p>

            <Button>Купить {product.price}</Button>
        </div>
    );
};

export default ProductItem;