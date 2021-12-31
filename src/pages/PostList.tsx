import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { PageLayout, PostTile, Search } from '../components';
import { IPost } from '../constants/interfaces';
import { Context } from '../context/Context';
import style from './PostList.module.scss';

interface Props {
    drawHelloMessage: (
        componentName: string,
        additionalMessage?: string
    ) => void;
}

export const PostList: React.FC<Props> = (props: Props) => {
    const { drawHelloMessage } = { ...props };
    const { posts, users, comments, searchString, isLoading } =
        useContext(Context);

    useEffect(() => {
        drawHelloMessage('Post List');
    }, [drawHelloMessage]);

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

    const drawPostList = useCallback(
        () => (
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
                                drawHelloMessage={drawHelloMessage}
                            />
                        </li>
                    );
                })}
            </ul>
        ),
        [comments, drawHelloMessage, getPosts, users]
    );

    return (
        <PageLayout
            navigationComponent={<Search drawHelloMessage={drawHelloMessage} />}
            drawHelloMessage={drawHelloMessage}
        >
            {isLoading ? (
                <h2 className={style.isLoading}>Loading...</h2>
            ) : (
                drawPostList()
            )}
        </PageLayout>
    );
};
