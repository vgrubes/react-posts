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
    searchString: '',
    setSearchString: () => {},
});

export const ContextProvider: React.FC<Props> = (props) => {
    const postService = useMemo(() => {
        return new PostService();
    }, []);

    const [posts, setPosts] = useState<IPost[] | null>(null);
    const [comments, setComments] = useState<IComment[] | null>(null);
    const [users, setUsers] = useState<IUser[] | null>(null);
    const [searchString, setSearchString] = useState<string>('');

    const populateData = useCallback(async () => {
        try {
            const posts = postService.getPosts();
            const comments = postService.getComments();
            const users = postService.getUsers();

            Promise.all([posts, comments, users]).then((values) => {
                setPosts(values[0]);
                setComments(values[1]);
                setUsers(values[2]);
            });
        } catch (e) {
            console.error('Populate data error!', e);
        }
    }, [postService]);

    useEffect(() => {
        populateData();
    }, [populateData]);

    return (
        <Context.Provider
            value={{
                comments: comments ?? [],
                users: users ?? [],
                posts: posts ?? [],
                searchString,
                setSearchString,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
