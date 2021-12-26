import { IPost } from "../constants/interfaces";



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
}