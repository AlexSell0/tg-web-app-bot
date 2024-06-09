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
        <div>
            <div className={'product-list'}>
                {
                    products ?
                        products.map((product) =>
                            <ProductItem product={product} key={product.id}/>
                        )
                        : ''
                }
            </div>


            <div className="btn btn-color-scheme">var(--tg-color-scheme)</div>
            <div className="btn btn-theme-bg-color">var(--tg-theme-bg-color)</div>
            <div className="btn btn-theme-text-color">var(--tg-theme-text-color)</div>
            <div className="btn btn-theme-hint-color">var(--tg-theme-hint-color)</div>
            <div className="btn btn-theme-button-color">var(--tg-theme-button-color)</div>
            <div className="btn btn-theme-button-text-color">var(--tg-theme-button-text-color)</div>
            <div className="btn btn-theme-secondary-bg-color">var(--tg-theme-secondary-bg-color)</div>
            <div className="btn btn-theme-header-bg-color">var(--tg-theme-header-bg-color)</div>
            <div className="btn btn-theme-accent-text-color">var(--tg-theme-accent-text-color)</div>
            <div className="btn btn-theme-section-bg-color">var(--tg-theme-section-bg-color)</div>
            <div className="btn btn-theme-section-header-text-color">var(--tg-theme-section-header-text-color)</div>
            <div className="btn btn-theme-subtitle-text-color">var(--tg-theme-subtitle-text-color)</div>
            <div className="btn btn-theme-destructive-text-color">var(--tg-theme-destructive-text-color)</div>
        </div>
    );
};

export default ProductList;