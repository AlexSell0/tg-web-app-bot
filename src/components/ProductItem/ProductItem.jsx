import React from 'react';
import './ProductItem.css'
import Button from "../ui/button/Button";

const ProductItem = ({product, addProductToCard, className}) => {
    const addProduct = ()=>{
        addProductToCard(product)
    }

    return (
        <div className={'card'}>
            <div className="card__image"></div>
            <h2 className="card__header">{product.name}</h2>
            <p className="card__description">{ product.description }</p>

            <Button className={'btn card__btn '  + className} onClick={addProduct}>Купить {product.price}</Button>
        </div>
    );
};

export default ProductItem;