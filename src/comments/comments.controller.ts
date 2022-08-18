import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateCommentDto } from './dto/create.comment.dto';
import { Comment, User } from 'src/typeorm';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { CommentsService } from './comments.service';
import { GetUser } from 'src/user/decorator/get-user.docorator';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Get(':postId')
    async findAllById(@Param('postId') postId: string): Promise<Comment[]> {
        return await this.commentsService.findAllById(postId);
    };

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(
        @Body() createCommentDto: CreateCommentDto,
        @GetUser() user: User,
    ): Promise<Comment> {
        return await this.commentsService.create(createCommentDto, user);
    };
};
