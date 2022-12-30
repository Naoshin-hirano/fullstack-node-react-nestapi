import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Posts, User } from 'src/typeorm';
import { GetUser } from 'src/user/decorator/get-user.docorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { CreatePostDto } from './dto/create.post.dto';
import { PostService } from './post.service';

// UseInterceptors： posts〜にリクエスト時にintercepter系メソッド(Excludeなど)を通過する
@Controller('posts')
@UseInterceptors(ClassSerializerInterceptor)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async findAll(): Promise<Posts[]> {
    return await this.postService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Posts> {
    return await this.postService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createTweetDto: CreatePostDto,
    @GetUser() user: User,
  ): Promise<Posts> {
    return await this.postService.create(createTweetDto, user);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('title') title: string,
    @Body('postText') postText: string,
  ): Promise<Posts> {
    return await this.postService.update(id, title, postText);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
    @GetUser() user: User,
  ): Promise<string> {
    return await this.postService.delete(id, user);
  }
}
