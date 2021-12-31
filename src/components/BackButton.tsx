import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './BackButton.module.scss';

interface Props {
    drawHelloMessage: (
        componentName: string,
        additionalMessage?: string
    ) => void;
}

export const BackButton: React.FC<Props> = (props) => {
    const { drawHelloMessage } = { ...props };

    useEffect(() => {
        drawHelloMessage('Back Button');
    }, [drawHelloMessage]);

    return (
        <Link className={style.button} to="/posts">
            <span className={style.buttonLabel}>Go Back</span>
        </Link>
    );
};
