import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IComment, IPost, IUser } from '../constants/interfaces';
import style from './PostTile.module.scss';

interface Props {
    post: IPost;
    comments?: IComment[];
    user?: IUser;
    drawHelloMessage: (
        componentName: string,
        additionalMessage?: string
    ) => void;
}

export const PostTile: React.FC<Props> = (props) => {
    const { post, comments, user, drawHelloMessage } = { ...props };

    useEffect(() => {
        drawHelloMessage('Post Tile');
    });

    return (
        <Link className={style.tileWrapper} to={`/post/${post.id}`}>
            <h2 className={style.tileTitle}>{post.title}</h2>
            <span className={style.tileUser}>{user?.name}</span>
            <b>Comments:</b>
            <ul>
                {comments?.map((c) => {
                    return <li key={c.id}>{c.name}</li>;
                })}
            </ul>
        </Link>
    );
};
