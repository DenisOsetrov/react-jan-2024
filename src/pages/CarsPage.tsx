import React, {useEffect, useState} from 'react';
import CarsComponent from "../components/CarsComponents/CarsComponent";
import {useOutletContext, useSearchParams} from "react-router-dom";
import WarningComponent from "../components/WarningComponent/WarningComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {carService} from "../services/api.service";
import PaginationComponent from "../components/ButtonPaginationComponent/PaginationComponent";


const CarsPage = () => {

    // допомагає считувати чи впроваджувати в адресну сторінку браузера потрібну інформацію
    // деструктуруємо дані з useSearchParams
    const [query, setQuery] = useSearchParams({page: '1'})

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
        carService.getCars(query.get('page') || '1').then(value => {
            if (value) {
                setCarsPaginatedObject(value);
                console.log(value) // об'єкт з усіма записаними cars
            }
            });
    }, [query]);

    // щоб передати changePage треба її визначити
    const changePage = (action:string) => {
        switch (action) {
            case 'prev':
                setQuery({...carsPaginatedObject.prev})
                break;
            case 'next':
                setQuery({...carsPaginatedObject.next})
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