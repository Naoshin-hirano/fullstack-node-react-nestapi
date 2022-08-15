import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostsDto } from './dto/create.tweet.dto';
import { TweetRepository } from './tweet.repository';
import { Tweet, User } from 'src/typeorm';

@Injectable()
export class TweetService {
    constructor(private readonly postsRepository: TweetRepository) { }

    async findAll(): Promise<Tweet[]> {
        return await this.postsRepository.find();
    };

    async findById(id: string): Promise<Tweet> {
        const found = await this.postsRepository.findOne(id);
        if (!found) {
            throw new NotFoundException('投稿が見つかりません');
        }
        return found;
    };

    async create(
        createPostsDto: CreatePostsDto,
        user: User,
    ): Promise<Tweet> {
        return await this.postsRepository.createPost(createPostsDto, user);
    };

    async update(id: string, title: string, postText: string): Promise<Tweet> {
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