import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comments.repository';

@Injectable()
export class CommentsService {
    constructor(private readonly commentRepository: CommentRepository) { }


}
