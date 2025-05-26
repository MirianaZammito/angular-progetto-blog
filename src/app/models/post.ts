import { User } from "./user";

export interface Post {
    id: string;
    title: string;
    content: string;
    urlImage: string; 
    authorId: string;
    authorUsername: string;
}
