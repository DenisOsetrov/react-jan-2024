import React, {FC, useEffect, useState} from 'react';
import CarComponent from "./CarComponent";
import {ICarWithAuthMode} from "../../models/ICarWithAuthMode";
import styles from './CarsComponent.module.css';


interface IProps {
    cars: ICarWithAuthMode[]
}
const CarsComponent: FC<IProps> = ({ cars }) => {
    const [, setItems] = useState<ICarWithAuthMode[]>(cars);

    useEffect(() => {
        setItems(cars);
    }, [cars]);



    return (
        <div className={styles.gridContainer}>
            {cars.map(car => (
                <CarComponent key={car.id} car={car} />
            ))}
        </div>
    );
};

export default CarsComponent;