import React, { FC } from 'react';
import styles from './product.module.css';

export interface IProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail?: string;
    images: string[];
}

export type ITypeProductProps = IProductProps & { children?: React.ReactNode };

const Product: FC<ITypeProductProps> = ({
                                            id,
                                            title,
                                            price,
                                            images,
                                            brand,
                                            category,
                                            discountPercentage,
                                            rating,
                                            stock,
                                            thumbnail,
                                            description
                                        }) => {

    // Обчислення нової ціни з урахуванням знижки
    const newPrice: number = +(price - price * (discountPercentage || 0) / 100).toFixed(1);

    return (
        <div className={styles.productBox}>
            <h2 className={styles.title}>{id}. {title}</h2>
            <div className={styles.priceBox}>
              <span className={styles.oldPrice}>
    Old price: <span style={{textDecoration: 'line-through'}}>{price}</span> $
</span>
                <span className={styles.discount}>Discount: {discountPercentage}%</span>
                <span className={styles.newPrice}>New price: ${newPrice}</span>
            </div>
            <h4 className={styles.descriptionTitle}>Description:</h4>
            <p className={styles.description}>{description}</p>
            <div className={styles.imageGallery}>
                {images.map((image, index) => (
                    <img key={index} className={styles.image} src={image} alt={title} />
                ))}
            </div>
            <div className={styles.details}>
                <p className={styles.brand}>Brand: {brand}</p>
                <p className={styles.category}>Category: {category}</p>
                <p className={styles.rating}>Rating: {rating}</p>
                <p className={styles.stock}>Stock: {stock} units</p>
                <p className={styles.thumbnail}>
                    Thumbnail: <a href={thumbnail} target="_blank" rel="noopener noreferrer">{thumbnail}</a>
                </p>
            </div>
        </div>
    );
};

export default Product;