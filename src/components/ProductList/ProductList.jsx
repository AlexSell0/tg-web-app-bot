import React from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "product 1",
            description: "product 1 description",
            price: 500,
        },
        {
            id: 2,
            name: "product 2",
            description: "product 2 description",
            price: 700,
        },
        {
            id: 3,
            name: "product 3",
            description: "product 3 description",
            price: 300,
        },
        {
            id: 4,
            name: "product 4",
            description: "product 4 description",
            price: 1200,
        },
        {
            id: 5,
            name: "product 5",
            description: "product 5 description",
            price: 1000,
        },
        {
            id: 6,
            name: "product 6",
            description: "product 6 description",
            price: 100,
        },
    ]

    return (
        <div className={'product-list'}>
            {
                products ?
                    products.map((product) =>
                        <ProductItem product={product} key={product.id}/>
                    )
                    : ''
            }
        </div>
    );
};

export default ProductList;