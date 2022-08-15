import { Injectable } from '@nestjs/common';
import { PostModel } from './posts.model';

@Injectable()
export class PostsService {
    private posts: PostModel[] = [];

    findAll(): PostModel[] {
        return this.posts;
    }

    findById(id: string): PostModel {
        return this.posts.find(post => post.id === id);
    }

    create(post: PostModel): PostModel {
        this.posts.push(post);
        return post;
    }

    update(id: string, title: string, postText: string): PostModel {
        const post = this.findById(id);
        post.title = title;
        post.postText = postText;
        return post;
    }

    delete(id: string): string {
        this.posts = this.posts.filter(post => post.id !== id);
        return '削除完了しました';
    }
}
