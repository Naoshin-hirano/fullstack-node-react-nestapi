import { User } from "src/typeorm";
import { Comment } from "src/typeorm/comments.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateCommentDto } from "./dto/create.comment.dto";

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment>{
    async createComment(
        createCommentDto: CreateCommentDto,
        user: User,
    ): Promise<Comment> {
        const { commentBody, tweetId } = createCommentDto;
        const comment = this.create({
            commentBody,
            username: user.username,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            tweetId
        });
        await this.save(comment);
        return comment;
    }
}