import React, {FC} from 'react';
import {ICarWithAuthMode} from "../../models/ICarWithAuthMode";

interface IProps {
    car: ICarWithAuthMode;
}

const CarComponent:FC<IProps> = ({car}) => {
    return (
        <div>
            <h2>{car.brand}</h2>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
            {/*<img src={car.photo} alt={car.brand} width="200"/>*/}
        </div>
    );
};

export default CarComponent;