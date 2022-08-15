import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { Posts } from 'src/typeorm';
import { CreatePostsDto } from './dto/create.posts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()
    async findAll(): Promise<Posts[]> {
        return await this.postsService.findAll();
    };

    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Posts> {
        return await this.postsService.findById(id);
    };

    @Post()
    async create(
        @Body() createPostsDto: CreatePostsDto,
    ): Promise<Posts> {
        return await this.postsService.create(createPostsDto);
    };

    @Patch(':id')
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body('title') title: string,
        @Body('postText') postText: string,
    ): Promise<Posts> {
        return await this.postsService.update(id, title, postText);
    };

    @Delete(':id')
    async delete(@Param('id', ParseUUIDPipe) id: string): Promise<string> {
        return await this.postsService.delete(id);
    };
}
