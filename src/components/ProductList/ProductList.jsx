import React, {useEffect, useState} from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const ProductList = () => {
    const {tg} = useTelegram()

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

    const [card, setCard] = useState([])

    useEffect(()=>{
        if(!card.length){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()
        }
    },[card])

    function addProductToCard(product){
        const index = card.findIndex(el => el.id === product.id)

        if(index >= 0){
            const productsCard = card.filter(el => el.id !== product.id)

            setCard(productsCard)
        }else{
            setCard([...card, product])
        }
    }

    const getActiveProductClass = (id = 0)=>{
        const index = card.findIndex(el => el.id === id)

        return index >=0 ? 'active' : ''
    }

    return (
        <div>
            <div className={'product-list'}>
                {
                    products ?
                        products.map((product) =>
                            <ProductItem className={getActiveProductClass(product?.id)} product={product} key={product.id} addProductToCard={(product)=>addProductToCard(product)}/>
                        )
                        : ''
                }
            </div>
        </div>
    );
};

export default ProductList;