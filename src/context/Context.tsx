import React, {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { IPost, IContext, IComment, IUser } from '../constants/interfaces';
import { PostService } from '../services/postsService';

interface Props {}

export const Context = createContext<IContext>({
    comments: [],
    users: [],
    posts: [],
});

export const ContextProvider: React.FC<Props> = (props) => {
    const postService = useMemo(() => {
        return new PostService();
    }, []);

    const [posts, setPosts] = useState<IPost[] | null>(null);
    const [comments, setComments] = useState<IComment[] | null>(null);
    const [users, setUsers] = useState<IUser[] | null>(null);

    const populatePosts = useCallback(async () => {
        try {
            const posts = await postService.getPosts();
            setPosts(posts);
        } catch (e) {
            console.error('Populate posts error!', e);
        }
    }, [postService]);

    const populateComments = useCallback(async () => {
        try {
            const comments = await postService.getComments();
            setComments(comments);
        } catch (e) {
            console.error('Populate comments error!', e);
        }
    }, [postService]);

    const populateUsers = useCallback(async () => {
        try {
            const users = await postService.getUsers();
            setUsers(users);
        } catch (e) {
            console.error('Populate users error!', e);
        }
    }, [postService]);

    useEffect(() => {
        if (posts === null) {
            populatePosts();
        }
    }, [populatePosts, posts]);

    useEffect(() => {
        if (comments === null) {
            populateComments();
        }
    }, [populateComments, comments]);

    useEffect(() => {
        if (users === null) {
            populateUsers();
        }
    }, [populateUsers, users]);

    return (
        <Context.Provider
            value={{
                comments: comments ?? [],
                users: users ?? [],
                posts: posts ?? [],
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
