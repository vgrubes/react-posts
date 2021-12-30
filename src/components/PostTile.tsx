import React from 'react';
import { IComment, IPost, IUser } from '../constants/interfaces';

interface Props {
    post: IPost;
    comments?: IComment[];
    user?: IUser;
}

export const PostTile: React.FC<Props> = (props) => {
    const { post, comments, user } = { ...props };

    return (
        <a href={`post/${post.id}`}>
            <h1>{post.title}</h1>
            <span>Comments:</span>
            <ul>
                {comments?.map((c) => {
                    return <li key={c.id}>{c.name}</li>;
                })}
            </ul>

            <span>User: {user?.name}</span>
        </a>
    );
};
