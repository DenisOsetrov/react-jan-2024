import React, { FC } from 'react';
import {ICarWithAuthMode} from "../../models/ICarWithAuthMode";

import styles from './CarComponent.module.css';


interface IProps {
    car: ICarWithAuthMode;
}

const CarComponent: FC<IProps> = ({ car }) => {
    return (
        <div className={styles.car}>
            <h3>Car №{car.id}. {car.brand}</h3>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
        </div>
    );
};

export default CarComponent;