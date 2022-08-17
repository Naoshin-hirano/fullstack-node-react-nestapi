import { Injectable } from '@nestjs/common';
import { User } from 'src/typeorm';
import { LikeRepository } from './likes.repository';

@Injectable()
export class LikeService {
    constructor(private readonly likeRepository: LikeRepository) { }

    async create(id: string, user: User): Promise<boolean> {
        return await this.likeRepository.createLike(id, user);
    };
};