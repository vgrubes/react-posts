import React, { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton, PageLayout } from '../components';
import { IComment, IPost, IUser } from '../constants/interfaces';
import { Context } from '../context/Context';
import style from './PostDetail.module.scss';

interface Props {
    drawHelloMessage: (helloMessage: string) => void;
}

export const PostDetail: React.FC<Props> = (props: Props) => {
    const { postId } = useParams();
    const { posts, users, comments } = useContext(Context);

    useEffect(() => {
        props.drawHelloMessage('Post Component');
    }, [props]);

    const getPost: IPost | undefined = useMemo(() => {
        return posts.find((post) => post.id.toString() === postId);
    }, [posts, postId]);

    const getUser: IUser | undefined = useMemo(() => {
        return users.find((user) => user.id === getPost?.userId);
    }, [getPost?.userId, users]);

    const getComments: IComment[] | undefined = useMemo(() => {
        return comments.filter((comment) => comment.postId === getPost?.id);
    }, [getPost?.id, comments]);

    return (
        <PageLayout navigationComponent={<BackButton />}>
            <div className={style.wrapper}>
                <h1 className={style.title}>{getPost?.title}</h1>
                <span className={style.user}>
                    {getUser?.name} - {getUser?.email}
                </span>
                <p>{getPost?.body}</p>
                <b>Comments:</b>
                <ul>
                    {getComments.map((comment) => {
                        return (
                            <li>
                                <span>
                                    {comment.body} {comment.name}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </PageLayout>
    );
};
