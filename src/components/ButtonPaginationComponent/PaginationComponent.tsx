import React, {FC} from 'react';
import {IPaginatedPageModel} from "../../models/IPaginatedPageModel";

interface IProps {
    changePage: (action:string)=> void;
    prev: IPaginatedPageModel | null;
    next: IPaginatedPageModel | null;
}

const PaginationComponent:FC<IProps> = ({changePage, prev, next}) => {
    return (
        <div>

            {/* аргументи 'prev' i 'next' ф-ції changePage будуть тригерами з переміщення між сторінками карів */}
            {/* передамо в агрументи компоненти пропс changePage. Параметризуємо під ф-цію void. Назва action -
             довільна! disabled={!prev} - дезактивує кнопки */}

            <button onClick={() => {
                changePage('prev')
            }} disabled={!prev}>prev</button>

            <button onClick={() => {
                changePage('next')
            }} disabled={!next}>next</button>

        </div>
    );
};

export default PaginationComponent;