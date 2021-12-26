import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostService } from '../services/posts-service';
import { IPost } from '../constants/interfaces';

interface Props {
    drawHelloMessage: (helloMessage: string) => void;
}

export const Post: React.FC<Props> = (props: Props) => {
    const postService = useMemo(() => {
        return new PostService();
    }, []);

    const { postId } = useParams();
    const [post, setPost] = useState<IPost | null>(null);

    const populatePost = useCallback(async () => {
        if (!postId) {
            return null;
        }

        try {
            const post = await postService.getPost(postId!);
            setPost(post);
        } catch (e) {
            console.error('Populate post error!', e);
        }
    }, [postService, postId]);

    useEffect(() => {
        props.drawHelloMessage('Post Component');
    }, [props]);

    useEffect(() => {
        populatePost();
    }, [populatePost]);

    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
        </div>
    );
};
