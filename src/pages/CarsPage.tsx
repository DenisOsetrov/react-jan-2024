import React from 'react';
import CarsComponent from "../components/CarsComponents/CarsComponent";
import {useOutletContext} from "react-router-dom";
import WarningComponent from "../components/WarningComponent/WarningComponent";


const CarsPage = () => {

    // логіка для виведення повідомлення про виведення cars тільки після логінації
    const [isAuthenticated] = useOutletContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>();

    if (!isAuthenticated) {
        return <WarningComponent />;
    }

    return (
        <div>
            <CarsComponent/>
        </div>
    );
};

export default CarsPage;