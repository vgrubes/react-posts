import React, { useContext, useEffect } from 'react';
import { Context } from '../context/Context';
import style from './Search.module.scss';

interface Props {
    drawHelloMessage: (
        componentName: string,
        additionalMessage?: string
    ) => void;
}

export const Search: React.FC<Props> = (props) => {
    const { drawHelloMessage } = { ...props };
    const { setSearchString } = useContext(Context);

    useEffect(() => {
        drawHelloMessage('Search');
    }, [drawHelloMessage]);

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
