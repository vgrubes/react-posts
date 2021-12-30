import { IComment, IPost, IUser } from "../constants/interfaces";



export class PostService {
    async getPosts(): Promise<IPost[]> {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (response.ok) {
            const data = await response.json();
            const posts: IPost[] = data;
            return posts;
        }
        
        return [];
    }

    async getPost(postId: string): Promise<IPost | null> {
        const response: Response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

        if (response.ok) {
            const data = await response.json();
            const post: IPost = data;
            return post;
        }
        
        return null;
    }

    async getComments(): Promise<IComment[]> {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/comments');

        if (response.ok) {
            const data = await response.json();
            const comments: IComment[] = data;
            return comments;
        }

        return [];
    }

    async getUsers(): Promise<IUser[]> {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (response.ok) {
            const data = await response.json();
            const users: IUser[] = data;
            return users;
        }

        return [];
    }
}