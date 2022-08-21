import { Injectable } from '@nestjs/common';
import { User } from 'src/typeorm';
import { RelationshipsRepository } from './relationships.repository';

@Injectable()
export class RelationshipsService {
    constructor(private readonly relationshipsRepository: RelationshipsRepository) { }

    async followOrUnfollow(
        followedId: string,
        user: User,
    ): Promise<boolean> {
        return await this.relationshipsRepository.followOrUnfollow(followedId, user);
    }
};