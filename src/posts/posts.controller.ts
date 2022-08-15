import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreatePostsDto } from './dto/create.posts.dto';
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
    findById(@Param('id', ParseUUIDPipe) id: string): PostModel {
        return this.postsService.findById(id);
    };

    @Post()
    create(
        @Body() createPostsDto: CreatePostsDto,
    ): PostModel {
        return this.postsService.create(createPostsDto);
    };

    @Patch(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body('title') title: string,
        @Body('postText') postText: string,
    ): PostModel {
        return this.postsService.update(id, title, postText);
    };

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string) {
        return this.postsService.delete(id);
    };
}
