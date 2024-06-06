import React, {useEffect, useState} from 'react';
import CarsComponent from "../components/CarsComponents/CarsComponent";
import {useOutletContext, useSearchParams} from "react-router-dom";
import WarningComponent from "../components/WarningComponent/WarningComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {carService} from "../services/api.service";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";


const CarsPage = () => {
    const [query, setQuery] = useSearchParams({ page: '1' });
    const [isAuthenticated, setIsAuthenticated] = useOutletContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>();

    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    });

    useEffect(() => {
        if (isAuthenticated) {
            carService.getCars(query.get('page') || '1').then(value => {
                if (value) {
                    setCarsPaginatedObject(value);
                }
            }).catch(error => {
                if (error?.response?.status === 401) {
                    setIsAuthenticated(false);
                }
            });
        }
    }, [query, isAuthenticated, setIsAuthenticated]);

    if (!isAuthenticated) {
        return <WarningComponent />;
    }

    return (
        <div>
            <CarsComponent cars={carsPaginatedObject.items}/>
            <PaginationComponent setQuery={setQuery} prev={carsPaginatedObject.prev} next={carsPaginatedObject.next}/>
        </div>
    );
};

export default CarsPage;
