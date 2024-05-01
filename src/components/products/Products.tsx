import React, {FC} from 'react';
import {IProductProps} from "../product/Product";


const Products: FC = () => {

let product : IProductProps[]
    fetch('https://dummyjson.com/products')
        .then(value => value.json())
        .then(value => {
            product = value.product;
            console.log(product)
        });
    console.log('test');

    return (
        <div>

        </div>
    );
};

export default Products;