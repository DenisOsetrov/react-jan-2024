import React, {useEffect, useState} from 'react';
import CarComponent from "./CarComponent";
import {ICarWithAuthMode} from "../../models/ICarWithAuthMode";
import {carService} from "../../services/api.service";

const CarsComponent = () => {

    const [cars, setCars] = useState<ICarWithAuthMode[]>([]);

    useEffect(() => {
        carService.getCars().then(data => {
            if (data && data.items) {
                setCars(data.items);
            }
        });
    }, []);


    return (
        <div>
            {cars.map(car => (
                <CarComponent key={car.id} car={car} />
            ))}
        </div>
    );
};

export default CarsComponent;