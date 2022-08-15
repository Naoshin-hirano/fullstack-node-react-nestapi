import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PostModel } from './posts.model';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()
    findAll(): PostModel[] {
        return this.postsService.findAll();
    };

    @Get(':id')
    findById(@Param('id') id: string): PostModel {
        return this.postsService.findById(id);
    };

    @Post()
    create(
        @Body('id') id: string,
        @Body('title') title: string,
        @Body('postText') postText: string,
        @Body('username') username: string,
    ): PostModel {
        const post: PostModel = {
            id,
            title,
            postText,
            username,
        };
        return this.postsService.create(post);
    };

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body('title') title: string,
        @Body('postText') postText: string,
    ): PostModel {
        return this.postsService.update(id, title, postText);
    };

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.postsService.delete(id);
    };
}
