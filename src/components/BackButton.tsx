import React from 'react';
import { Link } from 'react-router-dom';
import style from './BackButton.module.scss';

export const BackButton: React.FC = () => {
    return (
        <Link className={style.button} to="/posts">
            <span className={style.buttonLabel}>Go Back</span>
        </Link>
    );
};
