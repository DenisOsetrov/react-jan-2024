import React, {FC} from 'react';
import {IPaginatedPageModel} from "../../models/IPaginatedPageModel";
import styles from './PaginationComponent.module.css'


interface IProps {
    setQuery: (query: URLSearchParams) => void;
    prev: IPaginatedPageModel | null;
    next: IPaginatedPageModel | null;
}

const PaginationComponent: FC<IProps> = ({ setQuery, prev, next }) => {
    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                if (prev) {
                    setQuery(new URLSearchParams({ page: prev.page.toString() }));
                }
                break;
            case 'next':
                if (next) {
                    setQuery(new URLSearchParams({ page: next.page.toString() }));
                }
                break;
        }
    };
    return (
        <div className={styles.paginationContainer}>
            <button
                className={styles.paginationButton}
                onClick={() => changePage('prev')}
                disabled={!prev}
            >
                prev
            </button>
            <button
                className={styles.paginationButton}
                onClick={() => changePage('next')}
                disabled={!next}
            >
                next
            </button>
        </div>
    );
};

export default PaginationComponent;