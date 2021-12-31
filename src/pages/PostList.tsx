import React, { useContext, useMemo } from 'react';
import { PageLayout, PostTile, Search } from '../components';
import { IPost } from '../constants/interfaces';
import { Context } from '../context/Context';
import style from './PostList.module.scss';

interface Props {
    drawHelloMessage: (helloMessage: string) => void;
}

export const PostList: React.FC<Props> = (props: Props) => {
    const { posts, users, comments, searchString } = useContext(Context);

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
        <PageLayout navigationComponent={<Search />}>
            <ul className={style.postListWrapper}>
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
        </PageLayout>
    );
};
