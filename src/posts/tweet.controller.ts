import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { Tweet, User } from 'src/typeorm';
import { GetUser } from 'src/user/decorator/get-user.docorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { CreatePostsDto } from './dto/create.tweet.dto';
import { TweetService } from './tweet.service';

// UseInterceptors： tweets〜にリクエスト時にintercepter系メソッド(Excludeなど)を通過する
@Controller('tweets')
@UseInterceptors(ClassSerializerInterceptor)
export class TweetController {
    constructor(private readonly tweetService: TweetService) { }

    @Get()
    async findAll(): Promise<Tweet[]> {
        return await this.tweetService.findAll();
    };

    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Tweet> {
        return await this.tweetService.findById(id);
    };

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(
        @Body() createPostsDto: CreatePostsDto,
        @GetUser() user: User,
    ): Promise<Tweet> {
        return await this.tweetService.create(createPostsDto, user);
    };

    @Patch(':id')
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body('title') title: string,
        @Body('postText') postText: string,
    ): Promise<Tweet> {
        return await this.tweetService.update(id, title, postText);
    };

    @Delete(':id')
    async delete(@Param('id', ParseUUIDPipe) id: string): Promise<string> {
        return await this.tweetService.delete(id);
    };
}
