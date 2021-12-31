import React from 'react';
import style from './PageLayout.module.scss';

interface Props {
    navigationComponent?: React.ReactNode;
}

export const PageLayout: React.FC<Props> = (props) => {
    return (
        <div className={style.pageLayoutWrapper}>
            <nav className={style.navigation}>{props.navigationComponent}</nav>
            <main>{props.children}</main>
        </div>
    );
};
