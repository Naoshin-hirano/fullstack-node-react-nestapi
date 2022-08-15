import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostsDto } from './dto/create.posts.dto';
import { PostModel } from './posts.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PostsService {
    private posts: PostModel[] = [];

    findAll(): PostModel[] {
        return this.posts;
    };

    findById(id: string): PostModel {
        const found = this.posts.find(post => post.id === id);
        if (!found) {
            throw new NotFoundException('投稿が見つかりません');
        }
        return found;
    };

    create(createPostsDto: CreatePostsDto): PostModel {
        const post: PostModel = {
            id: uuid(),
            ...createPostsDto,
        }
        this.posts.push(post);
        return post;
    };

    update(id: string, title: string, postText: string): PostModel {
        const post = this.findById(id);
        post.title = title;
        post.postText = postText;
        return post;
    };

    delete(id: string): string {
        this.posts = this.posts.filter(post => post.id !== id);
        return '削除完了しました';
    };
}
