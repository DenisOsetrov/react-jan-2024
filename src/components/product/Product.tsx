import React, {FC} from 'react';

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

// пропишемо і протипізуємо children (частина коду, що знаходиться між відкритим і закритим тегами компонента)
type ITypeProductProps = IProductProps & {children?: React.ReactNode};
const Product: FC<ITypeProductProps> = ({id, title, price, images, brand, category, discountPercentage, rating, stock, thumbnail, description, children}) => {
    return (
        <div>
            <h2>{id}. {title} - {price}</h2>

            // Відображення кожного зображення з масиву images за допомогою методу map().
            // Кожне зображення має унікальний ключ, що дорівнює індексу масиву,
            // та властивість alt, яка містить заголовок продукту.

            {images.length > 0 && images.map((image, index) => (
                <img key={index} src={image} alt={title} />
            ))}
        </div>
    );
};

export default Product;