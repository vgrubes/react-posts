import React, { useContext, useState, useMemo } from 'react';
import { PostTile } from '../components';
import { IPost } from '../constants/interfaces';
import { Context } from '../context/Context';

interface Props {
    drawHelloMessage: (helloMessage: string) => void;
}

export const PostList: React.FC<Props> = (props: Props) => {
    const { posts, users, comments } = useContext(Context);
    const [searchString, setSearchString] = useState<string>('');

    const onSearchChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(ev.target.value);
    };

    const getPosts = useMemo((): IPost[] => {
        if (searchString) {
            return posts.filter((post) => {
                return post.title
                    .toLowerCase()
                    .includes(searchString.toLowerCase());
            });
        }

        return posts;
    }, [searchString, posts]);

    return (
        <div>
            <input type="text" onChange={onSearchChange} />
            <ul>
                {getPosts?.map((post) => {
                    return (
                        <li key={post.id}>
                            <PostTile
                                post={post}
                                comments={comments?.filter(
                                    (c) => c.postId === post.id
                                )}
                                user={users?.find((u) => u.id === post.userId)}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
