import React from 'react';
import {pagination} from '../../constants/ui';
import PaginationItem from './PaginationItem';

const Pagination = ({activePage, setActivePage}) => (
    <ul className="pages">
        { pagination.map(el => <PaginationItem
            activePage={activePage}
            setActivePage={setActivePage}
            key={el}
            number={el}
        />) }
    </ul>
);

export default Pagination;