import React, { useContext } from 'react';
import { Context } from '../context/Context';
import style from './Search.module.scss';

export const Search: React.FC = () => {
    const { setSearchString } = useContext(Context);

    const onSearchChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(ev.target.value);
    };

    return (
        <input
            className={style.input}
            id="search-input"
            type="text"
            placeholder="Search for post..."
            onChange={onSearchChange}
        />
    );
};
