import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostsDto } from './dto/create.posts.dto';
import { PostsRepository } from './posts.repository';
import { Posts } from 'src/typeorm';

@Injectable()
export class PostsService {
    constructor(private readonly postsRepository: PostsRepository) { }

    async findAll(): Promise<Posts[]> {
        return await this.postsRepository.find();
    };

    async findById(id: string): Promise<Posts> {
        const found = await this.postsRepository.findOne(id);
        if (!found) {
            throw new NotFoundException('投稿が見つかりません');
        }
        return found;
    };

    async create(createPostsDto: CreatePostsDto): Promise<Posts> {
        return await this.postsRepository.createPost(createPostsDto);
    };

    async update(id: string, title: string, postText: string): Promise<Posts> {
        const post = await this.findById(id);
        post.title = title;
        post.postText = postText;
        post.updatedAt = new Date().toISOString();
        await this.postsRepository.save(post);
        return post;
    };

    async delete(id: string): Promise<string> {
        await this.postsRepository.delete({ id });
        return '削除完了しました';
    };
}
