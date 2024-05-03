import React, {FC} from 'react';

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage?: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail?: string,
    images: string[]
}

// пропишемо і протипізуємо children (частина коду, що знаходиться між відкритим і закритим тегами компонента)
export type ITypeProductProps = IProductProps & {children?: React.ReactNode};
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
                                            description}) => {

    // Обчислення нової ціни з урахуванням знижки
    const newPrice: number = price - price * (discountPercentage || 0) / 100;

    return (
        <div>
            <h2>{id}. {title}. Old price - {price}$.</h2>
            <h2>New price on this week - {newPrice}$.</h2>
            <p> Discount - {discountPercentage}%. </p>
            <h4> Description: </h4>
            <p> Brand - {brand} </p>
            <p> Category - {category} </p>
            <p> {description} </p>
                        {/*Відображення кожного зображення з масиву images за допомогою методу map().*/}
                        {/*Кожне зображення має унікальний ключ, що дорівнює індексу масиву*/}
            <ul>
                {images.length > 0 && images.map((image, index) => <li><img key={index} src={image} alt={title}/></li>)}
            </ul>
            <p> Thumbnail - {thumbnail} </p>
            <p> Rating - {rating} </p>
            <p> Stock - {stock} units</p>



        </div>
    );
};

export default Product;