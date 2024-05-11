import React, {FC, useEffect, useState} from 'react';
import Product, {IProductProps} from "../product/Product";


const Products: FC = () => {

    const [products, setProduct] = useState<IProductProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProduct(products)
            });
    }, []);


    return (
        <div>
            {products.map(({
                               id,
                               title,
                               description,
                               price,
                               images,
                               category,
                               brand,
                               rating,
                               stock,
                               thumbnail,
                               discountPercentage
                           }) => (
                <Product key={id} id={id} title={title} description={description} price={price} images={images}
                         category={category} brand={brand} discountPercentage={discountPercentage} rating={rating}
                         stock={stock} thumbnail={thumbnail}/>))}
        </div>
    );
};

export default Products;