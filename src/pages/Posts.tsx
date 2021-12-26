import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IPost } from '../constants/interfaces';
import { PostService } from '../services/posts-service';

interface Props {
    drawHelloMessage: (helloMessage: string) => void;
}

export const Posts: React.FC<Props> = (props: Props) => {
    const postService = useMemo(() => {
        return new PostService();
    }, []);

    const [posts, setPosts] = useState<IPost[]>([]);

    const populatePosts = useCallback(async () => {
        try {
            const posts = await postService.getPosts();
            setPosts(posts);
        } catch (e) {
            console.error('Populate posts error!', e);
        }
    }, [postService]);

    useEffect(() => {
        props.drawHelloMessage('Posts Component');
    }, [props]);

    useEffect(() => {
        if (posts.length === 0) {
            populatePosts();
        }
    }, [populatePosts, posts]);

    return (
        <ul>
            {posts.map((post) => {
                return (
                    <li key={post.id}>
                        <a href={`post/${post.id}`}>{post.title}</a>
                    </li>
                );
            })}
        </ul>
    );
};
