import React, { useEffect } from 'react';
import style from './PageLayout.module.scss';

interface Props {
    navigationComponent?: React.ReactNode;
    drawHelloMessage: (
        componentName: string,
        additionalMessage?: string
    ) => void;
}

export const PageLayout: React.FC<Props> = (props) => {
    const { navigationComponent, drawHelloMessage } = { ...props };

    useEffect(() => {
        drawHelloMessage('Page Layout');
    }, [drawHelloMessage]);

    return (
        <div className={style.pageLayoutWrapper}>
            <nav className={style.navigation}>{navigationComponent}</nav>
            <main className={style.main}>{props.children}</main>
        </div>
    );
};
