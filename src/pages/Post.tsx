import React, { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../constants/interfaces';
import { Context } from '../context/Context';

interface Props {
    drawHelloMessage: (helloMessage: string) => void;
}

export const Post: React.FC<Props> = (props: Props) => {
    const { postId } = useParams();
    const { posts, users, comments } = useContext(Context);

    useEffect(() => {
        props.drawHelloMessage('Post Component');
    }, [props]);

    const getPost: IPost | undefined = useMemo(() => {
        return posts.find((post) => post.id.toString() === postId);
    }, [posts, postId]);

    return (
        <div>
            <h1>{getPost?.title}</h1>
            <p>{getPost?.body}</p>
        </div>
    );
};
