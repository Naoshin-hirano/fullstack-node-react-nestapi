import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTweetDto } from './dto/create.tweet.dto';
import { TweetRepository } from './tweet.repository';
import { Tweet, User } from 'src/typeorm';

@Injectable()
export class TweetService {
    constructor(private readonly postsRepository: TweetRepository) { }

    async findAll(): Promise<Tweet[]> {
        return await this.postsRepository.find({
            relations: ['likes']
        });
    };

    async findById(id: string): Promise<Tweet> {
        const found = await this.postsRepository.findOne(id);
        if (!found) {
            throw new NotFoundException('投稿が見つかりません');
        }
        return found;
    };

    async create(
        createTweetDto: CreateTweetDto,
        user: User,
    ): Promise<Tweet> {
        return await this.postsRepository.createPost(createTweetDto, user);
    };

    async update(id: string, title: string, postText: string): Promise<Tweet> {
        const post = await this.findById(id);
        post.title = title;
        post.postText = postText;
        post.updatedAt = new Date().toISOString();
        await this.postsRepository.save(post);
        return post;
    };

    async delete(id: string, user: User): Promise<string> {
        const tweet = await this.findById(id);
        if (tweet.userId !== user.id) {
            throw new BadRequestException('他ユーザーのtweetは削除できません');
        }
        await this.postsRepository.delete({ id });
        return '削除完了しました';
    };
}
