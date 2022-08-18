import { Injectable } from '@nestjs/common';
import { Comment, User } from 'src/typeorm';
import { CommentRepository } from './comments.repository';
import { CreateCommentDto } from './dto/create.comment.dto';

@Injectable()
export class CommentsService {
    constructor(private readonly commentRepository: CommentRepository) { }

    async findAllById(postId: string): Promise<Comment[]> {
        return await this.commentRepository.find({ tweetId: postId });
    };

    async create(
        createCommentDto: CreateCommentDto,
        user: User,
    ): Promise<Comment> {
        return await this.commentRepository.createComment(createCommentDto, user);
    };
};
