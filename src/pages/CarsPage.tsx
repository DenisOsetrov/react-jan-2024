import React, {useEffect, useState} from 'react';
import CarsComponent from "../components/CarsComponents/CarsComponent";
import {useOutletContext} from "react-router-dom";
import WarningComponent from "../components/WarningComponent/WarningComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {carService} from "../services/api.service";
import PaginationComponent from "../components/ButtonPaginationComponent/PaginationComponent";


const CarsPage = () => {

    // логіка для виведення повідомлення про виведення cars тільки після логінації
    const [isAuthenticated] = useOutletContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>();

    if (!isAuthenticated) {
        return <WarningComponent />;
    }

    // побудуємо useState для слідкування за станом пагінації сторінок
    const [carsPaginatedObject, setCarsPaginatedObject] =
        useState<ICarPaginatedModel>({
            items:[],
            next: null,
            prev: null,
            total_items: 0,
            total_pages: 0
        })

    useEffect(() => {
        carService.getCars().then(value => {
            if (value) {
                setCarsPaginatedObject(value)
            }
            });
    }, []);

    // щоб передати changePage треба її визначити
    const changePage = (action:string) => {
        switch (action) {
            case 'prev':
                break;
            case 'next':
                break;
        }
    }

    return (
        <div>
            <CarsComponent cars={carsPaginatedObject.items}/>
            <PaginationComponent changePage={changePage} prev={carsPaginatedObject.prev} next={carsPaginatedObject.next}/>
        </div>
    );
};

export default CarsPage;