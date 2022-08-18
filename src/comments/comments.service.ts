import { BadRequestException, Injectable } from '@nestjs/common';
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

    async delete(
        commentId: string,
        user: User,
    ): Promise<string> {
        const comment = await this.commentRepository.findOne(commentId);
        if (comment.username !== user.username) {
            throw new BadRequestException('他ユーザーのメッセージは削除できません');
        }
        await this.commentRepository.delete({ id: commentId });
        return 'コメントの削除完了しました';
    };
};
